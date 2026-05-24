import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/db'

// PUT - update status, nilai seleksi, catatan
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getSession()
  if (!session || session.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  try {
    const { id } = await params
    const body = await req.json()
    const { status, nilaiSeleksi, catatan } = body

    const allowed = ['pending', 'verified', 'diterima', 'ditolak']
    if (status && !allowed.includes(status)) {
      return NextResponse.json({ error: 'Status tidak valid' }, { status: 400 })
    }

    const updated = await prisma.pendaftaran.update({
      where: { id },
      data: {
        ...(status && { status }),
        ...(nilaiSeleksi !== undefined && {
          nilaiSeleksi: parseFloat(nilaiSeleksi),
        }),
        ...(catatan !== undefined && { catatan }),
      },
    })

    return NextResponse.json({ success: true, data: updated })
  } catch (err) {
    console.error('Update error:', err)
    return NextResponse.json(
      { error: 'Data tidak ditemukan atau terjadi kesalahan' },
      { status: 500 }
    )
  }
}

// DELETE - hapus data pendaftar
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getSession()
  if (!session || session.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  try {
    const { id } = await params
    await prisma.pendaftaran.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Delete error:', err)
    return NextResponse.json(
      { error: 'Data tidak ditemukan' },
      { status: 404 }
    )
  }
}
