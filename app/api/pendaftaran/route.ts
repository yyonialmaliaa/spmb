import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/db'

// GET - ambil data pendaftaran milik user yang login
export async function GET() {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const data = await prisma.pendaftaran.findUnique({
    where: { userId: session.userId },
  })

  return NextResponse.json({ data })
}

// POST - submit formulir pendaftaran baru
export async function POST(req: Request) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const body = await req.json()

    // Cek sudah pernah daftar
    const existing = await prisma.pendaftaran.findUnique({
      where: { userId: session.userId },
    })
    if (existing) {
      return NextResponse.json(
        { error: 'Anda sudah melakukan pendaftaran' },
        { status: 400 }
      )
    }

    // Validasi field wajib
    const required = [
      'namaLengkap', 'namaPanggilan', 'ttl', 'jenisKelamin',
      'alamat', 'agama', 'namaOrtu', 'noOrtu',
      'jurusan', 'asalSekolah', 'nisn', 'nik',
    ]
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Field ${field} wajib diisi` },
          { status: 400 }
        )
      }
    }

    const pendaftaran = await prisma.pendaftaran.create({
      data: {
        userId: session.userId,
        namaLengkap: body.namaLengkap,
        namaPanggilan: body.namaPanggilan,
        ttl: body.ttl,
        jenisKelamin: body.jenisKelamin,
        alamat: body.alamat,
        agama: body.agama,
        namaOrtu: body.namaOrtu,
        noOrtu: body.noOrtu,
        noPribadi: body.noPribadi || null,
        jurusan: body.jurusan,
        asalSekolah: body.asalSekolah,
        nisn: body.nisn,
        nik: body.nik,
        status: 'pending',
      },
    })

    return NextResponse.json({ success: true, data: pendaftaran })
  } catch (err) {
    console.error('Pendaftaran error:', err)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    )
  }
}

// PUT - update data (hanya kalau masih pending)
export async function PUT(req: Request) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const body = await req.json()

    const existing = await prisma.pendaftaran.findUnique({
      where: { userId: session.userId },
    })
    if (!existing) {
      return NextResponse.json(
        { error: 'Data pendaftaran tidak ditemukan' },
        { status: 404 }
      )
    }
    if (existing.status !== 'pending') {
      return NextResponse.json(
        { error: 'Data tidak dapat diubah karena sudah diproses' },
        { status: 400 }
      )
    }

    const updated = await prisma.pendaftaran.update({
      where: { userId: session.userId },
      data: body,
    })

    return NextResponse.json({ success: true, data: updated })
  } catch (err) {
    console.error('Update error:', err)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    )
  }
}
