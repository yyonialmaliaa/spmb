'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  GraduationCap, Users, Clock, CheckCircle, XCircle,
  LogOut, LayoutDashboard, BarChart2, Search,
  ChevronDown, Eye, Edit3, Trash2, X, Save, User,
  AlertCircle, Filter
} from 'lucide-react';

type Pendaftaran = {
  id: string; namaLengkap: string; namaPanggilan: string; ttl: string;
  jenisKelamin: string; alamat: string; agama: string;
  namaOrtu: string; noOrtu: string; noPribadi?: string;
  jurusan: string; asalSekolah: string; nisn: string; nik: string;
  status: string; nilaiSeleksi?: number; catatan?: string;
  createdAt: string; updatedAt: string; userEmail?: string;
};

type Stats = { total: number; pending: number; verified: number; diterima: number; ditolak: number };

const STATUS_BADGE: Record<string, { label: string; color: string; bg: string }> = {
  pending:  { label: 'Menunggu', color: '#92400E', bg: '#FEF3C7' },
  verified: { label: 'Diverifikasi', color: '#1E40AF', bg: '#DBEAFE' },
  diterima: { label: 'Diterima', color: '#065F46', bg: '#D1FAE5' },
  ditolak:  { label: 'Ditolak', color: '#991B1B', bg: '#FEE2E2' },
};

