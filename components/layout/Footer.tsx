import Link from 'next/link';
import { GraduationCap, Phone, Mail, MapPin, Share2, MessageCircle, Play } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: '#0A1628', color: 'white', borderTop: '2px solid #C8973A' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px 30px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40, marginBottom: 40 }}>
          
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 40, height: 40,
                background: 'linear-gradient(135deg, #C8973A, #E8B84B)',
                borderRadius: 8,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <GraduationCap size={20} color="#0A1628" />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 15 }}>SMK Citra Negara</div>
                <div style={{ fontSize: 11, color: '#C8973A' }}>Terakreditasi A</div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 20 }}>
              Sekolah Menengah Kejuruan unggulan yang mencetak generasi profesional, berkarakter, dan siap kerja.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[Share2, MessageCircle, Play].map((Icon, i) => (
                <a key={i} href="#" style={{
                  width: 36, height: 36,
                  background: 'rgba(200,151,58,0.15)',
                  borderRadius: 8,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#C8973A',
                  transition: 'all 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(200,151,58,0.3)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(200,151,58,0.15)')}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: 16, fontSize: 14, color: '#C8973A' }}>Menu Utama</h4>
            {[
              { href: '/', label: 'Beranda' },
              { href: '/tentang', label: 'Tentang Kami' },
              { href: '/jurusan', label: 'Program Keahlian' },
              { href: '/spmb', label: 'SPMB Online' },
              { href: '/login', label: 'Login Siswa' },
            ].map(link => (
              <Link key={link.href} href={link.href} style={{
                display: 'block', color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none', fontSize: 13, padding: '5px 0',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C8973A')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              >→ {link.label}</Link>
            ))}
          </div>

          {/* Jurusan */}
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: 16, fontSize: 14, color: '#C8973A' }}>Program Keahlian</h4>
            {[
              'Rekayasa Perangkat Lunak',
              'Teknik Komputer & Jaringan',
              'Multimedia',
              'Akuntansi',
              'Administrasi Perkantoran',
            ].map(j => (
              <div key={j} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, padding: '5px 0' }}>
                • {j}
              </div>
            ))}
          </div>

          {/* Kontak */}
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: 16, fontSize: 14, color: '#C8973A' }}>Kontak</h4>
            {[
              { Icon: MapPin, text: 'Jl. Citra Negara No. 1, Kota' },
              { Icon: Phone, text: '(021) 1234-5678' },
              { Icon: Mail, text: 'info@smkcitranegara.sch.id' },
            ].map(({ Icon, text }, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 12, alignItems: 'flex-start' }}>
                <Icon size={14} color="#C8973A" style={{ marginTop: 3, flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: 20,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 10,
        }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
            © 2026 SMK Citra Negara. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
            Sistem SPMB v1.0
          </p>
        </div>
      </div>
    </footer>
  );
}
