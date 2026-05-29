'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { CheckCircle, Users, Clock, Monitor } from 'lucide-react';

const JURUSAN = [
  {
    logo: '/images/logopplg.png',
    kode: 'PPLG',
    nama: 'Pengembangan Perangkat Lunak & Gim',
    deskripsi: 'Program keahlian yang mempersiapkan siswa menjadi pengembang software profesional. Mempelajari pemrograman web, game, mobile software, database, dan rekayasa sistem.',
    kuota: 72,
    kelas: 2,
    kompetensi: [
      'Dasar-dasar Pemrograman',
      'Pengembangan Perangkat Lunak',
      'Database dan Sistem Manajemen Basis Data',
      'Pemrograman Gim',
      'Desain Antarmuka Pengguna (UI) dan Pengalaman Pengguna (UX)',
      'Manajemen Proyek Perangkat Lunak',
      'Keamanan Perangkat Lunak',
      'Testing dan Debugging'
    ],
    prospek: ['Web Developer', 'Mobile Developer', 'programmer', 'UI/UX Designer', 'Mobile App Developer', 'Quality Assurance (QA) Tester'],
    color: '#1E3A5F',
  },
  {
    logo: '/images/logotjkt.png',
    kode: 'TJKT',
    nama: 'Teknik Jaringan Komputer dan Telekomunikasi',
    deskripsi: 'Bidang studi Teknik Jaringan Komputer dan Telekomunikasi adalah program pendidikan yang dirancang untuk mempersiapkan siswa dengan pengetahuan dan keterampilan praktis dalam bidang jaringan komputer dan telekomunikasi',
    kuota: 72,
    kelas: 2,
    kompetensi: [
      'Dasar-dasar Teknologi Informasi dan Komunikasi',
      'Jaringan Lokal (LAN)',
      'Jaringan Area Luas (WAN)',
      'Keamanan Jaringan',
      'Teknologi Nirkabel',
      'Pemrograman Dasar',
      'Manajemen Jaringan',
      'Sistem Telekomunikasi',
    ],
    prospek: ['Teknisi Jaringan', 'Administrator Jaringan', 'Teknisi Telekomunikasi', 'Spesialis Keamanan Jaringan', 'Teknisi IT'],
    color: '#3a96d0',
  },
  {
    logo: '/images/logodkv.png',
    kode: 'DKV',
    nama: 'Desain Komunikasi Visual',
    deskripsi: 'Bidang studi Desain Komunikasi Visual adalah program pendidikan yang fokus pada pengembangan keterampilan dalam menciptakan karya visual yang efektif untuk komunikasi. Program ini mencakup berbagai aspek desain grafis, ilustrasi, fotografi, animasi, dan multimedia untuk mempersiapkan siswa menjadi profesional kreatif yang mampu bekerja di industri kreatif dan media.',
    kuota: 36,
    kelas: 3,
    kompetensi: [
      'Dasar-dasar Desain Grafis',
      'ilustrasi dan Seni Digital',
      'Fotografi',
      'Animasi dan Multimedia',
      'Desain Web dan Interaktif',
      'Branding dan Identitas Visual',
      'Produksi Video',
      'Desain Publikasi',
    ],
    prospek: ['Desain grafis', 'ilustrator', 'Fotografer', 'vidiografer','editor vidio','Animator','Designer web', 'Desainer Identitas Visual',],
    color: '#DC2626',
  },
  {
    logo: '/images/logopm.png',
    kode: 'PM',
    nama: 'Pemasaran',
    deskripsi: 'Bidang studi Pemasaran adalah program pendidikan yang fokus pada pengembangan keterampilan dalam bidang pemasaran dan penjualan. Program ini mencakup berbagai aspek pemasaran, mulai dari riset pasar, strategi pemasaran, hingga teknik penjualan dan pelayanan pelanggan, dengan tujuan menghasilkan lulusan yang siap bekerja di berbagai sektor industri.',
    kuota: 36,
    kelas: 1,
    kompetensi: [
      'Dasar-dasar Pemasarann',
      'Riset Pasar',
      'Strategi Pemasaran',
      'Promosi dan Periklanan',
      'Penjualan dan Negosiasi',
      'Pelayanan Pelanggan',
      'E-commerce dan Pemasaran Digital',
      'Komunikasi Bisnis',
    ],
    prospek: ['Staf Pemasaran', 'Sales Representative', 'Customer Service Representative', 'Market Research Analyst', 'Digital Marketing Specialist', 'Event Coordinator'],
    color: '#92681A',
  },
  {
    logo: '/images/logomplb.png',
    kode: 'MPLB',
    nama: 'Manajemen Perkantoran & Layanan Bisnis',
    deskripsi: 'Bidang studi Manajemen Perkantoran dan Layanan Bisnis adalah program pendidikan yang dirancang untuk mempersiapkan siswa dengan pengetahuan dan keterampilan praktis dalam mengelola administrasi perkantoran dan memberikan layanan bisnis yang efektif. Program ini bertujuan untuk menghasilkan lulusan yang siap kerja di berbagai jenis perusahaan dan organisasi, baik di sektor publik maupun swasta.',
    kuota: 36,
    kelas: 1,
    kompetensi: [
      'dasar Manajemen Perkantoran',
      'Administrasi Perkantoran',
      'Teknologi Perkantoran',
      'Komunikasi Bisnis',
      'Layanan Pelanggan',
      'Manajemen Waktu dan Produktivitas',
      'Keuangan dan Akuntansi Dasar',
      'Sumber Daya Manusia',
    ],
    prospek: ['Staf Administrasi', 'Sekretaris', 'Resepsionis', 'Staf Layanan Pelanggan', 'Asisten Manajer', 'Staf Pengarsipan'],
    color: '#ffd828',
  },
  {
    logo: '/images/logoph.png',
    kode: 'PH',
    nama: 'Perhotelan',
    deskripsi: 'Program Keahlian Perhotelan adalah program pendidikan yang dirancang untuk mencetak para profesional muda yang kompeten dan siap terjun ke dalam industri pariwisata dan perhotelan yang dinamis. Program ini membekali siswa dengan pengetahuan, keterampilan, dan sikap (attitude) yang dibutuhkan untuk memberikan pelayanan prima (excellent service) di berbagai sektor, mulai dari hotel bintang lima, restoran, hingga kapal pesiar.',
    kuota: 36,
    kelas: 1,
    kompetensi: [
      'Front Office (Kantor Depan)',
      'Housekeeping (Tata Graha)',
      'Food & Beverage Service (Tata Hidang)',
      'Food & Beverage Production (Produksi Makanan & Minuman)',
      'Komunikasi Industri & Bahasa Asing',
      'Sanitasi, Higiene, dan Keselamatan Kerja',
      'Kewirausahaan',
    ],
    prospek: ['Staf Hotel dan Akomodasi', 'Restoran, Kafe, dan Jasa Katering', 'Industri Pariwisata', 'Penyelenggara Acara (Event Organizer)', 'Wirausaha'],
    color: '#024d20',
  },
];

