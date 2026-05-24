'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  GraduationCap, Users, LayoutDashboard, BarChart2,
  LogOut, User, Download, Printer, TrendingUp,
  CheckCircle, XCircle, Clock, AlertCircle
} from 'lucide-react';

type Pendaftaran = {
  id: string; namaLengkap: string; jurusan: string; asalSekolah: string;
  jenisKelamin: string; status: string; nilaiSeleksi?: number; createdAt: string;
};
type Stats = { total: number; pending: number; verified: number; diterima: number; ditolak: number };

export default function AdminLaporan() {
  const router = useRouter();
  const [session, setSession] = useState<{ namaLengkap?: string } | null>(null);
  const [data, setData] = useState<Pendaftaran[]>([]);
  const [stats, setStats] = useState<Stats>({ total: 0, pending: 0, verified: 0, diterima: 0, ditolak: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/auth/me').then(r => r.json()).then(d => {
      if (!d.user || d.user.role !== 'admin') { router.push('/login'); return; }
      setSession(d.user);
    });
    fetch('/api/admin/pendaftar').then(r => r.json()).then(d => {
      setData(d.data || []);
      setStats(d.stats || { total: 0, pending: 0, verified: 0, diterima: 0, ditolak: 0 });
      setLoading(false);
    });
  }, [router]);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/');
  };

  // Compute per-jurusan stats
  const jurusanStats = data.reduce((acc, p) => {
    const key = p.jurusan;
    if (!acc[key]) acc[key] = { total: 0, diterima: 0, ditolak: 0, pending: 0 };
    acc[key].total++;
    if (p.status === 'diterima') acc[key].diterima++;
    else if (p.status === 'ditolak') acc[key].ditolak++;
    else acc[key].pending++;
    return acc;
  }, {} as Record<string, { total: number; diterima: number; ditolak: number; pending: number }>);

  const genderStats = data.reduce((acc, p) => {
    const k = p.jenisKelamin || 'Tidak diketahui';
    acc[k] = (acc[k] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const avgNilai = (() => {
    const withNilai = data.filter(p => p.nilaiSeleksi != null);
    if (!withNilai.length) return 0;
    return (withNilai.reduce((s, p) => s + (p.nilaiSeleksi || 0), 0) / withNilai.length).toFixed(1);
  })();

  const handlePrint = () => window.print();

  const handleExportCSV = () => {
    const headers = ['No', 'Nama', 'Jurusan', 'Asal Sekolah', 'Jenis Kelamin', 'Status', 'Nilai', 'Tanggal Daftar'];
    const rows = data.map((p, i) => [
      i + 1, p.namaLengkap, p.jurusan, p.asalSekolah,
      p.jenisKelamin, p.status, p.nilaiSeleksi ?? '', new Date(p.createdAt).toLocaleDateString('id-ID')
    ]);
    const csv = [headers, ...rows].map(r => r.map(v => `"${v}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `laporan-spmb-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click(); URL.revokeObjectURL(url);
  };

  const maxJurusan = Math.max(...Object.values(jurusanStats).map(j => j.total), 1);

  return (
    <div style={{ minHeight: '100vh', background: '#F8F9FA', display: 'flex' }}>
      {/* Sidebar */}
      <aside style={{ width: 240, background: '#0A1628', borderRight: '1px solid rgba(200,151,58,0.2)', flexShrink: 0, display: 'flex', flexDirection: 'column' }} className="no-print">
        <div style={{ padding: '24px 20px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{ width: 38, height: 38, background: 'linear-gradient(135deg,#C8973A,#E8B84B)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <GraduationCap size={20} color="#0A1628" />
            </div>
            <div>
              <div style={{ color: 'white', fontWeight: 700, fontSize: 13 }}>SMK Citra Negara</div>
              <div style={{ color: '#C8973A', fontSize: 10 }}>Admin Panel</div>
            </div>
          </Link>
        </div>
        <nav style={{ padding: '16px 12px', flex: 1 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: 1, marginBottom: 8, paddingLeft: 14 }}>MENU</div>
          {[
            { href: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
            { href: '/admin/pendaftar', icon: Users, label: 'Data Pendaftar' },
            { href: '/admin/laporan', icon: BarChart2, label: 'Laporan', active: true },
          ].map(item => (
            <Link key={item.href} href={item.href} className="sidebar-link" style={{ marginBottom: 4, background: item.active ? 'rgba(200,151,58,0.15)' : undefined, color: item.active ? '#C8973A' : undefined }}>
              <item.icon size={17} />
              {item.label}
            </Link>
          ))}
        </nav>
        <div style={{ padding: '16px 12px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: 10, marginBottom: 8 }}>
            <div style={{ width: 32, height: 32, background: 'rgba(200,151,58,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <User size={16} color="#C8973A" />
            </div>
            <div>
              <div style={{ color: 'white', fontSize: 12, fontWeight: 600 }}>{session?.namaLengkap}</div>
              <div style={{ color: '#C8973A', fontSize: 10 }}>Administrator</div>
            </div>
          </div>
          <button onClick={handleLogout} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 8, padding: '9px 12px', background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', borderRadius: 8, fontSize: 12, fontFamily: 'inherit' }}>
            <LogOut size={15} /> Keluar
          </button>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, overflow: 'auto' }}>
        <header style={{ background: 'white', borderBottom: '1px solid #E5E7EB', padding: '0 32px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} className="no-print">
          <h1 style={{ fontSize: 18, fontWeight: 700, color: '#0A1628' }}>Laporan SPMB</h1>
          <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={handleExportCSV} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '8px 16px', background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 8, color: '#059669', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
              <Download size={15} /> Export CSV
            </button>
            <button onClick={handlePrint} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '8px 16px', background: '#0A1628', border: 'none', borderRadius: 8, color: 'white', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
              <Printer size={15} /> Cetak
            </button>
          </div>
        </header>

        <main style={{ padding: '32px' }}>
          {/* Print header */}
          <div className="print-only" style={{ display: 'none', textAlign: 'center', marginBottom: 28, borderBottom: '2px solid #C8973A', paddingBottom: 20 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: '#0A1628' }}>SMK CITRA NEGARA</h2>
            <p style={{ fontSize: 14, color: '#6B7280' }}>Laporan SPMB Tahun Ajaran 2026/2027</p>
            <p style={{ fontSize: 12, color: '#9CA3AF' }}>Dicetak: {new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          <style>{`@media print { .print-only { display: block !important; } }`}</style>

          {/* Summary Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, marginBottom: 28 }}>
            {[
              { label: 'Total Pendaftar', val: stats.total, icon: Users, color: '#0A1628', bg: '#F8F9FA' },
              { label: 'Diterima', val: stats.diterima, icon: CheckCircle, color: '#059669', bg: '#F0FDF4' },
              { label: 'Ditolak', val: stats.ditolak, icon: XCircle, color: '#DC2626', bg: '#FFF1F2' },
              { label: 'Rata-rata Nilai', val: avgNilai, icon: TrendingUp, color: '#C8973A', bg: '#FFFBEB' },
            ].map(c => (
              <div key={c.label} style={{ background: 'white', borderRadius: 14, padding: 22, border: '1px solid #F3F4F6' }}>
                <div style={{ width: 42, height: 42, background: c.bg, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <c.icon size={20} color={c.color} />
                </div>
                <div className="font-display" style={{ fontSize: 34, fontWeight: 700, color: c.color, lineHeight: 1 }}>{c.val}</div>
                <div style={{ fontSize: 13, color: '#6B7280', marginTop: 6 }}>{c.label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
            {/* Per Jurusan */}
            <div style={{ background: 'white', borderRadius: 14, padding: 24, border: '1px solid #F3F4F6' }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0A1628', marginBottom: 20 }}>Pendaftar per Jurusan</h3>
              {loading ? (
                <p style={{ color: '#9CA3AF', fontSize: 13 }}>Memuat...</p>
              ) : Object.keys(jurusanStats).length === 0 ? (
                <p style={{ color: '#9CA3AF', fontSize: 13 }}>Belum ada data</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {Object.entries(jurusanStats).sort((a, b) => b[1].total - a[1].total).map(([jurusan, s]) => (
                    <div key={jurusan}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                        <span style={{ fontSize: 13, fontWeight: 600, color: '#374151', maxWidth: '70%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{jurusan}</span>
                        <span style={{ fontSize: 12, color: '#6B7280' }}>{s.total} pendaftar</span>
                      </div>
                      <div style={{ height: 8, background: '#F3F4F6', borderRadius: 4, overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${(s.total / maxJurusan) * 100}%`, background: 'linear-gradient(90deg,#C8973A,#E8B84B)', borderRadius: 4, transition: 'width 0.6s ease' }} />
                      </div>
                      <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
                        <span style={{ fontSize: 11, color: '#059669' }}>✓ {s.diterima} diterima</span>
                        <span style={{ fontSize: 11, color: '#DC2626' }}>✗ {s.ditolak} ditolak</span>
                        <span style={{ fontSize: 11, color: '#D97706' }}>⏳ {s.pending} proses</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Gender & Status pie-like */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {/* Gender */}
              <div style={{ background: 'white', borderRadius: 14, padding: 22, border: '1px solid #F3F4F6' }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0A1628', marginBottom: 16 }}>Jenis Kelamin</h3>
                {Object.keys(genderStats).length === 0 ? (
                  <p style={{ color: '#9CA3AF', fontSize: 13 }}>Belum ada data</p>
                ) : (
                  <div style={{ display: 'flex', gap: 16 }}>
                    {Object.entries(genderStats).map(([gender, count]) => (
                      <div key={gender} style={{ flex: 1, background: gender === 'Laki-laki' ? '#EFF6FF' : '#FDF2F8', borderRadius: 10, padding: '14px 16px', textAlign: 'center' }}>
                        <div style={{ fontSize: 28, marginBottom: 4 }}>{gender === 'Laki-laki' ? '👦' : '👧'}</div>
                        <div className="font-display" style={{ fontSize: 28, fontWeight: 700, color: gender === 'Laki-laki' ? '#2563EB' : '#DB2777' }}>{count}</div>
                        <div style={{ fontSize: 12, color: '#6B7280', marginTop: 2 }}>{gender}</div>
                        <div style={{ fontSize: 11, color: '#9CA3AF' }}>{stats.total > 0 ? ((count / stats.total) * 100).toFixed(0) : 0}%</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Status distribution */}
              <div style={{ background: 'white', borderRadius: 14, padding: 22, border: '1px solid #F3F4F6' }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0A1628', marginBottom: 16 }}>Status Pendaftaran</h3>
                {[
                  { label: 'Diterima', val: stats.diterima, color: '#059669', bg: '#D1FAE5' },
                  { label: 'Diverifikasi', val: stats.verified, color: '#2563EB', bg: '#DBEAFE' },
                  { label: 'Menunggu', val: stats.pending, color: '#D97706', bg: '#FEF3C7' },
                  { label: 'Ditolak', val: stats.ditolak, color: '#DC2626', bg: '#FEE2E2' },
                ].map(s => (
                  <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                    <div style={{ width: 36, height: 36, background: s.bg, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: 16, fontWeight: 800, color: s.color }}>{s.val}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                        <span style={{ fontSize: 13, fontWeight: 600, color: '#374151' }}>{s.label}</span>
                        <span style={{ fontSize: 12, color: '#9CA3AF' }}>{stats.total > 0 ? ((s.val / stats.total) * 100).toFixed(0) : 0}%</span>
                      </div>
                      <div style={{ height: 5, background: '#F3F4F6', borderRadius: 3 }}>
                        <div style={{ height: '100%', width: `${stats.total > 0 ? (s.val / stats.total) * 100 : 0}%`, background: s.color, borderRadius: 3, transition: 'width 0.6s' }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Full table for print */}
          <div style={{ background: 'white', borderRadius: 14, border: '1px solid #F3F4F6', overflow: 'hidden' }}>
            <div style={{ padding: '18px 24px', borderBottom: '1px solid #F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0A1628' }}>Rekapitulasi Seluruh Pendaftar</h3>
              <span style={{ fontSize: 12, color: '#9CA3AF' }}>{data.length} total</span>
            </div>
            {data.length === 0 ? (
              <div style={{ padding: 48, textAlign: 'center' }}>
                <AlertCircle size={32} color="#E5E7EB" style={{ margin: '0 auto 12px' }} />
                <p style={{ color: '#9CA3AF' }}>Belum ada data pendaftar</p>
              </div>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th style={{ width: 40 }}>#</th>
                      <th>Nama Lengkap</th>
                      <th>Jurusan</th>
                      <th>Asal Sekolah</th>
                      <th>L/P</th>
                      <th>Nilai</th>
                      <th>Status</th>
                      <th>Tgl Daftar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((p, i) => {
                      const statusColor: Record<string, string> = { diterima: '#059669', ditolak: '#DC2626', verified: '#2563EB', pending: '#D97706' };
                      const statusLabel: Record<string, string> = { diterima: 'Diterima', ditolak: 'Ditolak', verified: 'Diverifikasi', pending: 'Menunggu' };
                      const statusBg: Record<string, string> = { diterima: '#D1FAE5', ditolak: '#FEE2E2', verified: '#DBEAFE', pending: '#FEF3C7' };
                      return (
                        <tr key={p.id}>
                          <td style={{ color: '#9CA3AF', fontSize: 12 }}>{i + 1}</td>
                          <td style={{ fontWeight: 600, color: '#0A1628', fontSize: 14 }}>{p.namaLengkap}</td>
                          <td style={{ fontSize: 13, color: '#6B7280' }}>{p.jurusan}</td>
                          <td style={{ fontSize: 13, color: '#6B7280' }}>{p.asalSekolah}</td>
                          <td style={{ textAlign: 'center', fontSize: 13 }}>{p.jenisKelamin === 'Laki-laki' ? 'L' : 'P'}</td>
                          <td style={{ textAlign: 'center', fontWeight: 700, color: p.nilaiSeleksi != null && p.nilaiSeleksi >= 70 ? '#059669' : '#DC2626', fontSize: 14 }}>
                            {p.nilaiSeleksi != null ? p.nilaiSeleksi : '—'}
                          </td>
                          <td>
                            <span style={{ background: statusBg[p.status], color: statusColor[p.status], padding: '3px 10px', borderRadius: 12, fontSize: 11, fontWeight: 700 }}>
                              {statusLabel[p.status]}
                            </span>
                          </td>
                          <td style={{ fontSize: 12, color: '#9CA3AF' }}>{new Date(p.createdAt).toLocaleDateString('id-ID')}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
