'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from "next/image";

export default function tariPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-900 via-green-700 to-yellow-500 text-white">
      
      {/* Navbar */}
      <Navbar />

      {/* Konten Utama */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <Image
            src="/images/tari.jpg"
            alt="tari SMK Citra Negara"
            width={900}
            height={500}
            className="mx-auto rounded-lg shadow-xl mb-8 object-cover"
            priority
          />
          <h1 className="font-display" style={{ fontSize: 48, color: 'green', marginBottom: 16 }}>
            TARI
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
        Ekstrakurikuler tari adalah salah satu kegiatan yang memungkinkan siswa untuk mengekspresikan diri mereka melalui seni dan gerakan. Berikut adalah beberapa hal penting tentang ekstrakurikuler tari:</p>
        </section>

        {/* Deskripsi Tujuan & Kegiatan */}
        <section className="max-w-4xl mx-auto px-6 py-12 sp ace-y-8">
          <div className="bg-green-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">Tujuan </h2>
            <ul className="list-disc list-inside space-y-2 opacity-90">
             <li> Mengembangkan Kreativitas: Tari membantu siswa mengekspresikan kreativitas mereka melalui gerakan, ritme, dan koreografi.</li>
<li>Meningkatkan Kebugaran Fisik: Melalui latihan rutin, tari membantu meningkatkan kekuatan, kelenturan, keseimbangan, dan kebugaran fisik secara keseluruhan.</li>
<li>Mengasah Keterampilan Sosial: Tari adalah kegiatan kolaboratif yang mengajarkan siswa bekerja sama, berkomunikasi, dan menghargai peran setiap anggota dalam sebuah pertunjukan.</li>
<li>Meningkatkan Kepercayaan Diri: Melalui penampilan di depan publik, siswa dapat mengatasi rasa gugup dan meningkatkan rasa percaya diri mereka.</li>
<li>Menumbuhkan Apresiasi terhadap Budaya: Tari sering kali melibatkan berbagai tarian tradisional dan modern, sehingga siswa dapat belajar dan menghargai beragam budaya.</li>
            </ul>
          </div>

          <div className="bg-green-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">Kegiatan </h2>
            <ul className="list-disc list-inside space-y-2 opacity-90">
               <li>Latihan Teknik Dasar: Siswa mempelajari teknik dasar tari, termasuk gerakan dasar, ritme, dan postur tubuh yang benar.</li>
<li>Latihan Koreografi: Siswa berlatih koreografi untuk berbagai jenis tarian, mulai dari tari tradisional hingga tari modern.</li>
<li>Pertunjukan dan Penampilan: Siswa diberi kesempatan untuk tampil dalam berbagai acara sekolah, festival, dan kompetisi tari.</li>
<li>Workshop dan Kelas Master: Siswa mengikuti workshop dan kelas master dengan penari profesional untuk meningkatkan keterampilan dan mendapatkan inspirasi baru.</li>
<li>Eksplorasi Budaya: Siswa mempelajari berbagai jenis tari dari berbagai budaya, meningkatkan pemahaman dan apresiasi mereka terhadap seni tari.</li>
<li>Kolaborasi dengan Ekstrakurikuler Lain: Tari sering kali berkolaborasi dengan ekstrakurikuler lain seperti teater dan musik, menciptakan pertunjukan yang lebih kaya dan beragam.</li>

            </ul>
          </div>
        </section>

        
       
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
