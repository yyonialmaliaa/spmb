'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { GraduationCap, ChevronRight, ChevronLeft, CheckCircle, AlertCircle } from 'lucide-react';

const JURUSAN_OPTIONS = [
  'Pengembangan Perangkat lunak dan gim (PPLG)',
  'Teknik Jaringan Komputer & Telkomunikasi (TJKT)',
  'Desain Komunikasi Visual (DKV)',
  'Managemen perkantoran & Layanan Bisnis (MPLB)',
  'Pemasaran (PM)',
  'Perhotelan (PH)',
];

const AGAMA_OPTIONS = ['Islam', 'Kristen Protestan', 'Kristen Katolik', 'Hindu', 'Budha', 'Konghucu'];

type FormData = {
  namaLengkap: string; namaPanggilan: string; ttl: string;
  jenisKelamin: string; alamat: string; agama: string;
  namaOrtu: string; noOrtu: string; noPribadi: string;
  jurusan: string; asalSekolah: string; nisn: string; nik: string;
};

const INITIAL: FormData = {
  namaLengkap: '', namaPanggilan: '', ttl: '', jenisKelamin: '',
  alamat: '', agama: '', namaOrtu: '', noOrtu: '', noPribadi: '',
  jurusan: '', asalSekolah: '', nisn: '', nik: '',
};

const STEPS = ['Data Pribadi', 'Data Orang Tua', 'Data Akademik', 'Konfirmasi'];

