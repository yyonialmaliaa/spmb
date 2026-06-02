'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from "next/image";

export default function PaskibraPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-900 via-green-700 to-yellow-500 text-white">
      
      {/* Navbar */}
      <Navbar />

      {/* Konten Utama */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <Image
            src="/images/putsal.jpg"
            alt="Paskibra SMK Citra Negara"
            width={900}
            height={500}
            className="mx-auto rounded-lg shadow-xl mb-8 object-cover"
            priority
          />
          <h1 className="font-display" style={{ fontSize: 48, color: 'green', marginBottom: 16 }}>
            FUTSAL
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
           Futsal adalah salah satu ekstrakurikuler yang sangat diminati di kalangan pelajar. Berikut adalah beberapa hal menarik tentang ekstrakurikuler futsal:
          </p>
        </section>

        {/* Deskripsi Tujuan & Kegiatan */}
        <section className="max-w-4xl mx-auto px-6 py-12 space-y-8">
          <div className="bg-green-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">Tujuan </h2>
            <ul className="list-disc list-inside space-y-2 opacity-90">
             <li> Meningkatkan Kebugaran: Futsal membantu meningkatkan kebugaran fisik siswa melalui latihan yang intens dan pertandingan yang dinamis.</li>
 <li>Mengembangkan Keterampilan Sepak Bola: Futsal merupakan versi mini dari sepak bola yang membantu siswa mengasah keterampilan teknis seperti dribbling, passing, dan shooting.</li>
 <li>Membentuk Kerjasama Tim: Dalam futsal, kerjasama tim adalah kunci. Siswa belajar bagaimana bekerja sama, berkomunikasi, dan membangun strategi bersama tim.</li>
            </ul>
          </div>

          <div className="bg-green-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">Kegiatan </h2>
            <ul className="list-disc list-inside space-y-2 opacity-90">
               <li>Latihan Teknik Dasar: Siswa dilatih berbagai teknik dasar seperti dribbling, passing, shooting, dan penguasaan bola.</li>
 <li>Latihan Fisik: Selain teknik, futsal juga memerlukan kebugaran fisik yang baik. Latihan fisik meliputi jogging, sprint, dan latihan kekuatan.</li>
<li>Strategi dan Taktik: Siswa belajar berbagai strategi dan taktik permainan, termasuk formasi, pergerakan tanpa bola, dan pola serangan serta pertahanan.</li>
<li>Pertandingan dan Turnamen: Siswa diberikan kesempatan untuk mengaplikasikan latihan dalam pertandingan internal maupun eksternal. </li>
<li>Peningkatan Mentalitas: Melalui futsal, siswa juga diajarkan pentingnya sportivitas, fair play, serta mengembangkan mentalitas pemenang yang positif.</li>
            </ul>
          </div>
        </section>

        
       
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
