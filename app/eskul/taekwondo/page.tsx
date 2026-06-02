'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from "next/image";

export default function taekwondoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-900 via-green-700 to-yellow-500 text-white">
      
      {/* Navbar */}
      <Navbar />

      {/* Konten Utama */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <Image
            src="/images/taekwondo.jpg"
            alt="Paskibra SMK Citra Negara"
            width={900}
            height={500}
            className="mx-auto rounded-lg shadow-xl mb-8 object-cover"
            priority
          />
          <h1 className="font-display" style={{ fontSize: 48, color: 'green', marginBottom: 16 }}>
            TAEKWONDO
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
          Taekwondo adalah salah satu ekstrakurikuler yang menawarkan lebih dari sekadar keterampilan bela diri. Berikut adalah beberapa aspek menarik tentang ekstrakurikuler taekwondo:</p>
        </section>

        {/* Deskripsi Tujuan & Kegiatan */}
        <section className="max-w-4xl mx-auto px-6 py-12 space-y-8">
          <div className="bg-green-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">Tujuan </h2>
            <ul className="list-disc list-inside space-y-2 opacity-90">
             <li> Meningkatkan Kedisiplinan: Taekwondo mengajarkan disiplin melalui latihan yang terstruktur dan aturan yang ketat.</li>
 <li>Mengembangkan Kebugaran Fisik: Melalui berbagai latihan fisik, taekwondo membantu meningkatkan kekuatan, kelincahan, dan ketahanan tubuh.</li>
 <li>Mengajarkan Bela Diri: Taekwondo membekali siswa dengan keterampilan bela diri yang dapat digunakan untuk menjaga diri dalam situasi berbahaya.</li>
 <li>Membentuk Karakter Positif: Taekwondo menanamkan nilai-nilai seperti kepercayaan diri, rasa hormat, dan keberanian.</li>
            </ul>
          </div>

          <div className="bg-green-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">Kegiatan </h2>
            <ul className="list-disc list-inside space-y-2 opacity-90">
               <li>Latihan Teknik Dasar: Siswa dilatih berbagai teknik dasar seperti dribbling, passing, shooting, dan penguasaan bola.</li>
<li>Latihan Fisik: Selain teknik, futsal juga memerlukan kebugaran fisik yang baik. Latihan fisik meliputi jogging, sprint, dan latihan kekuatan.</li>
<li>Strategi dan Taktik: Siswa belajar berbagai strategi dan taktik permainan, termasuk formasi, pergerakan tanpa bola, dan pola serangan serta pertahanan.</li>
<li>Pertandingan dan Turnamen: Siswa diberikan kesempatan untuk mengaplikasikan latihan dalam pertandingan internal maupun eksternal. </li>
    <li>Mengikuti turnaLatihan Dasar: Siswa mempelajari gerakan dasar seperti tendangan, pukulan, blok, dan teknik jatuhan.</li>
<li>Poomsae: Latihan rangkaian gerakan yang mencakup berbagai teknik dasar taekwondo, dilakukan secara berurutan dan terstruktur.</li>
<li>Sparring (Pertarungan): Siswa diajarkan teknik bertarung yang aman dan sesuai dengan aturan taekwondo, dengan menggunakan pelindung tubuh.</li>
<li>Latihan Fisik: Selain teknik bela diri, siswa juga melakukan latihan fisik untuk meningkatkan kebugaran, seperti lari, push-up, dan sit-up.</li>
<li> Kenaikan Tingkat: Siswa mengikuti ujian untuk naik tingkat atau sabuk, yang menunjukkan peningkatan keterampilan dan pengetahuan mereka dalam taekwondo.</li>
<li>Partisipasi dalam Kejuaraan: Siswa diberi kesempatan untuk mengikuti berbagai kejuaraan dan kompetisi taekwondo, baik di tingkat lokal, regional.</li>

            </ul>
          </div>
        </section>

        
       
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
