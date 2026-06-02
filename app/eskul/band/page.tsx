'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from "next/image";

export default function itclubPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-900 via-green-700 to-yellow-500 text-white">
      
      {/* Navbar */}
      <Navbar />

      {/* Konten Utama */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <Image
            src="/images/.jpg"
            alt="it SMK Citra Negara"
            width={900}
            height={500}
            className="mx-auto rounded-lg shadow-xl mb-8 object-cover"
            priority
          />
          <h1 className="font-display" style={{ fontSize: 48, color: 'green', marginBottom: 16 }}>
            BAND
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
        Ekstrakurikuler Band adalah kegiatan di luar jam pelajaran yang bertujuan untuk mengembangkan bakat dan minat siswa dalam bidang musik. Dalam kegiatan ini, siswa akan belajar bermain alat musik, bekerja sama dalam sebuah grup, dan menampilkan berbagai jenis musik, mulai dari pop, rock, jazz, hingga klasik.</p>
        </section>

        {/* Deskripsi Tujuan & Kegiatan */}
        <section className="max-w-4xl mx-auto px-6 py-12 sp ace-y-8">
          <div className="bg-green-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">Tujuan </h2>
            <ul className="list-disc list-inside space-y-2 opacity-90">
             <li>Mengembangkan Keterampilan Musik: Meningkatkan kemampuan siswa dalam memainkan berbagai alat musik.</li>
 <li>Mengajarkan teori musik dan teknik bermain alat musik secara lebih mendalam.</li>
 <li>Menumbuhkan Kreativitas dan Ekspresi Diri: Mendorong siswa untuk mengekspresikan diri mereka melalui musik. </li>
 <li>Menginspirasi siswa untuk menciptakan karya musik mereka sendiri.</li>
 <li>Meningkatkan Kerjasama dan Komunikasi: Mengajarkan pentingnya kerjasama tim dalam menciptakan harmoni musik.</li>
 <li>Meningkatkan keterampilan komunikasi antar anggota band.</li>
 <li>Meningkatkan Kepercayaan Diri:
Memberikan kesempatan kepada siswa untuk tampil di depan umum.</li>
 <li>Membantu siswa mengatasi rasa gugup dan meningkatkan rasa percaya diri.</li>
 <li>Membangun Disiplin dan Komitmen:
Mengajarkan pentingnya disiplin dan komitmen dalam latihan dan persiapan penampilan.</li>
 <li> Menumbuhkan rasa tanggung jawab terhadap grup dan diri sendiri.</li>
            </ul>
          </div>

          <div className="bg-green-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">Kegiatan </h2>
            <ul className="list-disc list-inside space-y-2 opacity-90">
               <li>Latihan Rutin:
Mengadakan sesi latihan mingguan untuk memperbaiki teknik bermain dan mengasah keterampilan musik.</li>
 <li>Latihan bersama seluruh anggota band untuk menyatukan permainan dan menciptakan harmoni.</li>
 <li>Workshop dan Masterclass:
Mengundang musisi profesional untuk memberikan workshop dan berbagi pengalaman.</li>
 <li>Sesi masterclass untuk belajar teknik khusus dan tips bermain alat musik dari para ahli.</li>
 <li>Penampilan dan Konser:
Mengadakan konser di sekolah atau di luar sekolah untuk menampilkan hasil latihan.</li>
 <li>Berpartisipasi dalam acara-acara sekolah seperti pentas seni, festival, dan kompetisi band antar sekolah.</li>
 <li>Rekaman Musik:
Merekam lagu-lagu yang telah dipelajari atau diciptakan oleh anggota band.</li>
 <li>Belajar tentang proses produksi musik dan teknik rekaman di studio.</li>
 <li>Pembuatan Lagu dan Aransemen:
Mendorong anggota untuk menciptakan lagu-lagu baru dan membuat aransemen musik.</li>
 <li>Mengadakan sesi brainstorming dan kolaborasi untuk menghasilkan karya-karya original.</li>
 <li>Penampilan Spesial:
Tampil di acara khusus seperti peringatan hari besar, acara amal, dan pertunjukan komunitas.</li>
 <li>Mengadakan sesi penampilan dadakan (jam session) untuk melatih improvisasi dan kreativitas.</li>

            </ul>
          </div>
        </section>

        
       
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
