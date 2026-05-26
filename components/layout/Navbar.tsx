'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [session, setSession] = useState<{ role: string; namaLengkap?: string } | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    fetch('/api/auth/me').then(r => r.json()).then(d => {
      if (d.user) setSession(d.user);
    }).catch(() => {});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/tentang', label: 'Tentang Kami' },
    { href: '/jurusan', label: 'Program Keahlian' },
    { href: '/spmb', label: 'SPMB' },
  ];

  return (
    <nav style={{ 
      background: scrolled ? '#145A45' : '#0B3D2E',
      borderBottom: '2px solid #C8973A',
      position: 'sticky', top: 0, zIndex: 100,
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <div style={{
              width: 44, height: 44,
              borderRadius: 10,
              overflow: 'hidden',
              position: 'relative',
            }}>
              <Image
                src="/images/logo.png"
                alt="Logo SMK Citra Negara"
                width={44}
                height={44}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <div style={{ color: 'white', fontWeight: 800, fontSize: 16, lineHeight: 1.2 }}>
                SMK Citra Negara
              </div>
              <div style={{ color: '#C8973A', fontSize: 11, fontWeight: 500 }}>
                Pilihan Tepat di Sekolah yang MANTAP
              </div>
             
            </div>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="hidden md:flex">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} style={{
                color: 'rgba(255,255,255,0.85)',
                textDecoration: 'none',
                padding: '8px 14px',
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 500,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                (e.target as HTMLElement).style.color = '#C8973A';
                (e.target as HTMLElement).style.background = 'rgba(200,151,58,0.1)';
              }}
              onMouseLeave={e => {
                (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.85)';
                (e.target as HTMLElement).style.background = 'transparent';
              }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }} className="hidden md:flex">
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
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: 'rgba(255,255,255,0.7)',
                  padding: '7px 16px',
                  borderRadius: 6,
                  cursor: 'pointer',
                  fontSize: 13,
                }}>
                  Keluar
                </button>
              </>
            ) : (
              <>
                <Link href="/login" style={{
                  color: 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  fontSize: 14,
                  fontWeight: 500,
                  padding: '8px 16px',
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
        <div style={{ background: '#122040', padding: '16px 24px 24px', borderTop: '1px solid rgba(200,151,58,0.2)' }}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} style={{
              display: 'block', color: 'rgba(255,255,255,0.85)',
              textDecoration: 'none', padding: '10px 0',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              fontSize: 14,
            }}>{link.label}</Link>
          ))}
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
                <Link href="/register" onClick={() => setOpen(false)} className="btn-primary" style={{ flex: 1, textAlign: 'center', padding: '10px', fontSize: 14 }}>
                  Daftar
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
