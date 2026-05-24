'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { GraduationCap, Target, Eye, Heart, Award, Users, BookOpen, Briefcase } from 'lucide-react';

const STRUKTUR = [
  { jabatan: 'Kepala Sekolah', nama: 'Drs. H. Ahmad Fauzi, M.Pd.' },
  { jabatan: 'Wakil Kepala Bid. Kurikulum', nama: 'Dra. Sri Handayani, M.M.' },
  { jabatan: 'Wakil Kepala Bid. Kesiswaan', nama: 'Budi Santoso, S.Pd.' },
  { jabatan: 'Wakil Kepala Bid. Humas', nama: 'Dewi Rahayu, S.Kom.' },
  { jabatan: 'Wakil Kepala Bid. Sarana', nama: 'Ir. Hendra Wijaya' },
  { jabatan: 'Kepala Tata Usaha', nama: 'Siti Nurhayati, S.E.' },
];

const PRESTASI = [
  { tahun: '2025', nama: 'Juara 1 LKS Tingkat Nasional', kategori: 'Web Development' },
  { tahun: '2025', nama: 'Sekolah Adiwiyata Tingkat Provinsi', kategori: 'Lingkungan Hidup' },
  { tahun: '2024', nama: 'Juara 2 LKS Tingkat Nasional', kategori: 'Jaringan Komputer' },
  { tahun: '2024', nama: 'Penghargaan Sekolah Terbaik', kategori: 'Kemendikbud RI' },
  { tahun: '2023', nama: 'Juara 1 OSN Tingkat Provinsi', kategori: 'Informatika' },
  { tahun: '2023', nama: 'ISO 9001:2015', kategori: 'Manajemen Mutu' },
];

