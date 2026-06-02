'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from "next/image";

export default function theaterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-900 via-green-700 to-yellow-500 text-white">
      
      {/* Navbar */}
      <Navbar />

      {/* Konten Utama */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <Image
            src="/images/citter.jpg"
            alt="theater SMK Citra Negara"
            width={900}
            height={500}
            className="mx-auto rounded-lg shadow-xl mb-8 object-cover"
            priority
          />
          <h1 className="font-display" style={{ fontSize: 48, color: 'green', marginBottom: 16 }}>
            THEATER
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
         Teater adalah salah satu ekstrakurikuler yang menawarkan kesempatan bagi siswa untuk mengeksplorasi kreativitas dan mengembangkan keterampilan komunikasi. Berikut adalah beberapa aspek penting tentang ekstrakurikuler teater:</p>
        </section>

        {/* Deskripsi Tujuan & Kegiatan */}
        <section className="max-w-4xl mx-auto px-6 py-12 sp ace-y-8">
          <div className="bg-green-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">Tujuan </h2>
            <ul className="list-disc list-inside space-y-2 opacity-90">
             <li> Mengembangkan Kreativitas: Teater mendorong siswa untuk berpikir kreatif dan inovatif dalam menciptakan karakter, alur cerita, dan pertunjukan.</li>
<li> Meningkatkan Keterampilan Komunikasi: Melalui latihan dialog dan akting, siswa belajar cara berkomunikasi dengan jelas dan efektif.</li>
<li> Meningkatkan Kepercayaan Diri: Berpartisipasi dalam pertunjukan teater membantu siswa mengatasi rasa gugup dan meningkatkan kepercayaan diri.</li>
<li> Mengajarkan Kerjasama Tim: Teater adalah kegiatan kolaboratif yang membutuhkan kerja sama antara pemain, sutradara, dan kru lainnya.</li>
<li> Menumbuhkan Apresiasi terhadap Seni: Siswa belajar menghargai seni teater dan berbagai aspek produksi panggung.</li>
            </ul>
          </div>

          <div className="bg-green-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">Kegiatan </h2>
            <ul className="list-disc list-inside space-y-2 opacity-90">
               <li>Latihan Akting: Siswa dilatih berbagai teknik akting, termasuk ekspresi wajah, gerakan tubuh, dan intonasi suara.</li>
<li>Pembacaan Naskah: Siswa mempelajari naskah drama, memahami karakter, dan mengembangkan interpretasi mereka sendiri terhadap peran yang dimainkan.</li>
<li>Latihan Improvisasi: Siswa diajarkan teknik improvisasi untuk meningkatkan kreativitas dan kemampuan berpikir cepat dalam situasi yang tidak terduga.</li>
<li>Produksi Pertunjukan: Siswa berpartisipasi dalam produksi pertunjukan teater, mulai dari latihan, pengaturan panggung, kostum, hingga penampilan di depan penonton.</li>
<li>Kegiatan Belajar Kolaboratif: Siswa bekerja sama dengan anggota tim lainnya, termasuk sutradara, penulis naskah, dan kru teknis, untuk menciptakan pertunjukan yang berhasil.</li>
<li>Workshop dan Pelatihan: Siswa memiliki kesempatan untuk mengikuti workshop dan pelatihan dari profesional di bidang teater untuk meningkatkan keterampilan mereka.</li>

            </ul>
          </div>
        </section>

        
       
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
