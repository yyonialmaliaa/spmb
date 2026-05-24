'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { Monitor, Network, Camera, Calculator, FileText, CheckCircle, Users, Clock } from 'lucide-react';

const JURUSAN = [
  {
    icon: Monitor,
    kode: 'RPL',
    nama: 'Rekayasa Perangkat Lunak',
    deskripsi: 'Program keahlian yang mempersiapkan siswa menjadi pengembang software profesional. Mempelajari pemrograman web, mobile, database, dan rekayasa sistem.',
    kuota: 72,
    kelas: 2,
    kompetensi: ['Pemrograman Web (HTML, CSS, JavaScript)', 'Backend Development (PHP, Python, Node.js)', 'Mobile App Development', 'Database Management (MySQL, PostgreSQL)', 'UI/UX Design Dasar', 'Git & Version Control'],
    prospek: ['Web Developer', 'Mobile Developer', 'Backend Engineer', 'Full Stack Developer', 'Software QA Engineer'],
    color: '#0A1628',
  },
  {
    icon: Network,
    kode: 'TKJ',
    nama: 'Teknik Komputer & Jaringan',
    deskripsi: 'Mempersiapkan tenaga ahli di bidang infrastruktur IT, jaringan komputer, dan keamanan sistem informasi yang dibutuhkan industri.',
    kuota: 72,
    kelas: 2,
    kompetensi: ['Instalasi & Konfigurasi Jaringan', 'Administrasi Server Linux/Windows', 'Keamanan Jaringan & Cybersecurity', 'Cloud Computing Dasar', 'Troubleshooting Hardware', 'CISCO & Mikrotik'],
    prospek: ['Network Engineer', 'System Administrator', 'IT Support Specialist', 'Security Analyst', 'Cloud Engineer'],
    color: '#1E3A5F',
  },
  {
    icon: Camera,
    kode: 'MM',
    nama: 'Multimedia',
    deskripsi: 'Program kreatif yang mengajarkan desain grafis, produksi video, animasi, dan konten digital untuk kebutuhan industri kreatif modern.',
    kuota: 36,
    kelas: 1,
    kompetensi: ['Desain Grafis (Adobe Photoshop, Illustrator)', 'Video Editing & Motion Graphics', 'Animasi 2D & 3D', 'Fotografi & Videografi', 'Desain Web & UI', 'Konten Media Sosial'],
    prospek: ['Graphic Designer', 'Video Editor', 'Motion Graphic Artist', 'Content Creator', 'UI/UX Designer'],
    color: '#7C3AED',
  },
  {
    icon: Calculator,
    kode: 'AK',
    nama: 'Akuntansi & Keuangan',
    deskripsi: 'Membekali siswa dengan keahlian akuntansi, perpajakan, dan manajemen keuangan sesuai standar profesional yang berlaku di Indonesia.',
    kuota: 36,
    kelas: 1,
    kompetensi: ['Pembukuan & Laporan Keuangan', 'Perpajakan (PPh, PPN)', 'Akuntansi Biaya', 'Software Akuntansi (MYOB, Accurate)', 'Perbankan & Keuangan', 'Audit Dasar'],
    prospek: ['Staff Akuntansi', 'Tax Consultant', 'Kasir & Teller Bank', 'Finance Officer', 'Auditor Junior'],
    color: '#059669',
  },
  {
    icon: FileText,
    kode: 'AP',
    nama: 'Administrasi Perkantoran',
    deskripsi: 'Program yang mencetak tenaga administrasi profesional dengan kemampuan manajemen kantor, korespondensi, dan teknologi perkantoran modern.',
    kuota: 36,
    kelas: 1,
    kompetensi: ['Korespondensi Bisnis', 'Manajemen Arsip & Dokumen', 'Teknologi Perkantoran (MS Office)', 'Pelayanan Pelanggan', 'Bahasa Inggris Bisnis', 'Manajemen Rapat & Acara'],
    prospek: ['Sekretaris', 'Office Manager', 'Customer Service', 'Resepsionis', 'Staf Administrasi'],
    color: '#DC2626',
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
              5 program keahlian dirancang bersama industri untuk memastikan lulusan siap kerja dan kompeten.
            </p>
          </div>
        </section>

        {/* Total info */}
        <section style={{ background: '#0A1628', padding: '28px 24px', borderBottom: '2px solid #C8973A' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 40, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { icon: Users, label: 'Total Kuota', val: '252 Siswa' },
              { icon: Monitor, label: 'Program Keahlian', val: '5 Jurusan' },
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
            {JURUSAN.map((j, idx) => (
              <div key={j.kode} style={{ background: 'white', borderRadius: 20, overflow: 'hidden', border: '1px solid #F0EBE0', display: 'grid', gridTemplateColumns: '300px 1fr', boxShadow: '0 2px 20px rgba(10,22,40,0.06)' }}>
                {/* Left panel */}
                <div style={{ background: j.color, padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ width: 56, height: 56, background: 'rgba(255,255,255,0.1)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                      <j.icon size={28} color="#E8B84B" />
                    </div>
                    <div style={{ background: '#C8973A', color: '#0A1628', fontSize: 11, fontWeight: 800, padding: '4px 12px', borderRadius: 6, display: 'inline-block', marginBottom: 12 }}>{j.kode}</div>
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
                    <Link href="/register" style={{ display: 'block', textAlign: 'center', background: 'linear-gradient(135deg,#C8973A,#E8B84B)', color: '#0A1628', fontWeight: 700, padding: '11px', borderRadius: 10, textDecoration: 'none', fontSize: 14 }}>
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
                          <div key={i} style={{ background: '#FAF7F0', borderRadius: 8, padding: '9px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
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
        <section style={{ padding: '70px 24px', background: '#0A1628', textAlign: 'center' }}>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <h2 className="font-display" style={{ color: 'white', fontSize: 38, marginBottom: 16 }}>Sudah Tentukan Pilihan?</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>Daftar sekarang dan mulai perjalanan menuju karir impian Anda bersama SMK Citra Negara.</p>
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
