'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from "next/image";

export default function esportPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-900 via-green-700 to-yellow-500 text-white">
      
      {/* Navbar */}
      <Navbar />

      {/* Konten Utama */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <Image
            src="/images/esprot.jpg"
            alt="esport SMK Citra Negara"
            width={900}
            height={500}
            className="mx-auto rounded-lg shadow-xl mb-8 object-cover"
            priority
          />
          <h1 className="font-display" style={{ fontSize: 48, color: 'green', marginBottom: 16 }}>
            E-SPORT
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
       Esports (Electronic Sports) adalah salah satu cabang aktivitas yang sangat berkembang di era digital. Ekstrakurikuler Esports tidak hanya menawarkan sarana penyaluran hobi, tetapi juga mengajarkan manajemen strategi, kerjasama tim, dan pengendalian diri.</p>
        </section>

        {/* Deskripsi Tujuan & Kegiatan */}
        <section className="max-w-4xl mx-auto px-6 py-12 sp ace-y-8">
          <div className="bg-green-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">Tujuan </h2>
            <ul className="list-disc list-inside space-y-2 opacity-90">
             <li>Meningkatkan Koordinasi Motorik: Melalui latihan intensif, Esports membantu meningkatkan koordinasi mata dan tangan, refleks, serta kecepatan reaksi siswa.</li>
<li>Mengembangkan Pemikiran Kritis: Esports melatih kemampuan pengambilan keputusan yang cepat dan tepat di bawah tekanan, serta kemampuan memecahkan masalah (problem solving).</li>
<li>Membentuk Kerjasama Tim: Seperti olahraga beregu lainnya, Esports mengajarkan pentingnya komunikasi efektif, pembagian peran, dan kepercayaan antar anggota tim.</li>
<li>Meningkatkan Konsentrasi dan Fokus: Kompetisi Esports membutuhkan tingkat konsentrasi yang tinggi dan ketahanan mental untuk tetap fokus dalam durasi yang panjang.</li>
<li>Mengajarkan Sportivitas Digital: Siswa belajar tentang etika digital, fair play, menghormati lawan, dan bersikap bijak dalam menghadapi kemenangan maupun kekalahan.</li>
            </ul>
          </div>

          <div className="bg-green-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">Kegiatan </h2>
            <ul className="list-disc list-inside space-y-2 opacity-90">
               <li>Latihan Mekanik Dasar: Siswa dilatih teknik dasar permainan (mikro) seperti akurasi, pergerakan, dan penguasaan alat kontrol untuk mencapai performa optimal.</li>
 <li>Analisis Pertandingan (Review): Kegiatan mengevaluasi rekaman pertandingan untuk menganalisis kesalahan, mempelajari strategi lawan, dan mendiskusikan perbaikan.</li>
 <li>Simulasi Pertandingan (Scrimmage): Siswa berlatih tanding melawan tim internal maupun eksternal untuk menguji strategi dan membangun chemistry tim.</li>
 <li>Partisipasi Turnamen: Siswa diberi kesempatan untuk mewakili sekolah dalam berbagai ajang kompetisi Esports, baik tingkat regional maupun nasional.</li>
 <li>Pengembangan Mentalitas: Esports melatih siswa untuk memiliki mental yang tangguh, mampu mengelola emosi, dan tetap tenang dalam situasi kritis.</li>
 <li>Penyusunan Strategi dan Taktik: Siswa mempelajari aspek makro permainan, seperti pemilihan karakter (drafting), rotasi peta, dan manajemen sumber daya tim.</li>

            </ul>
          </div>
        </section>

        
       
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
