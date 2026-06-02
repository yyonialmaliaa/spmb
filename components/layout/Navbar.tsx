'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const JURUSAN_DROPDOWN = [
  { kode: 'PPLG', nama: 'Pengembangan Perangkat Lunak & Gim',        singkat: 'Web, mobile, database & UI/UX',         color: '#1E3A5F', emoji: '💻', href: '/jurusan#pplg' },
  { kode: 'TJKT', nama: 'Teknik Jaringan Komputer & Telekomunikasi', singkat: 'Jaringan, keamanan & infrastruktur',      color: '#3a96d0', emoji: '🌐', href: '/jurusan#tjkt' },
  { kode: 'DKV',  nama: 'Desain Komunikasi Visual',                  singkat: 'Grafis, animasi & multimedia kreatif',   color: '#DC2626', emoji: '🎨', href: '/jurusan#dkv'  },
  { kode: 'PM',   nama: 'Pemasaran',                                 singkat: 'Strategi, digital marketing & sales',    color: '#92681A', emoji: '📈', href: '/jurusan#pm'   },
  { kode: 'MPLB', nama: 'Manajemen Perkantoran & Layanan Bisnis',    singkat: 'Administrasi, sekretaris & bisnis',      color: '#b59a00', emoji: '🗂️', href: '/jurusan#mplb' },
  { kode: 'PH',   nama: 'Perhotelan',                                singkat: 'Hospitality, restoran & pariwisata',     color: '#024d20', emoji: '🏨', href: '/jurusan#ph'   },
];

