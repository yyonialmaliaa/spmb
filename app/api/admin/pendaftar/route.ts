import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function GET() {
  const session = await getSession()
  if (!session || session.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const data = await prisma.pendaftaran.findMany({
    include: {
      user: {
        select: { email: true },
      },
    },
    orderBy: { createdAt: 'desc' },
  })

  const stats = {
    total: data.length,
    pending: data.filter(p => p.status === 'pending').length,
    verified: data.filter(p => p.status === 'verified').length,
    diterima: data.filter(p => p.status === 'diterima').length,
    ditolak: data.filter(p => p.status === 'ditolak').length,
  }

  const enriched = data.map(p => ({
    ...p,
    userEmail: p.user.email,
  }))

  return NextResponse.json({ data: enriched, stats })
}