export default function AdminPendaftar() {
  const router = useRouter();
  const [session, setSession] = useState<{ namaLengkap?: string } | null>(null);
  const [data, setData] = useState<Pendaftaran[]>([]);
  const [stats, setStats] = useState<Stats>({ total: 0, pending: 0, verified: 0, diterima: 0, ditolak: 0 });
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [selected, setSelected] = useState<Pendaftaran | null>(null);
  const [editModal, setEditModal] = useState(false);
  const [editForm, setEditForm] = useState({ status: '', nilaiSeleksi: '', catatan: '' });
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');

  useEffect(() => {
    fetch('/api/auth/me').then(r => r.json()).then(d => {
      if (!d.user || d.user.role !== 'admin') { router.push('/login'); return; }
      setSession(d.user);
    });
    loadData();
  }, [router]);

  const loadData = () => {
    setLoading(true);
    fetch('/api/admin/pendaftar').then(r => r.json()).then(d => {
      setData(d.data || []);
      setStats(d.stats || { total: 0, pending: 0, verified: 0, diterima: 0, ditolak: 0 });
      setLoading(false);
    });
  };

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  const openEdit = (p: Pendaftaran) => {
    setSelected(p);
    setEditForm({ status: p.status, nilaiSeleksi: p.nilaiSeleksi?.toString() || '', catatan: p.catatan || '' });
    setEditModal(true);
  };

  const handleSave = async () => {
    if (!selected) return;
    setSaving(true);
    const res = await fetch(`/api/admin/pendaftar/${selected.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        status: editForm.status,
        nilaiSeleksi: editForm.nilaiSeleksi ? parseFloat(editForm.nilaiSeleksi) : undefined,
        catatan: editForm.catatan,
      }),
    });
    if (res.ok) {
      setEditModal(false);
      loadData();
      showToast('✅ Data berhasil diperbarui');
    }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Yakin ingin menghapus data ini?')) return;
    const res = await fetch(`/api/admin/pendaftar/${id}`, { method: 'DELETE' });
    if (res.ok) {
      loadData();
      showToast('🗑 Data berhasil dihapus');
    }
  };

  const filtered = data.filter(p => {
    const matchSearch = !search || p.namaLengkap.toLowerCase().includes(search.toLowerCase()) || p.jurusan.toLowerCase().includes(search.toLowerCase()) || p.asalSekolah.toLowerCase().includes(search.toLowerCase());
    const matchStatus = !filterStatus || p.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/');
  };

  const inputStyle: React.CSSProperties = { width: '100%', padding: '9px 13px', border: '1.5px solid #D1D5DB', borderRadius: 8, fontSize: 13, fontFamily: 'inherit', background: 'white' };

  return (
    <div style={{ minHeight: '100vh', background: '#F8F9FA', display: 'flex' }}>
      {/* Toast */}
      {toast && (
        <div style={{ position: 'fixed', top: 24, right: 24, background: '#0A1628', color: 'white', padding: '12px 20px', borderRadius: 10, fontSize: 13, fontWeight: 600, zIndex: 9999, boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }}>
          {toast}
        </div>
      )}

      {/* Sidebar */}
      <aside style={{ width: 240, background: '#0A1628', borderRight: '1px solid rgba(200,151,58,0.2)', flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
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
            { href: '/admin/pendaftar', icon: Users, label: 'Data Pendaftar', active: true },
            { href: '/admin/laporan', icon: BarChart2, label: 'Laporan' },
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
        <header style={{ background: 'white', borderBottom: '1px solid #E5E7EB', padding: '0 32px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 style={{ fontSize: 18, fontWeight: 700, color: '#0A1628' }}>Data Pendaftar SPMB</h1>
          <div style={{ display: 'flex', gap: 8 }}>
            {Object.entries({ '': 'Semua', pending: 'Menunggu', verified: 'Diverifikasi', diterima: 'Diterima', ditolak: 'Ditolak' }).map(([k, v]) => (
              <button key={k} onClick={() => setFilterStatus(k)} style={{ padding: '5px 14px', borderRadius: 20, border: '1px solid', borderColor: filterStatus === k ? '#C8973A' : '#E5E7EB', background: filterStatus === k ? '#C8973A' : 'transparent', color: filterStatus === k ? '#0A1628' : '#6B7280', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
                {v}
              </button>
            ))}
          </div>
        </header>

        <main style={{ padding: '28px 32px' }}>
          {/* Mini Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14, marginBottom: 24 }}>
            {[
              { label: 'Total', val: stats.total, color: '#0A1628' },
              { label: 'Menunggu', val: stats.pending, color: '#D97706' },
              { label: 'Diverifikasi', val: stats.verified, color: '#2563EB' },
              { label: 'Diterima', val: stats.diterima, color: '#059669' },
              { label: 'Ditolak', val: stats.ditolak, color: '#DC2626' },
            ].map(s => (
              <div key={s.label} style={{ background: 'white', borderRadius: 10, padding: '14px 16px', border: '1px solid #F3F4F6', textAlign: 'center' }}>
                <div className="font-display" style={{ fontSize: 28, fontWeight: 700, color: s.color }}>{s.val}</div>
                <div style={{ fontSize: 12, color: '#9CA3AF', marginTop: 3 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Search */}
          <div style={{ background: 'white', borderRadius: 12, padding: '14px 18px', marginBottom: 20, display: 'flex', gap: 12, alignItems: 'center', border: '1px solid #F3F4F6' }}>
            <Search size={16} color="#9CA3AF" />
            <input
              placeholder="Cari nama, jurusan, atau asal sekolah..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ flex: 1, border: 'none', outline: 'none', fontSize: 14, color: '#374151', fontFamily: 'inherit', background: 'transparent' }}
            />
            {search && <button onClick={() => setSearch('')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF' }}><X size={16} /></button>}
            <span style={{ fontSize: 12, color: '#9CA3AF' }}>{filtered.length} hasil</span>
          </div>

          {/* Table */}
          <div style={{ background: 'white', borderRadius: 14, border: '1px solid #F3F4F6', overflow: 'hidden' }}>
            {loading ? (
              <div style={{ padding: 60, textAlign: 'center', color: '#9CA3AF' }}>Memuat data...</div>
            ) : filtered.length === 0 ? (
              <div style={{ padding: 60, textAlign: 'center' }}>
                <AlertCircle size={36} color="#E5E7EB" style={{ margin: '0 auto 12px' }} />
                <p style={{ color: '#9CA3AF', fontSize: 14 }}>Tidak ada data ditemukan</p>
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
                      <th>Nilai</th>
                      <th>Status</th>
                      <th>Tanggal Daftar</th>
                      <th style={{ textAlign: 'center' }}>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((p, i) => {
                      const badge = STATUS_BADGE[p.status];
                      return (
                        <tr key={p.id}>
                          <td style={{ color: '#9CA3AF', fontSize: 12 }}>{i + 1}</td>
                          <td>
                            <div style={{ fontWeight: 600, color: '#0A1628', fontSize: 14 }}>{p.namaLengkap}</div>
                            <div style={{ fontSize: 11, color: '#9CA3AF' }}>{p.userEmail}</div>
                          </td>
                          <td style={{ fontSize: 13, color: '#6B7280' }}>{p.jurusan}</td>
                          <td style={{ fontSize: 13, color: '#6B7280' }}>{p.asalSekolah}</td>
                          <td style={{ textAlign: 'center' }}>
                            {p.nilaiSeleksi != null
                              ? <span style={{ fontWeight: 700, color: p.nilaiSeleksi >= 70 ? '#059669' : '#DC2626', fontSize: 14 }}>{p.nilaiSeleksi}</span>
                              : <span style={{ color: '#E5E7EB', fontSize: 12 }}>—</span>
                            }
                          </td>
                          <td>
                            <span style={{ background: badge.bg, color: badge.color, padding: '3px 10px', borderRadius: 12, fontSize: 11, fontWeight: 700 }}>
                              {badge.label}
                            </span>
                          </td>
                          <td style={{ fontSize: 12, color: '#9CA3AF' }}>{new Date(p.createdAt).toLocaleDateString('id-ID')}</td>
                          <td>
                            <div style={{ display: 'flex', gap: 6, justifyContent: 'center' }}>
                              <button onClick={() => { setSelected(p); setEditModal(false); }} title="Lihat Detail" style={{ width: 30, height: 30, background: '#EFF6FF', border: 'none', borderRadius: 6, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Eye size={14} color="#3B82F6" />
                              </button>
                              <button onClick={() => openEdit(p)} title="Edit Status" style={{ width: 30, height: 30, background: '#FEF9EE', border: 'none', borderRadius: 6, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Edit3 size={14} color="#C8973A" />
                              </button>
                              <button onClick={() => handleDelete(p.id)} title="Hapus" style={{ width: 30, height: 30, background: '#FFF1F2', border: 'none', borderRadius: 6, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Trash2 size={14} color="#F43F5E" />
                              </button>
                            </div>
                          </td>
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

      {/* Detail Modal */}
      {selected && !editModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }} onClick={() => setSelected(null)}>
          <div style={{ background: 'white', borderRadius: 20, width: '100%', maxWidth: 600, maxHeight: '85vh', overflow: 'auto' }} onClick={e => e.stopPropagation()}>
            <div style={{ padding: '24px 28px', borderBottom: '1px solid #F3F4F6', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, background: 'white', zIndex: 1 }}>
              <div>
                <h3 className="font-display" style={{ fontSize: 20, color: '#0A1628' }}>Detail Pendaftaran</h3>
                <span style={{ background: STATUS_BADGE[selected.status].bg, color: STATUS_BADGE[selected.status].color, padding: '3px 10px', borderRadius: 12, fontSize: 11, fontWeight: 700 }}>
                  {STATUS_BADGE[selected.status].label}
                </span>
              </div>
              <button onClick={() => setSelected(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF' }}><X size={20} /></button>
            </div>
            <div style={{ padding: '24px 28px' }}>
              {[
                { title: 'Data Pribadi', fields: [
                  ['Nama Lengkap', selected.namaLengkap], ['Nama Panggilan', selected.namaPanggilan],
                  ['TTL', selected.ttl], ['Jenis Kelamin', selected.jenisKelamin],
                  ['Agama', selected.agama], ['Alamat', selected.alamat],
                ]},
                { title: 'Data Orang Tua', fields: [
                  ['Nama Ortu/Wali', selected.namaOrtu], ['No. HP Ortu', selected.noOrtu],
                  ['No. HP Pribadi', selected.noPribadi || '-'],
                ]},
                { title: 'Data Akademik', fields: [
                  ['Jurusan', selected.jurusan], ['Asal Sekolah', selected.asalSekolah],
                  ['NISN', selected.nisn], ['NIK', selected.nik],
                ]},
              ].map(section => (
                <div key={section.title} style={{ marginBottom: 24 }}>
                  <h4 style={{ fontSize: 12, fontWeight: 700, color: '#C8973A', letterSpacing: 1, marginBottom: 12 }}>{section.title.toUpperCase()}</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                    {section.fields.map(([label, val]) => (
                      <div key={label as string} style={{ background: '#FAFAFA', borderRadius: 8, padding: '10px 12px' }}>
                        <div style={{ fontSize: 10, color: '#9CA3AF', fontWeight: 600, marginBottom: 3 }}>{label as string}</div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: '#374151' }}>{val as string}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              {selected.catatan && (
                <div style={{ background: '#FEF3C7', borderRadius: 8, padding: 14, marginTop: 8 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#92400E', marginBottom: 4 }}>CATATAN ADMIN</div>
                  <p style={{ fontSize: 13, color: '#92400E' }}>{selected.catatan}</p>
                </div>
              )}
              <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
                <button onClick={() => openEdit(selected)} className="btn-primary" style={{ flex: 1, textAlign: 'center', fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                  <Edit3 size={15} /> Update Status
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editModal && selected && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }} onClick={() => setEditModal(false)}>
          <div style={{ background: 'white', borderRadius: 20, width: '100%', maxWidth: 480 }} onClick={e => e.stopPropagation()}>
            <div style={{ padding: '24px 28px', borderBottom: '1px solid #F3F4F6', display: 'flex', justifyContent: 'space-between' }}>
              <h3 className="font-display" style={{ fontSize: 20, color: '#0A1628' }}>Update Status Pendaftar</h3>
              <button onClick={() => setEditModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF' }}><X size={20} /></button>
            </div>
            <div style={{ padding: '24px 28px' }}>
              <p style={{ fontWeight: 600, color: '#0A1628', marginBottom: 20 }}>{selected.namaLengkap}</p>
              <div style={{ marginBottom: 18 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>Status *</label>
                <select style={inputStyle} value={editForm.status} onChange={e => setEditForm(f => ({ ...f, status: e.target.value }))}>
                  <option value="pending">Menunggu Verifikasi</option>
                  <option value="verified">Sedang Diverifikasi</option>
                  <option value="diterima">Diterima</option>
                  <option value="ditolak">Tidak Diterima</option>
                </select>
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>Nilai Seleksi</label>
                <input type="number" min="0" max="100" style={inputStyle} value={editForm.nilaiSeleksi} onChange={e => setEditForm(f => ({ ...f, nilaiSeleksi: e.target.value }))} placeholder="0 – 100" />
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>Catatan (opsional)</label>
                <textarea style={{ ...inputStyle, minHeight: 80, resize: 'vertical' }} value={editForm.catatan} onChange={e => setEditForm(f => ({ ...f, catatan: e.target.value }))} placeholder="Catatan untuk pendaftar..." />
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <button onClick={() => setEditModal(false)} style={{ flex: 1, padding: '11px', border: '1.5px solid #E5E7EB', borderRadius: 8, background: 'transparent', color: '#6B7280', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600, fontSize: 14 }}>Batal</button>
                <button onClick={handleSave} disabled={saving} className="btn-primary" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 14, opacity: saving ? 0.7 : 1 }}>
                  <Save size={15} /> {saving ? 'Menyimpan...' : 'Simpan'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const inputStyle: React.CSSProperties = { width: '100%', padding: '9px 13px', border: '1.5px solid #D1D5DB', borderRadius: 8, fontSize: 13, fontFamily: 'inherit', background: 'white', outline: 'none' };