export default function JurusanPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="hero-gradient" style={{ padding: '80px 24px' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
            <div className="gold-line" style={{ margin: '0 auto 20px' }} />
            <h1 className="font-display" style={{ fontSize: 48, color: 'white', marginBottom: 16 }}>Program Keahlian</h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, lineHeight: 1.7, maxWidth: 560, margin: '0 auto' }}>
              6 program keahlian dirancang bersama industri untuk memastikan lulusan siap kerja dan kompeten.
            </p>
          </div>
        </section>

        {/* Total info */}
        <section style={{ background: '#023d17', padding: '28px 24px', borderBottom: '2px solid #C8973A' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 40, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { icon: Users, label: 'Total Kuota', val: '288 Siswa' },
              { icon: Monitor, label: 'Program Keahlian', val: '6 Jurusan' },
              { icon: Clock, label: 'Masa Belajar', val: '3 Tahun' },
              { icon: CheckCircle, label: 'Akreditasi', val: 'A (Unggul)' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, background: 'rgba(200,151,58,0.15)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <item.icon size={18} color="#C8973A" />
                </div>
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11 }}>{item.label}</div>
                  <div style={{ color: 'white', fontWeight: 700, fontSize: 15 }}>{item.val}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Jurusan Cards */}
        <section style={{ padding: '70px 24px', background: '#FAF7F0' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 32 }}>
            {JURUSAN.map((j) => (
              <div key={j.kode} style={{
                background: 'white', borderRadius: 20, overflow: 'hidden',
                border: '1px solid #F0EBE0',
                display: 'grid', gridTemplateColumns: '300px 1fr',
                boxShadow: '0 2px 20px rgba(10,22,40,0.06)',
              }}>
                {/* Left panel */}
                <div style={{ background: j.color, padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    {/* Logo — pakai <img> biasa agar tidak perlu konfigurasi next/image */}
                    <div style={{
                      width: 80, height: 80,
                      background: 'rgba(255,255,255,0.15)',
                      borderRadius: 18,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: 20,
                      border: '1.5px solid rgba(255,255,255,0.2)',
                      overflow: 'hidden',
                    }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={j.logo}
                        alt={`Logo ${j.kode}`}
                        width={64}
                        height={64}
                        style={{ objectFit: 'contain', width: 64, height: 64 }}
                      />
                    </div>

                    <div style={{
                      background: '#C8973A', color: '#0A1628',
                      fontSize: 11, fontWeight: 800,
                      padding: '4px 12px', borderRadius: 6,
                      display: 'inline-block', marginBottom: 12,
                    }}>{j.kode}</div>

                    <h3 className="font-display" style={{ fontSize: 24, color: 'white', lineHeight: 1.3, marginBottom: 14 }}>{j.nama}</h3>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{j.deskripsi}</p>
                  </div>

                  <div style={{ marginTop: 28 }}>
                    <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
                      <div>
                        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', marginBottom: 3 }}>KUOTA</div>
                        <div style={{ fontSize: 22, fontWeight: 800, color: '#E8B84B' }}>{j.kuota}</div>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>siswa/tahun</div>
                      </div>
                      <div style={{ width: 1, background: 'rgba(255,255,255,0.1)' }} />
                      <div>
                        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', marginBottom: 3 }}>ROMBEL</div>
                        <div style={{ fontSize: 22, fontWeight: 800, color: '#E8B84B' }}>{j.kelas}</div>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>kelas/angkatan</div>
                      </div>
                    </div>
                    <Link href="/register" style={{
                      display: 'block', textAlign: 'center',
                      background: 'linear-gradient(135deg,#C8973A,#E8B84B)',
                      color: '#0A1628', fontWeight: 700,
                      padding: '11px', borderRadius: 10,
                      textDecoration: 'none', fontSize: 14,
                    }}>
                      Daftar Jurusan Ini →
                    </Link>
                  </div>
                </div>

                {/* Right panel */}
                <div style={{ padding: 36 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
                    <div>
                      <h4 style={{ fontSize: 13, fontWeight: 700, color: '#C8973A', letterSpacing: 0.8, marginBottom: 16 }}>KOMPETENSI YANG DIPELAJARI</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {j.kompetensi.map((k, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                            <CheckCircle size={16} color="#C8973A" style={{ flexShrink: 0, marginTop: 1 }} />
                            <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.4 }}>{k}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 style={{ fontSize: 13, fontWeight: 700, color: '#C8973A', letterSpacing: 0.8, marginBottom: 16 }}>PROSPEK KARIR</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {j.prospek.map((p, i) => (
                          <div key={i} style={{
                            background: '#FAF7F0', borderRadius: 8,
                            padding: '9px 14px',
                            display: 'flex', alignItems: 'center', gap: 8,
                          }}>
                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: j.color, flexShrink: 0 }} />
                            <span style={{ fontSize: 13, color: '#374151', fontWeight: 500 }}>{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '70px 24px', background: '#023d17', textAlign: 'center' }}>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <h2 className="font-display" style={{ color: 'white', fontSize: 38, marginBottom: 16 }}>Sudah Tentukan Pilihan?</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
              Daftar sekarang dan mulai perjalanan menuju karir impian Anda bersama SMK Citra Negara.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/register" className="btn-primary" style={{ fontSize: 16 }}>Daftar SPMB Sekarang</Link>
              <Link href="/spmb" className="btn-outline" style={{ fontSize: 16 }}>Info Lebih Lanjut</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}