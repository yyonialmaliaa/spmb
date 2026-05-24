'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  GraduationCap, Users, Clock, CheckCircle, XCircle,
  LogOut, LayoutDashboard, FileText, BarChart2, Settings,
  TrendingUp, User, ChevronRight, AlertCircle
} from 'lucide-react';

type Stats = { total: number; pending: number; verified: number; diterima: number; ditolak: number };
type Session = { userId: string; email: string; role: string; namaLengkap?: string };
type Pendaftaran = {
  id: string; namaLengkap: string; jurusan: string; asalSekolah: string;
  status: string; createdAt: string; userEmail?: string;
};

export default function AdminDashboard() {
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);
  const [stats, setStats] = useState<Stats>({ total: 0, pending: 0, verified: 0, diterima: 0, ditolak: 0 });
  const [recent, setRecent] = useState<Pendaftaran[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/auth/me').then(r => r.json()).then(d => {
      if (!d.user || d.user.role !== 'admin') { router.push('/login'); return; }
      setSession(d.user);
    });
    fetch('/api/admin/pendaftar').then(r => r.json()).then(d => {
      if (d.stats) setStats(d.stats);
      if (d.data) setRecent(d.data.slice(0, 5));
      setLoading(false);
    });
  }, [router]);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/');
  };

  const STATUS_BADGE: Record<string, { label: string; color: string; bg: string }> = {
    pending:  { label: 'Menunggu', color: '#92400E', bg: '#FEF3C7' },
    verified: { label: 'Diverifikasi', color: '#1E40AF', bg: '#DBEAFE' },
    diterima: { label: 'Diterima', color: '#065F46', bg: '#D1FAE5' },
    ditolak:  { label: 'Ditolak', color: '#991B1B', bg: '#FEE2E2' },
  };

  const STAT_CARDS = [
    { label: 'Total Pendaftar', val: stats.total, icon: Users, color: '#0A1628', sub: 'Semua pendaftar' },
    { label: 'Menunggu', val: stats.pending, icon: Clock, color: '#D97706', sub: 'Perlu diverifikasi' },
    { label: 'Diterima', val: stats.diterima, icon: CheckCircle, color: '#059669', sub: 'Lolos seleksi' },
    { label: 'Ditolak', val: stats.ditolak, icon: XCircle, color: '#DC2626', sub: 'Tidak lolos' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#F8F9FA', display: 'flex' }}>
      {/* Sidebar */}
      <aside style={{ width: 240, background: '#0A1628', borderRight: '1px solid rgba(200,151,58,0.2)', flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
        {/* Logo */}
        <div style={{ padding: '24px 20px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{ width: 38, height: 38, background: 'linear-gradient(135deg,#C8973A,#E8B84B)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <GraduationCap size={20} color="#0A1628" />
            </div>
            <div>
              <div style={{ color: 'white', fontWeight: 700, fontSize: 13, lineHeight: 1.2 }}>SMK Citra Negara</div>
              <div style={{ color: '#C8973A', fontSize: 10 }}>Admin Panel</div>
            </div>
          </Link>
        </div>

        {/* Nav */}
        <nav style={{ padding: '16px 12px', flex: 1 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: 1, marginBottom: 8, paddingLeft: 14 }}>MENU</div>
          {[
            { href: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard', active: true },
            { href: '/admin/pendaftar', icon: Users, label: 'Data Pendaftar' },
            { href: '/admin/laporan', icon: BarChart2, label: 'Laporan' },
          ].map(item => (
            <Link key={item.href} href={item.href} className="sidebar-link" style={{ marginBottom: 4, background: item.active ? 'rgba(200,151,58,0.15)' : undefined, color: item.active ? '#C8973A' : undefined }}>
              <item.icon size={17} />
              {item.label}
            </Link>
          ))}
        </nav>

        {/* User info */}
        <div style={{ padding: '16px 12px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: 10, marginBottom: 8 }}>
            <div style={{ width: 32, height: 32, background: 'rgba(200,151,58,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <User size={16} color="#C8973A" />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ color: 'white', fontSize: 12, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{session?.namaLengkap}</div>
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
        {/* Top bar */}
        <header style={{ background: 'white', borderBottom: '1px solid #E5E7EB', padding: '0 32px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 style={{ fontSize: 18, fontWeight: 700, color: '#0A1628' }}>Dashboard Admin</h1>
          <div style={{ fontSize: 13, color: '#6B7280' }}>
            {new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </header>

        <main style={{ padding: '32px' }}>
          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 32 }}>
            {STAT_CARDS.map(card => (
              <div key={card.label} style={{ background: 'white', borderRadius: 14, padding: 24, border: '1px solid #F3F4F6', transition: 'box-shadow 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <div style={{ width: 44, height: 44, background: `${card.color}15`, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <card.icon size={22} color={card.color} />
                  </div>
                  <TrendingUp size={14} color="#10B981" />
                </div>
                <div className="font-display" style={{ fontSize: 36, fontWeight: 700, color: '#0A1628', lineHeight: 1 }}>{card.val}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#374151', marginTop: 6 }}>{card.label}</div>
                <div style={{ fontSize: 12, color: '#9CA3AF', marginTop: 3 }}>{card.sub}</div>
              </div>
            ))}
          </div>

          {/* Bar visual */}
          <div style={{ background: 'white', borderRadius: 14, padding: 24, marginBottom: 28, border: '1px solid #F3F4F6' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0A1628' }}>Distribusi Status Pendaftar</h3>
              <span style={{ fontSize: 12, color: '#9CA3AF' }}>Total: {stats.total}</span>
            </div>
            {stats.total > 0 ? (
              <div>
                <div style={{ height: 12, background: '#F3F4F6', borderRadius: 6, overflow: 'hidden', display: 'flex' }}>
                  {[
                    { val: stats.diterima, color: '#059669' },
                    { val: stats.verified, color: '#3B82F6' },
                    { val: stats.pending, color: '#F59E0B' },
                    { val: stats.ditolak, color: '#EF4444' },
                  ].map((b, i) => b.val > 0 && (
                    <div key={i} style={{ width: `${(b.val / stats.total) * 100}%`, background: b.color, transition: 'width 0.5s' }} />
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 20, marginTop: 12, flexWrap: 'wrap' }}>
                  {[
                    { label: 'Diterima', val: stats.diterima, color: '#059669' },
                    { label: 'Diverifikasi', val: stats.verified, color: '#3B82F6' },
                    { label: 'Menunggu', val: stats.pending, color: '#F59E0B' },
                    { label: 'Ditolak', val: stats.ditolak, color: '#EF4444' },
                  ].map(item => (
                    <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: item.color }} />
                      <span style={{ fontSize: 12, color: '#6B7280' }}>{item.label}: <strong style={{ color: '#374151' }}>{item.val}</strong></span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px 0', color: '#9CA3AF', fontSize: 14 }}>Belum ada data pendaftar</div>
            )}
          </div>

          {/* Recent Table */}
          <div style={{ background: 'white', borderRadius: 14, border: '1px solid #F3F4F6' }}>
            <div style={{ padding: '20px 24px', borderBottom: '1px solid #F3F4F6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0A1628' }}>Pendaftar Terbaru</h3>
              <Link href="/admin/pendaftar" style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#C8973A', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>
                Lihat Semua <ChevronRight size={14} />
              </Link>
            </div>
            {loading ? (
              <div style={{ padding: 40, textAlign: 'center', color: '#9CA3AF' }}>Memuat...</div>
            ) : recent.length === 0 ? (
              <div style={{ padding: 48, textAlign: 'center' }}>
                <AlertCircle size={32} color="#E5E7EB" style={{ margin: '0 auto 12px' }} />
                <p style={{ color: '#9CA3AF', fontSize: 14 }}>Belum ada pendaftar</p>
              </div>
            ) : (
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Nama</th>
                    <th>Jurusan</th>
                    <th>Asal Sekolah</th>
                    <th>Status</th>
                    <th>Tanggal</th>
                  </tr>
                </thead>
                <tbody>
                  {recent.map(p => {
                    const badge = STATUS_BADGE[p.status];
                    return (
                      <tr key={p.id}>
                        <td style={{ fontWeight: 600, color: '#0A1628' }}>{p.namaLengkap}</td>
                        <td style={{ color: '#6B7280', fontSize: 13 }}>{p.jurusan}</td>
                        <td style={{ color: '#6B7280', fontSize: 13 }}>{p.asalSekolah}</td>
                        <td>
                          <span style={{ background: badge.bg, color: badge.color, padding: '3px 10px', borderRadius: 12, fontSize: 11, fontWeight: 700 }}>
                            {badge.label}
                          </span>
                        </td>
                        <td style={{ color: '#9CA3AF', fontSize: 12 }}>{new Date(p.createdAt).toLocaleDateString('id-ID')}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
