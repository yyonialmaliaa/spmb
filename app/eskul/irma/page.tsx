'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from "next/image";

export default function irmaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-900 via-green-700 to-yellow-500 text-white">
      
      {/* Navbar */}
      <Navbar />

      {/* Konten Utama */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <Image
            src="/images/irma.jpg"
            alt="irma SMK Citra Negara"
            width={900}
            height={500}
            className="mx-auto rounded-lg shadow-xl mb-8 object-cover"
            priority
          />
          <h1 className="font-display" style={{ fontSize: 48, color: 'green', marginBottom: 16 }}>
            IRMA
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
       Ikatan Remaja Masjid (IRMA) adalah salah satu organisasi yang populer dan vital di lingkungan sekolah. Ekstrakurikuler IRMA tidak hanya menawarkan pendalaman ilmu agama, tetapi juga mengajarkan berbagai soft skill dan nilai kepemimpinan.</p>
        </section>

        {/* Deskripsi Tujuan & Kegiatan */}
        <section className="max-w-4xl mx-auto px-6 py-12 sp ace-y-8">
          <div className="bg-green-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">Tujuan </h2>
            <ul className="list-disc list-inside space-y-2 opacity-90">
             <li>MMeningkatkan Kecerdasan Spiritual
Melalui kajian dan ibadah rutin, IRMA membantu meningkatkan keimanan, ketakwaan, dan ketenangan batin siswa.</li>
 <li>Mengembangkan Keterampilan Organisasi
IRMA mengajarkan keterampilan praktis seperti public speaking, manajemen acara, administrasi, dan tata kelola organisasi.</li>
 <li>Membentuk Ukhuwah Islamiyah
IRMA adalah wadah sosial yang mengajarkan pentingnya persaudaraan, solidaritas, dan kolaborasi dalam kebaikan (fastabiqul khairat).</li>
 <li>Meningkatkan Kedisiplinan dan Istiqomah
Kegiatan IRMA melatih siswa untuk disiplin waktu (terutama waktu sholat), tanggung jawab, dan konsistensi dalam beramal.</li>
 <li>Mengajarkan Adab dan Akhlak
Siswa belajar tentang etika pergaulan, rasa hormat, dan cara bersikap santun baik kepada guru, teman, maupun masyarakat luas.</li>
            </ul>
          </div>

          <div className="bg-green-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">Kegiatan </h2>
            <ul className="list-disc list-inside space-y-2 opacity-90">
               <li>Pembinaan Dasar Islam
Siswa memperdalam ilmu dasar seperti Tahsin/Tahfidz Al-Qur’an, Fiqih ibadah, dan kajian kitab kuning atau kontemporer.</li>
<li>Aksi Sosial & Kemanusiaan
Selain teori agama, kegiatan sosial seperti bakti sosial, santunan, dan peduli bencana dilakukan untuk meningkatkan kepekaan sosial.</li>
<li>Simulasi & Praktik Dakwah
Siswa berlatih menjadi petugas ibadah (MC, muadzin, imam) dan kultum untuk melatih keberanian tampil di depan umum.</li>
<li>Penyelenggaraan Acara Besar (PHBI)
Siswa diberi tanggung jawab penuh untuk merancang dan mengeksekusi Peringatan Hari Besar Islam (Maulid, Isra Mi’raj, Pesantren Kilat).</li>
<li>Pengembangan Mentalitas Qur’ani
IRMA melatih siswa memiliki mental yang tangguh, tidak mudah terpengaruh pergaulan negatif, dan menjadi teladan (uswah) bagi teman sebayanya.</li>

            </ul>
          </div>
        </section>

        
       
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