export default function DaftarPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(INITIAL);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    fetch('/api/auth/me').then(r => r.json()).then(d => {
      if (!d.user) { router.push('/login'); return; }
      setAuthChecked(true);
    });
    fetch('/api/pendaftaran').then(r => r.json()).then(d => {
      if (d.data) { router.push('/dashboard'); }
    });
  }, [router]);

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/pendaftaran', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error); setLoading(false); return; }
      router.push('/dashboard');
    } catch {
      setError('Terjadi kesalahan jaringan');
      setLoading(false);
    }
  };

  if (!authChecked) return null;

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '10px 14px',
    border: '1.5px solid #D1D5DB', borderRadius: 8,
    fontSize: 14, fontFamily: 'inherit', background: 'white', color: '#0A1628',
    outline: 'none', transition: 'border-color 0.2s',
  };
  const labelStyle: React.CSSProperties = { fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 };
  const gridStyle: React.CSSProperties = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 };

  return (
    <div style={{ minHeight: '100vh', background: '#FAF7F0' }}>
      {/* Header */}
      <header style={{ background: '#0A1628', borderBottom: '2px solid #C8973A', padding: '0 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', alignItems: 'center', height: 64 }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg,#C8973A,#E8B84B)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <GraduationCap size={18} color="#0A1628" />
            </div>
            <span style={{ color: 'white', fontWeight: 700, fontSize: 14 }}>Formulir SPMB 2026</span>
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: 800, margin: '0 auto', padding: '40px 24px' }}>
        {/* Steps */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 40 }}>
          {STEPS.map((s, i) => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: i <= step ? 'linear-gradient(135deg,#C8973A,#E8B84B)' : '#E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14, color: i <= step ? '#0A1628' : '#9CA3AF', marginBottom: 6 }}>
                  {i < step ? '✓' : i + 1}
                </div>
                <span style={{ fontSize: 11, fontWeight: i === step ? 700 : 400, color: i === step ? '#C8973A' : i < step ? '#0A1628' : '#9CA3AF', textAlign: 'center', whiteSpace: 'nowrap' }}>{s}</span>
              </div>
              {i < STEPS.length - 1 && <div style={{ height: 2, flex: 0.5, background: i < step ? '#C8973A' : '#E5E7EB', margin: '0 4px', marginBottom: 20 }} />}
            </div>
          ))}
        </div>

        {/* Card */}
        <div style={{ background: 'white', borderRadius: 20, padding: '36px 40px', boxShadow: '0 4px 30px rgba(10,22,40,0.08)', border: '1px solid #F0EBE0' }}>
          
          {error && (
            <div style={{ background: '#FEE2E2', border: '1px solid #FECACA', borderRadius: 8, padding: '12px 16px', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
              <AlertCircle size={16} color="#DC2626" />
              <span style={{ fontSize: 13, color: '#DC2626' }}>{error}</span>
            </div>
          )}

          {/* Step 0: Data Pribadi */}
          {step === 0 && (
            <div>
              <h2 className="font-display" style={{ fontSize: 24, color: '#0A1628', marginBottom: 6 }}>Data Pribadi</h2>
              <p style={{ color: '#6B7280', fontSize: 13, marginBottom: 28 }}>Isi data pribadi calon peserta didik</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={gridStyle}>
                  <div>
                    <label style={labelStyle}>Nama Lengkap *</label>
                    <input style={inputStyle} value={form.namaLengkap} onChange={set('namaLengkap')} placeholder="Sesuai akte/ijazah" onFocus={e => e.target.style.borderColor='#C8973A'} onBlur={e => e.target.style.borderColor='#D1D5DB'} />
                  </div>
                  <div>
                    <label style={labelStyle}>Nama Panggilan *</label>
                    <input style={inputStyle} value={form.namaPanggilan} onChange={set('namaPanggilan')} placeholder="Nama sehari-hari" onFocus={e => e.target.style.borderColor='#C8973A'} onBlur={e => e.target.style.borderColor='#D1D5DB'} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Tempat, Tanggal Lahir *</label>
                  <input style={inputStyle} value={form.ttl} onChange={set('ttl')} placeholder="Contoh: Jakarta, 15 Januari 2010" onFocus={e => e.target.style.borderColor='#C8973A'} onBlur={e => e.target.style.borderColor='#D1D5DB'} />
                </div>
                <div style={gridStyle}>
                  <div>
                    <label style={labelStyle}>Jenis Kelamin *</label>
                    <select style={inputStyle} value={form.jenisKelamin} onChange={set('jenisKelamin')}>
                      <option value="">Pilih...</option>
                      <option>Laki-laki</option>
                      <option>Perempuan</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Agama *</label>
                    <select style={inputStyle} value={form.agama} onChange={set('agama')}>
                      <option value="">Pilih...</option>
                      {AGAMA_OPTIONS.map(a => <option key={a}>{a}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Alamat Lengkap *</label>
                  <textarea style={{ ...inputStyle, minHeight: 80, resize: 'vertical' }} value={form.alamat} onChange={set('alamat')} placeholder="Jalan, RT/RW, Kelurahan, Kecamatan, Kota" onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor='#C8973A'} onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor='#D1D5DB'} />
                </div>
              </div>
            </div>
          )}

          {/* Step 1: Data Ortu */}
          {step === 1 && (
            <div>
              <h2 className="font-display" style={{ fontSize: 24, color: '#0A1628', marginBottom: 6 }}>Data Orang Tua/Wali</h2>
              <p style={{ color: '#6B7280', fontSize: 13, marginBottom: 28 }}>Isi data orang tua atau wali calon peserta</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div>
                  <label style={labelStyle}>Nama Orang Tua/Wali *</label>
                  <input style={inputStyle} value={form.namaOrtu} onChange={set('namaOrtu')} placeholder="Nama lengkap orang tua/wali" onFocus={e => e.target.style.borderColor='#C8973A'} onBlur={e => e.target.style.borderColor='#D1D5DB'} />
                </div>
                <div style={gridStyle}>
                  <div>
                    <label style={labelStyle}>No. HP Orang Tua *</label>
                    <input style={inputStyle} type="tel" value={form.noOrtu} onChange={set('noOrtu')} placeholder="08xxxxxxxxxx" onFocus={e => e.target.style.borderColor='#C8973A'} onBlur={e => e.target.style.borderColor='#D1D5DB'} />
                  </div>
                  <div>
                    <label style={labelStyle}>No. HP Pribadi</label>
                    <input style={inputStyle} type="tel" value={form.noPribadi} onChange={set('noPribadi')} placeholder="08xxxxxxxxxx (opsional)" onFocus={e => e.target.style.borderColor='#C8973A'} onBlur={e => e.target.style.borderColor='#D1D5DB'} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Data Akademik */}
          {step === 2 && (
            <div>
              <h2 className="font-display" style={{ fontSize: 24, color: '#0A1628', marginBottom: 6 }}>Data Akademik</h2>
              <p style={{ color: '#6B7280', fontSize: 13, marginBottom: 28 }}>Informasi sekolah asal dan pilihan jurusan</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div>
                  <label style={labelStyle}>Jurusan yang Dipilih *</label>
                  <select style={inputStyle} value={form.jurusan} onChange={set('jurusan')}>
                    <option value="">Pilih jurusan...</option>
                    {JURUSAN_OPTIONS.map(j => <option key={j}>{j}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Asal Sekolah *</label>
                  <input style={inputStyle} value={form.asalSekolah} onChange={set('asalSekolah')} placeholder="Nama SMP/MTs asal" onFocus={e => e.target.style.borderColor='#C8973A'} onBlur={e => e.target.style.borderColor='#D1D5DB'} />
                </div>
                <div style={gridStyle}>
                  <div>
                    <label style={labelStyle}>NISN *</label>
                    <input style={inputStyle} value={form.nisn} onChange={set('nisn')} placeholder="10 digit NISN" maxLength={10} onFocus={e => e.target.style.borderColor='#C8973A'} onBlur={e => e.target.style.borderColor='#D1D5DB'} />
                  </div>
                  <div>
                    <label style={labelStyle}>NIK *</label>
                    <input style={inputStyle} value={form.nik} onChange={set('nik')} placeholder="16 digit NIK" maxLength={16} onFocus={e => e.target.style.borderColor='#C8973A'} onBlur={e => e.target.style.borderColor='#D1D5DB'} />
                  </div>
                </div>
                <div style={{ background: '#F0F9FF', borderRadius: 8, padding: 14, border: '1px solid #BAE6FD' }}>
                  <p style={{ fontSize: 12, color: '#0369A1', lineHeight: 1.6 }}>
                    💡 Upload berkas fisik (ijazah, KK, akte, pas foto) dapat dilakukan setelah submit formulir ini, langsung ke kantor sekolah dalam 3 hari kerja.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Konfirmasi */}
          {step === 3 && (
            <div>
              <h2 className="font-display" style={{ fontSize: 24, color: '#0A1628', marginBottom: 6 }}>Konfirmasi Data</h2>
              <p style={{ color: '#6B7280', fontSize: 13, marginBottom: 28 }}>Periksa kembali data Anda sebelum mengirim</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
                {[
                  { label: 'Nama Lengkap', val: form.namaLengkap },
                  { label: 'Nama Panggilan', val: form.namaPanggilan },
                  { label: 'TTL', val: form.ttl },
                  { label: 'Jenis Kelamin', val: form.jenisKelamin },
                  { label: 'Agama', val: form.agama },
                  { label: 'Jurusan', val: form.jurusan },
                  { label: 'Asal Sekolah', val: form.asalSekolah },
                  { label: 'NISN', val: form.nisn },
                  { label: 'NIK', val: form.nik },
                  { label: 'Nama Ortu', val: form.namaOrtu },
                  { label: 'No. HP Ortu', val: form.noOrtu },
                  { label: 'Alamat', val: form.alamat },
                ].map(({ label, val }) => (
                  <div key={label} style={{ background: '#FAFAFA', borderRadius: 8, padding: '10px 14px' }}>
                    <div style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 600, marginBottom: 3 }}>{label}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: val ? '#0A1628' : '#EF4444' }}>{val || '⚠ Belum diisi'}</div>
                  </div>
                ))}
              </div>
              <div style={{ background: '#FEF3C7', border: '1px solid #FDE68A', borderRadius: 10, padding: 16, marginBottom: 16 }}>
                <p style={{ fontSize: 13, color: '#92400E', lineHeight: 1.6 }}>
                  ✓ Dengan menekan tombol "Kirim Pendaftaran", saya menyatakan bahwa semua data yang diisikan adalah benar dan dapat dipertanggungjawabkan.
                </p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 32, paddingTop: 24, borderTop: '1px solid #F3F4F6' }}>
            <button onClick={() => setStep(s => s - 1)} disabled={step === 0} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'transparent', border: '1.5px solid #E5E7EB', color: step === 0 ? '#9CA3AF' : '#374151', padding: '11px 24px', borderRadius: 8, cursor: step === 0 ? 'not-allowed' : 'pointer', fontSize: 14, fontWeight: 600, fontFamily: 'inherit' }}>
              <ChevronLeft size={16} /> Sebelumnya
            </button>
            {step < 3 ? (
              <button onClick={() => setStep(s => s + 1)} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
                Selanjutnya <ChevronRight size={16} />
              </button>
            ) : (
              <button onClick={handleSubmit} disabled={loading} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, opacity: loading ? 0.7 : 1 }}>
                <CheckCircle size={16} /> {loading ? 'Mengirim...' : 'Kirim Pendaftaran'}
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