export default function TentangPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="hero-gradient" style={{ padding: '80px 24px' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ width: 80, height: 80, background: 'linear-gradient(135deg,#C8973A,#E8B84B)', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
              <GraduationCap size={40} color="#0A1628" />
            </div>
            <h1 className="font-display" style={{ fontSize: 48, color: 'white', marginBottom: 16 }}>Tentang SMK Citra Negara</h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, lineHeight: 1.7, maxWidth: 580, margin: '0 auto' }}>
              Berdiri sejak 2010, kami telah menjadi institusi pendidikan kejuruan terkemuka yang menghasilkan lulusan siap kerja dan berkarakter.
            </p>
          </div>
        </section>

        {/* Visi Misi */}
        <section style={{ padding: '80px 24px', background: 'white' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="gold-line" style={{ margin: '0 auto 16px' }} />
              <h2 className="font-display" style={{ fontSize: 38, color: '#0A1628' }}>Visi & Misi</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
              {[
                {
                  icon: Eye,
                  title: 'Visi',
                  content: 'Menjadi sekolah kejuruan unggulan yang mencetak generasi profesional, berkarakter, dan berdaya saing global di era industri 4.0.',
                  color: '#0A1628',
                },
                {
                  icon: Target,
                  title: 'Misi',
                  content: '1. Menyelenggarakan pendidikan berkualitas tinggi\n2. Membangun karakter siswa yang berakhlak mulia\n3. Menjalin kerjasama industri yang kuat\n4. Mengembangkan kompetensi sesuai kebutuhan dunia kerja',
                  color: '#C8973A',
                },
                {
                  icon: Heart,
                  title: 'Nilai',
                  content: 'Integritas • Profesionalisme • Inovasi • Kolaborasi • Tanggung Jawab',
                  color: '#1E3A5F',
                },
              ].map(item => (
                <div key={item.title} style={{ background: item.color, borderRadius: 18, padding: 32, color: 'white' }}>
                  <div style={{ width: 50, height: 50, background: 'rgba(255,255,255,0.1)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <item.icon size={24} color="#E8B84B" />
                  </div>
                  <h3 className="font-display" style={{ fontSize: 24, color: 'white', marginBottom: 14 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sejarah */}
        <section style={{ padding: '70px 24px', background: '#FAF7F0' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div>
              <div className="gold-line" style={{ marginBottom: 16 }} />
              <h2 className="font-display" style={{ fontSize: 38, color: '#0A1628', marginBottom: 20 }}>Sejarah Singkat</h2>
              <p style={{ color: '#6B7280', lineHeight: 1.8, fontSize: 15, marginBottom: 16 }}>
                SMK Citra Negara didirikan pada tahun 2010 atas prakarsa tokoh pendidikan dan pemerintah daerah setempat. Berawal dari 2 jurusan dan 120 siswa, kini telah berkembang menjadi sekolah dengan 5 jurusan dan lebih dari 1.200 siswa aktif.
              </p>
              <p style={{ color: '#6B7280', lineHeight: 1.8, fontSize: 15, marginBottom: 16 }}>
                Pada tahun 2015, sekolah berhasil meraih akreditasi A dari BAN-S/M dan terus mempertahankan predikat tersebut hingga saat ini. Kerjasama dengan lebih dari 50 perusahaan nasional dan multinasional menjadi bukti kepercayaan industri terhadap kualitas lulusan kami.
              </p>
              <p style={{ color: '#6B7280', lineHeight: 1.8, fontSize: 15 }}>
                Hingga 2026, lebih dari 5.000 alumni telah berhasil berkarir di berbagai perusahaan terkemuka dan lembaga pemerintahan di seluruh Indonesia.
              </p>
            </div>
            <div>
              {[
                { tahun: '2010', event: 'Sekolah didirikan dengan 2 jurusan' },
                { tahun: '2012', event: 'Penambahan jurusan Multimedia' },
                { tahun: '2015', event: 'Raih Akreditasi A dari BAN-S/M' },
                { tahun: '2018', event: 'Kerjasama dengan 25+ perusahaan' },
                { tahun: '2020', event: 'Juara Nasional LKS pertama kali' },
                { tahun: '2023', event: 'Sertifikasi ISO 9001:2015' },
                { tahun: '2026', event: 'Penerimaan siswa baru ke-17' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', marginBottom: 4 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: i === 6 ? 'linear-gradient(135deg,#C8973A,#E8B84B)' : 'white', border: `2px solid ${i === 6 ? '#C8973A' : '#E5E7EB'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, color: i === 6 ? '#0A1628' : '#9CA3AF', flexShrink: 0 }}>
                      {item.tahun}
                    </div>
                    {i < 6 && <div style={{ width: 2, height: 28, background: '#E5E7EB', margin: '3px 0' }} />}
                  </div>
                  <div style={{ background: 'white', borderRadius: 10, padding: '10px 16px', flex: 1, border: '1px solid #F0EBE0', marginBottom: 4 }}>
                    <p style={{ fontSize: 13, fontWeight: 600, color: '#374151' }}>{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Struktur Organisasi */}
        <section style={{ padding: '70px 24px', background: 'white' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div className="gold-line" style={{ margin: '0 auto 16px' }} />
              <h2 className="font-display" style={{ fontSize: 38, color: '#0A1628' }}>Struktur Organisasi</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
              {STRUKTUR.map((s, i) => (
                <div key={i} style={{ background: i === 0 ? '#0A1628' : '#FAF7F0', borderRadius: 14, padding: 24, border: i === 0 ? '2px solid #C8973A' : '1px solid #F0EBE0', display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 48, height: 48, background: i === 0 ? 'linear-gradient(135deg,#C8973A,#E8B84B)' : 'rgba(200,151,58,0.12)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Users size={20} color={i === 0 ? '#0A1628' : '#C8973A'} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: i === 0 ? '#C8973A' : '#9CA3AF', letterSpacing: 0.5, marginBottom: 4 }}>{s.jabatan}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: i === 0 ? 'white' : '#0A1628' }}>{s.nama}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prestasi */}
        <section style={{ padding: '70px 24px', background: '#FAF7F0' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div className="gold-line" style={{ margin: '0 auto 16px' }} />
              <h2 className="font-display" style={{ fontSize: 38, color: '#0A1628' }}>Prestasi & Penghargaan</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
              {PRESTASI.map((p, i) => (
                <div key={i} style={{ background: 'white', borderRadius: 14, padding: 22, border: '1px solid #F0EBE0', display: 'flex', gap: 16, alignItems: 'flex-start',
                  transition: 'all 0.2s' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#C8973A'; el.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#F0EBE0'; el.style.transform = 'none'; }}>
                  <div style={{ width: 44, height: 44, background: 'linear-gradient(135deg,#C8973A,#E8B84B)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Award size={20} color="#0A1628" />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: '#C8973A', fontWeight: 700, marginBottom: 4 }}>{p.tahun} • {p.kategori}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#0A1628', lineHeight: 1.3 }}>{p.nama}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