const ESKUL_DROPDOWN = [
  { nama: 'Paskibra', emoji: '🇮🇩', href: '/eskul/paskibra', color: '#C0392B' },
  { nama: 'Futsal', emoji: '⚽', href: '/eskul/futsal', color: '#27AE60' },
  { nama: 'Taekwondo', emoji: '🥋', href: '/eskul/taekwondo', color: '#2980B9' },
  { nama: 'Basket', emoji: '🏀', href: '/eskul/basket', color: '#E67E22' },
  { nama: 'Voli', emoji: '🏐', href: '/eskul/voli', color: '#8E44AD' },
  { nama: 'Theater', emoji: '🎭', href: '/eskul/theater', color: '#D35400' },
  { nama: 'Tari', emoji: '💃', href: '/eskul/tari', color: '#E91E63' },
  { nama: 'Pramuka', emoji: '⛺', href: '/eskul/pramuka', color: '#2ECC71' },
  { nama: 'IT Club', emoji: '💻', href: '/eskul/itclub', color: '#3498DB' },
  { nama: 'Band', emoji: '🎸', href: '/eskul/band', color: '#9B59B6' },
  { nama: 'IRMA', emoji: '📻', href: '/eskul/irma', color: '#1ABC9C' },
  { nama: 'E-Sport', emoji: '🎮', href: '/eskul/esport', color: '#E74C3C' },
  { nama: 'CN Gakuen', emoji: '🎌', href: '/eskul/cngakuen', color: '#34495E' },
  { nama: 'Silat', emoji: '🥋', href: '/eskul/silat', color: '#7F8C8D' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [eskulDropOpen, setEskulDropOpen] = useState(false);
  const [mobileDropOpen, setMobileDropOpen] = useState(false);
  const [mobileEskulOpen, setMobileEskulOpen] = useState(false);
  const [session, setSession] = useState<{ role: string; namaLengkap?: string } | null>(null);
  const dropRef = useRef<HTMLDivElement>(null);
  const eskulRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    fetch('/api/auth/me').then(r => r.json()).then(d => {
      if (d.user) setSession(d.user);
    }).catch(() => {});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
      if (eskulRef.current && !eskulRef.current.contains(e.target as Node)) {
        setEskulDropOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <>
      <style>{`
        @keyframes dropFadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .drop-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4px;
        }
        .eskul-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 8px 12px;
        }
        @media (max-width: 640px) {
          .drop-grid { grid-template-columns: 1fr; }
          .eskul-grid { grid-template-columns: 1fr 1fr; }
        }
        .drop-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 10px;
          text-decoration: none;
          border: 1px solid transparent;
          transition: background 0.15s, border-color 0.15s;
        }
        .drop-item:hover {
          background: #FAF7F0;
          border-color: #E8DCC8;
        }
        .eskul-text-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 8px;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.15s;
        }
        .eskul-text-item:hover {
          background: #FAF7F0;
        }
      `}</style>

      <nav style={{
        background: scrolled ? '#145A45' : '#0B3D2E',
        borderBottom: '2px solid #C8973A',
        position: 'sticky', top: 0, zIndex: 100,
        backdropFilter: 'blur(10px)',
        transition: 'background 0.3s',
        overflow: 'visible',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', overflow: 'visible' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70, overflow: 'visible' }}>

            {/* Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', flexShrink: 0 }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, overflow: 'hidden' }}>
                <Image src="/images/logo.png" alt="Logo SMK Citra Negara" width={44} height={44} style={{ objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ color: 'white', fontWeight: 800, fontSize: 16, lineHeight: 1.2 }}>SMK Citra Negara</div>
                <div style={{ color: '#C8973A', fontSize: 11, fontWeight: 500 }}>Pilihan Tepat di Sekolah yang MANTAP</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, overflow: 'visible' }} className="hidden md:flex">
              <Link href="/" style={navLinkStyle}
                onMouseEnter={e => applyHover(e, true)} onMouseLeave={e => applyHover(e, false)}>
                Beranda
              </Link>
              <Link href="/tentang" style={navLinkStyle}
                onMouseEnter={e => applyHover(e, true)} onMouseLeave={e => applyHover(e, false)}>
                Tentang Kami
              </Link>

              {/* ── Program Keahlian Dropdown ── */}
              <div ref={dropRef} style={{ position: 'relative' }}>
                <button
                  onClick={() => setDropOpen(v => !v)}
                  style={{
                    ...navLinkStyle,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    color: dropOpen ? '#C8973A' : 'rgba(255,255,255,0.85)',
                  }}
                >
                  Program Keahlian
                  <ChevronDown
                    size={14}
                    style={{ transition: 'transform 0.2s', transform: dropOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>

                {dropOpen && (
                  <div style={{
                    position: 'absolute',
                    top: 'calc(100% + 10px)',
                    left: '50%',
                    transform: 'translateX(-45%)',
                    width: 'min(560px, calc(100vw - 32px))',
                    background: 'white',
                    borderRadius: 14,
                    boxShadow: '0 16px 48px rgba(0,0,0,0.16)',
                    border: '1px solid #F0EBE0',
                    padding: '14px',
                    zIndex: 9999,
                    animation: 'dropFadeIn 0.15s ease',
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: -7, left: '45%',
                      transform: 'translateX(-50%) rotate(45deg)',
                      width: 13, height: 13,
                      background: 'white',
                      border: '1px solid #F0EBE0',
                      borderBottom: 'none', borderRight: 'none',
                    }} />

                    <p style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 700, letterSpacing: 1, marginBottom: 8, paddingLeft: 2 }}>
                      6 PROGRAM KEAHLIAN
                    </p>

                    <div className="drop-grid">
                      {JURUSAN_DROPDOWN.map(j => (
                        <Link key={j.kode} href={j.href} className="drop-item" onClick={() => setDropOpen(false)}>
                          <div style={{
                            width: 38, height: 38, borderRadius: 9, flexShrink: 0,
                            background: j.color,
                            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                          }}>
                            {j.emoji}
                          </div>
                          <div style={{ minWidth: 0 }}>
                            <span style={{
                              display: 'inline-block', marginBottom: 2,
                              fontSize: 10, fontWeight: 700,
                              background: '#C8973A', color: '#0A1628',
                              padding: '1px 7px', borderRadius: 4,
                            }}>{j.kode}</span>
                            <div style={{ fontSize: 12, fontWeight: 600, color: '#1F2937', lineHeight: 1.35 }}>{j.nama}</div>
                            <div style={{ fontSize: 11, color: '#6B7280' }}>{j.singkat}</div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div style={{
                      marginTop: 10, paddingTop: 10,
                      borderTop: '1px solid #F0EBE0',
                      display: 'flex', alignItems: 'center',
                      justifyContent: 'space-between', flexWrap: 'wrap', gap: 8,
                    }}>
                      <span style={{ fontSize: 12, color: '#9CA3AF' }}>288 siswa · Akreditasi A (Unggul)</span>
                      <Link href="/jurusan" onClick={() => setDropOpen(false)} style={{
                        fontSize: 12, fontWeight: 700, color: '#0B3D2E', textDecoration: 'none',
                        background: '#FAF7F0', padding: '5px 14px', borderRadius: 20,
                        border: '1px solid #E8DCC8', whiteSpace: 'nowrap',
                      }}>
                        Lihat Semua →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* ── Ekstrakurikuler Dropdown (Text Only, no "Lihat Semua") ── */}
              <div ref={eskulRef} style={{ position: 'relative' }}>
                <button
                  onClick={() => setEskulDropOpen(v => !v)}
                  style={{
                    ...navLinkStyle,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    color: eskulDropOpen ? '#C8973A' : 'rgba(255,255,255,0.85)',
                  }}
                >
                  Ekstrakurikuler
                  <ChevronDown
                    size={14}
                    style={{ transition: 'transform 0.2s', transform: eskulDropOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>

                {eskulDropOpen && (
                  <div style={{
                    position: 'absolute',
                    top: 'calc(100% + 10px)',
                    left: '50%',
                    transform: 'translateX(-40%)',
                    width: 'min(480px, calc(100vw - 32px))',
                    background: 'white',
                    borderRadius: 14,
                    boxShadow: '0 16px 48px rgba(0,0,0,0.16)',
                    border: '1px solid #F0EBE0',
                    padding: '14px 18px',
                    zIndex: 9999,
                    animation: 'dropFadeIn 0.15s ease',
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: -7, left: '40%',
                      transform: 'translateX(-50%) rotate(45deg)',
                      width: 13, height: 13,
                      background: 'white',
                      border: '1px solid #F0EBE0',
                      borderBottom: 'none', borderRight: 'none',
                    }} />

                    <p style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 700, letterSpacing: 1, marginBottom: 12, paddingLeft: 2 }}>
                      14+ EKSTRAKURIKULER
                    </p>

                    <div className="eskul-grid">
                      {ESKUL_DROPDOWN.map(e => (
                        <Link 
                          key={e.nama} 
                          href={e.href} 
                          className="eskul-text-item" 
                          onClick={() => setEskulDropOpen(false)}
                          style={{ textDecoration: 'none', color: '#1F2937' }}
                        >
                          <span style={{ fontSize: 13, fontWeight: 500 }}>{e.nama}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/prestasi" style={navLinkStyle}
                onMouseEnter={e => applyHover(e, true)} onMouseLeave={e => applyHover(e, false)}>
                Prestasi
              </Link>
              <Link href="/spmb" style={navLinkStyle}
                onMouseEnter={e => applyHover(e, true)} onMouseLeave={e => applyHover(e, false)}>
                SPMB
              </Link>
            </div>

            {/* Auth Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }} className="hidden md:flex">
              {session ? (
                <>
                  <Link href={session.role === 'admin' ? '/admin/dashboard' : '/dashboard'}
                    style={{ color: '#C8973A', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                    {session.namaLengkap || 'Dashboard'}
                  </Link>
                  <button onClick={async () => {
                    await fetch('/api/auth/logout', { method: 'POST' });
                    window.location.href = '/';
                  }} style={{
                    background: 'transparent', border: '1px solid rgba(255,255,255,0.3)',
                    color: 'rgba(255,255,255,0.7)', padding: '7px 16px',
                    borderRadius: 6, cursor: 'pointer', fontSize: 13,
                  }}>
                    Keluar
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" style={{
                    color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
                    fontSize: 14, fontWeight: 500, padding: '8px 16px',
                  }}>Masuk</Link>
                  <Link href="/register" className="btn-primary" style={{ padding: '9px 20px', fontSize: 13 }}>
                    Daftar Sekarang
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'none' }}
              className="md:hidden block"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div style={{ background: '#0d2b1f', padding: '8px 24px 24px', borderTop: '1px solid rgba(200,151,58,0.2)' }}>
            <Link href="/" onClick={() => setOpen(false)} style={mobileLinkStyle}>Beranda</Link>
            <Link href="/tentang" onClick={() => setOpen(false)} style={mobileLinkStyle}>Tentang Kami</Link>

            {/* Mobile accordion - Program Keahlian */}
            <div>
              <button
                onClick={() => setMobileDropOpen(v => !v)}
                style={{
                  ...mobileLinkStyle,
                  background: 'none', border: 'none', width: '100%',
                  textAlign: 'left', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}
              >
                <span>Program Keahlian</span>
                <ChevronDown size={16} style={{
                  transition: 'transform 0.2s',
                  transform: mobileDropOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  color: '#C8973A',
                }} />
              </button>

              {mobileDropOpen && (
                <div style={{ paddingLeft: 8, paddingBottom: 4 }}>
                  {JURUSAN_DROPDOWN.map(j => (
                    <Link
                      key={j.kode}
                      href={j.href}
                      onClick={() => { setOpen(false); setMobileDropOpen(false); }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 10,
                        padding: '9px 4px', textDecoration: 'none',
                        borderBottom: '1px solid rgba(255,255,255,0.04)',
                      }}
                    >
                      <div style={{
                        width: 30, height: 30, borderRadius: 7, background: j.color,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 15, flexShrink: 0,
                      }}>{j.emoji}</div>
                      <div>
                        <span style={{ fontSize: 10, fontWeight: 700, color: '#C8973A', marginRight: 6 }}>{j.kode}</span>
                        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)' }}>{j.nama}</span>
                      </div>
                    </Link>
                  ))}
                  <Link href="/jurusan" onClick={() => setOpen(false)} style={{
                    display: 'block', marginTop: 8, fontSize: 12,
                    color: '#C8973A', textDecoration: 'none', fontWeight: 600,
                  }}>
                    → Lihat semua program keahlian
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile accordion - Ekstrakurikuler (Text Only, no "Lihat Semua") */}
            <div>
              <button
                onClick={() => setMobileEskulOpen(v => !v)}
                style={{
                  ...mobileLinkStyle,
                  background: 'none', border: 'none', width: '100%',
                  textAlign: 'left', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}
              >
                <span>Ekstrakurikuler</span>
                <ChevronDown size={16} style={{
                  transition: 'transform 0.2s',
                  transform: mobileEskulOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  color: '#C8973A',
                }} />
              </button>

              {mobileEskulOpen && (
                <div style={{ paddingLeft: 8, paddingBottom: 4 }}>
                  {ESKUL_DROPDOWN.map(e => (
                    <Link
                      key={e.nama}
                      href={e.href}
                      onClick={() => { setOpen(false); setMobileEskulOpen(false); }}
                      style={{
                        display: 'block',
                        padding: '9px 4px',
                        textDecoration: 'none',
                        borderBottom: '1px solid rgba(255,255,255,0.04)',
                        fontSize: 13,
                        color: 'rgba(255,255,255,0.85)',
                      }}
                    >
                      {e.nama}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/prestasi" onClick={() => setOpen(false)} style={mobileLinkStyle}>Prestasi</Link>
            <Link href="/spmb" onClick={() => setOpen(false)} style={mobileLinkStyle}>SPMB</Link>

            <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
              {session ? (
                <Link href={session.role === 'admin' ? '/admin/dashboard' : '/dashboard'}
                  style={{ color: '#C8973A', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link href="/login" onClick={() => setOpen(false)} style={{
                    flex: 1, textAlign: 'center', padding: '10px',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: 8, color: 'white', textDecoration: 'none', fontSize: 14,
                  }}>Masuk</Link>
                  <Link href="/register" onClick={() => setOpen(false)} className="btn-primary"
                    style={{ flex: 1, textAlign: 'center', padding: '10px', fontSize: 14 }}>
                    Daftar
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

const navLinkStyle: React.CSSProperties = {
  color: 'rgba(255,255,255,0.85)',
  textDecoration: 'none',
  padding: '8px 14px',
  borderRadius: 6,
  fontSize: 14,
  fontWeight: 500,
  transition: 'all 0.2s',
};

const mobileLinkStyle: React.CSSProperties = {
  display: 'block',
  color: 'rgba(255,255,255,0.85)',
  textDecoration: 'none',
  padding: '10px 0',
  borderBottom: '1px solid rgba(255,255,255,0.05)',
  fontSize: 14,
};

function applyHover(e: React.MouseEvent, hovered: boolean) {
  const el = e.target as HTMLElement;
  el.style.color = hovered ? '#C8973A' : 'rgba(255,255,255,0.85)';
  el.style.background = hovered ? 'rgba(200,151,58,0.1)' : 'transparent';
}