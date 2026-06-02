'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from "next/image";

export default function voliPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-900 via-green-700 to-yellow-500 text-white">
      
      {/* Navbar */}
      <Navbar />

      {/* Konten Utama */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <Image
            src="/images/voli.jpg"
            alt="voli SMK Citra Negara"
            width={900}
            height={500}
            className="mx-auto rounded-lg shadow-xl mb-8 object-cover"
            priority
          />
          <h1 className="font-display" style={{ fontSize: 48, color: 'green', marginBottom: 16 }}>
            VOLI
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
          Voli adalah salah satu olahraga yang digemari oleh banyak pelajar. Ekstrakurikuler voli menawarkan berbagai manfaat, mulai dari peningkatan kebugaran fisik hingga pengembangan keterampilan sosial. Berikut adalah beberapa aspek penting tentang ekstrakurikuler voli:</p>
        </section>

        {/* Deskripsi Tujuan & Kegiatan */}
        <section className="max-w-4xl mx-auto px-6 py-12 space-y-8">
          <div className="bg-green-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">Tujuan </h2>
            <ul className="list-disc list-inside space-y-2 opacity-90">
             <li> Meningkatkan Kebugaran Fisik: Latihan dan pertandingan voli membantu meningkatkan kekuatan, kelincahan, dan daya tahan tubuh.</li>
 <li>Mengembangkan Keterampilan Teknikal: Voli mengajarkan keterampilan seperti servis, passing, smashing, dan blocking.</li>
 <li>Membentuk Kerjasama Tim: Voli adalah olahraga tim yang mengajarkan pentingnya kerja sama, komunikasi, dan strategi bersama.</li>
 <li>Meningkatkan Disiplin dan Konsentrasi: Latihan voli membutuhkan kedisiplinan dan konsentrasi tinggi untuk menguasai teknik dan taktik permainan.</li>
 <li>Mengajarkan Sportivitas: Siswa belajar tentang sportivitas, fair play, dan cara menghadapi kemenangan maupun kekalahan dengan sikap positif.</li>
            </ul>
          </div>

          <div className="bg-green-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">Kegiatan </h2>
            <ul className="list-disc list-inside space-y-2 opacity-90">
               <li>Latihan Teknik Dasar: Siswa dilatih teknik dasar voli seperti servis, passing, setting, dan smashing.</li>
<li>Latihan Fisik: Selain teknik, latihan fisik seperti lari, jumping, dan strength training dilakukan untuk meningkatkan kebugaran dan kekuatan.</li>
<li>Simulasi Pertandingan: Siswa berlatih dalam bentuk simulasi pertandingan untuk memahami strategi permainan dan taktik tim.</li>
<li>Turnamen Internal dan Eksternal: Siswa diberi kesempatan untuk mengikuti pertandingan dan turnamen baik di dalam sekolah maupun di luar sekolah.</li>
<li>Pengembangan Mentalitas: Voli melatih siswa untuk memiliki mentalitas pemenang yang positif, menghadapi tekanan, dan bekerja keras untuk mencapai tujuan.</li>
<li>Latihan Strategi dan Taktik: Siswa diajarkan berbagai strategi dan taktik permainan, termasuk formasi serangan dan pertahanan.</li>

            </ul>
          </div>
        </section>

        
       
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
