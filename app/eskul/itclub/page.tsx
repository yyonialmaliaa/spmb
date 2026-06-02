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
            IT CLUB
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
        Ekstrakurikuler IT Club merupakan kegiatan yang mengajak siswa untuk menjelajahi dunia digital dan teknologi. Berikut adalah beberapa hal penting tentang ekstrakurikuler IT Club:</p>
        </section>

        {/* Deskripsi Tujuan & Kegiatan */}
        <section className="max-w-4xl mx-auto px-6 py-12 sp ace-y-8">
          <div className="bg-green-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">Tujuan </h2>
            <ul className="list-disc list-inside space-y-2 opacity-90">
             <li>Mengembangkan Keterampilan Teknologi: IT Club membantu siswa mengasah keterampilan dalam bidang teknologi informasi dan komunikasi (TIK), seperti pemrograman, desain web, dan administrasi jaringan.</li>
<li>Mendorong Inovasi dan Kreativitas: Siswa diajak untuk menciptakan solusi teknologi baru, mengembangkan aplikasi, atau merancang proyek-proyek kreatif menggunakan teknologi terbaru.</li>
<li>Menyiapkan Siswa untuk Era Digital: IT Club mempersiapkan siswa menghadapi tantangan dan peluang di era digital dengan memahami konsep-konsep seperti keamanan cyber, big data, dan kecerdasan buatan (AI).</li>
<li>Membentuk Kolaborasi dan Tim Kerja: Siswa belajar bekerja dalam tim untuk menyelesaikan proyek-proyek teknologi, meningkatkan keterampilan komunikasi dan kerjasama.</li>
            </ul>
          </div>

          <div className="bg-green-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">Kegiatan </h2>
            <ul className="list-disc list-inside space-y-2 opacity-90">
               <li>Pelatihan Teknis: Siswa dilatih dalam berbagai keterampilan teknis seperti pemrograman (misalnya Python, Java), desain grafis, pengembangan aplikasi, dan manajemen basis data.</li>
<li>Kompetisi dan Hackathon: IT Club sering mengadakan kompetisi internal atau eksternal, serta hackathon untuk menguji dan meningkatkan keterampilan siswa dalam menyelesaikan tantangan teknologi.</li>
<li>Workshop dan Seminar: Siswa mendapatkan kesempatan untuk menghadiri workshop dan seminar dari profesional industri IT untuk memperdalam pengetahuan mereka tentang tren dan perkembangan terbaru dalam teknologi.</li>
<li>Proyek Kolaboratif: Siswa berkolaborasi dalam proyek-proyek besar seperti pembuatan website sekolah, aplikasi mobile, atau sistem informasi yang bermanfaat bagi sekolah dan masyarakat.</li>
<li>Kegiatan Sosial dan Edukasi: IT Club juga dapat mengadakan kegiatan sosial seperti pelatihan TIK untuk masyarakat sekitar atau mengadakan seminar tentang keamanan cyber bagi siswa dan orang tua.</li>

            </ul>
          </div>
        </section>

        
       
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
