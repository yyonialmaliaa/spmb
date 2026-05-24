'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { GraduationCap, FileText, Clock, CheckCircle, XCircle, LogOut, Plus, User, AlertCircle } from 'lucide-react';

type Pendaftaran = {
  id: string;
  namaLengkap: string;
  jurusan: string;
  asalSekolah: string;
  status: string;
  nilaiSeleksi?: number;
  catatan?: string;
  createdAt: string;
};

type Session = { userId: string; email: string; role: string; namaLengkap?: string };

const STATUS_CONFIG = {
  pending:  { label: 'Menunggu Verifikasi', color: '#92400E', bg: '#FEF3C7', icon: Clock },
  verified: { label: 'Sedang Diverifikasi', color: '#1E40AF', bg: '#DBEAFE', icon: CheckCircle },
  diterima: { label: 'Diterima', color: '#065F46', bg: '#D1FAE5', icon: CheckCircle },
  ditolak:  { label: 'Tidak Diterima', color: '#991B1B', bg: '#FEE2E2', icon: XCircle },
};

export default function DashboardPage() {
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);
  const [pendaftaran, setPendaftaran] = useState<Pendaftaran | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/auth/me').then(r => r.json()).then(d => {
      if (!d.user) { router.push('/login'); return; }
      if (d.user.role === 'admin') { router.push('/admin/dashboard'); return; }
      setSession(d.user);
    });
    fetch('/api/pendaftaran').then(r => r.json()).then(d => {
      setPendaftaran(d.data || null);
      setLoading(false);
    });
  }, [router]);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/');
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: '#FAF7F0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: 48, height: 48, border: '4px solid #E5E7EB', borderTopColor: '#C8973A', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 16px' }} />
          <p style={{ color: '#6B7280' }}>Memuat data...</p>
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  const status = pendaftaran ? STATUS_CONFIG[pendaftaran.status as keyof typeof STATUS_CONFIG] : null;

  return (
    <div style={{ minHeight: '100vh', background: '#FAF7F0' }}>
      {/* Header */}
      <header style={{ background: '#0A1628', borderBottom: '2px solid #C8973A', padding: '0 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg,#C8973A,#E8B84B)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <GraduationCap size={18} color="#0A1628" />
            </div>
            <span style={{ color: 'white', fontWeight: 700, fontSize: 14 }}>SMK Citra Negara</span>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 32, height: 32, background: 'rgba(200,151,58,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <User size={16} color="#C8973A" />
              </div>
              <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13 }}>{session?.namaLengkap}</span>
            </div>
            <button onClick={handleLogout} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)', padding: '6px 12px', borderRadius: 6, cursor: 'pointer', fontSize: 12 }}>
              <LogOut size={14} /> Keluar
            </button>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px' }}>
        {/* Welcome */}
        <div style={{ marginBottom: 36 }}>
          <h1 className="font-display" style={{ fontSize: 32, color: '#0A1628', marginBottom: 6 }}>
            Halo, {session?.namaLengkap?.split(' ')[0]}! 👋
          </h1>
          <p style={{ color: '#6B7280', fontSize: 15 }}>Dashboard SPMB SMK Citra Negara</p>
        </div>

        {!pendaftaran ? (
          /* No registration yet */
          <div style={{ background: 'white', borderRadius: 20, padding: 48, textAlign: 'center', border: '2px dashed #E5E7EB', maxWidth: 560, margin: '0 auto' }}>
            <div style={{ width: 80, height: 80, background: 'linear-gradient(135deg,rgba(200,151,58,0.1),rgba(232,184,75,0.15))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
              <FileText size={36} color="#C8973A" />
            </div>
            <h2 className="font-display" style={{ fontSize: 24, color: '#0A1628', marginBottom: 12 }}>Belum Ada Pendaftaran</h2>
            <p style={{ color: '#6B7280', fontSize: 14, lineHeight: 1.7, marginBottom: 32 }}>
              Anda belum mengisi formulir pendaftaran SPMB. Segera lengkapi formulir untuk memproses pendaftaran Anda.
            </p>
            <Link href="/spmb/daftar" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15 }}>
              <Plus size={18} /> Isi Formulir Pendaftaran
            </Link>
          </div>
        ) : (
          /* Has registration */
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24 }}>
            {/* Status Card */}
            <div>
              <div style={{ background: 'white', borderRadius: 16, padding: 28, marginBottom: 20, border: '1px solid #F0EBE0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0A1628' }}>Status Pendaftaran</h3>
                  {status && (
                    <span style={{ background: status.bg, color: status.color, padding: '5px 14px', borderRadius: 20, fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>
                      <status.icon size={13} /> {status.label}
                    </span>
                  )}
                </div>

                {/* Progress Steps */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 28 }}>
                  {['Pendaftaran', 'Verifikasi', 'Seleksi', 'Pengumuman'].map((step, i) => {
                    const isDone = i < ['pending','verified','diterima','ditolak'].indexOf(pendaftaran.status);
                    const isCurrent = i === ['pending','verified','diterima','ditolak'].indexOf(pendaftaran.status);
                    return (
                      <div key={step} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                          <div style={{ width: 32, height: 32, borderRadius: '50%', background: isDone || isCurrent ? 'linear-gradient(135deg,#C8973A,#E8B84B)' : '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 6, fontSize: 13, fontWeight: 700, color: isDone || isCurrent ? '#0A1628' : '#9CA3AF' }}>
                            {isDone ? '✓' : i + 1}
                          </div>
                          <span style={{ fontSize: 11, color: isCurrent ? '#C8973A' : isDone ? '#0A1628' : '#9CA3AF', fontWeight: isCurrent ? 700 : 400, textAlign: 'center', whiteSpace: 'nowrap' }}>{step}</span>
                        </div>
                        {i < 3 && <div style={{ height: 2, flex: 0.5, background: isDone ? '#C8973A' : '#E5E7EB', margin: '0 4px', marginBottom: 20 }} />}
                      </div>
                    );
                  })}
                </div>

                {pendaftaran.catatan && (
                  <div style={{ background: '#FEF3C7', border: '1px solid #FDE68A', borderRadius: 8, padding: 14, display: 'flex', gap: 10, marginBottom: 16 }}>
                    <AlertCircle size={16} color="#92400E" style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <p style={{ fontSize: 12, fontWeight: 700, color: '#92400E', marginBottom: 4 }}>Catatan Admin</p>
                      <p style={{ fontSize: 13, color: '#92400E' }}>{pendaftaran.catatan}</p>
                    </div>
                  </div>
                )}

                {pendaftaran.nilaiSeleksi !== undefined && pendaftaran.nilaiSeleksi !== null && (
                  <div style={{ background: pendaftaran.status === 'diterima' ? '#D1FAE5' : '#FEE2E2', borderRadius: 8, padding: 16, textAlign: 'center' }}>
                    <div style={{ fontSize: 12, color: '#6B7280', marginBottom: 4 }}>Nilai Seleksi</div>
                    <div className="font-display" style={{ fontSize: 40, fontWeight: 700, color: pendaftaran.status === 'diterima' ? '#065F46' : '#991B1B' }}>
                      {pendaftaran.nilaiSeleksi}
                    </div>
                  </div>
                )}
              </div>

              {/* Data Preview */}
              <div style={{ background: 'white', borderRadius: 16, padding: 28, border: '1px solid #F0EBE0' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0A1628', marginBottom: 20 }}>Data Pendaftaran</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {[
                    { label: 'Nama Lengkap', val: pendaftaran.namaLengkap },
                    { label: 'Jurusan Pilihan', val: pendaftaran.jurusan },
                    { label: 'Asal Sekolah', val: pendaftaran.asalSekolah },
                    { label: 'Tanggal Daftar', val: new Date(pendaftaran.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) },
                  ].map(({ label, val }) => (
                    <div key={label}>
                      <div style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 600, marginBottom: 4 }}>{label}</div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#0A1628' }}>{val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Side Info */}
            <div>
              <div style={{ background: '#0A1628', borderRadius: 16, padding: 24, color: 'white', marginBottom: 20 }}>
                <h4 style={{ fontSize: 14, fontWeight: 700, color: '#E8B84B', marginBottom: 16 }}>Tahapan Selanjutnya</h4>
                {[
                  { step: 'Lengkapi berkas fisik ke sekolah', done: pendaftaran.status !== 'pending' },
                  { step: 'Tunggu verifikasi dari admin', done: pendaftaran.status === 'diterima' || pendaftaran.status === 'verified' },
                  { step: 'Ikuti proses seleksi', done: pendaftaran.status === 'diterima' },
                  { step: 'Cek pengumuman hasil', done: false },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 12, alignItems: 'flex-start' }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: item.done ? '#C8973A' : 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 10, color: item.done ? '#0A1628' : 'rgba(255,255,255,0.3)', fontWeight: 700 }}>
                      {item.done ? '✓' : i + 1}
                    </div>
                    <span style={{ fontSize: 13, color: item.done ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}>{item.step}</span>
                  </div>
                ))}
              </div>

              <div style={{ background: 'white', borderRadius: 16, padding: 24, border: '1px solid #F0EBE0' }}>
                <h4 style={{ fontSize: 14, fontWeight: 700, color: '#0A1628', marginBottom: 12 }}>Butuh Bantuan?</h4>
                <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6, marginBottom: 16 }}>
                  Hubungi kami jika ada pertanyaan seputar SPMB.
                </p>
                <div style={{ fontSize: 13, color: '#C8973A', fontWeight: 600 }}>📞 (021) 1234-5678</div>
                <div style={{ fontSize: 13, color: '#C8973A', fontWeight: 600, marginTop: 6 }}>✉️ spmb@smkcitranegara.sch.id</div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
