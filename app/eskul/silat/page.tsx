'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from "next/image";

export default function silatPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-900 via-green-700 to-yellow-500 text-white">
      
      {/* Navbar */}
      <Navbar />

      {/* Konten Utama */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <Image
            src="/images/silat.jpg"
            alt="silat SMK Citra Negara"
            width={900}
            height={500}
            className="mx-auto rounded-lg shadow-xl mb-8 object-cover"
            priority
          />
          <h1 className="font-display" style={{ fontSize: 48, color: 'green', marginBottom: 16 }}>
            SILAT
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
       Pencak Silat adalah seni bela diri asli Indonesia yang telah diakui dunia. Ekstrakurikuler Pencak Silat di sekolah hadir tidak hanya untuk mengajarkan teknik membela diri, tetapi juga sebagai wadah untuk melestarikan warisan budaya bangsa serta membentuk karakter siswa yang tangguh dan berbudi pekerti luhur.</p>
        </section>

        {/* Deskripsi Tujuan & Kegiatan */}
        <section className="max-w-4xl mx-auto px-6 py-12 sp ace-y-8">
          <div className="bg-green-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">Tujuan </h2>
            <ul className="list-disc list-inside space-y-2 opacity-90">
             <li> Membangun Kemampuan Bela Diri: Siswa dibekali kemampuan teknis untuk melindungi diri sendiri (self-defense) dalam situasi yang mendesak dengan bijak.</li>
 <li> Meningkatkan Kebugaran Fisik: Gerakan silat yang dinamis melatih kekuatan otot, kelenturan tubuh, kecepatan, dan daya tahan kardiovaskular.</li>
 <li> Melestarikan Budaya Bangsa: Menumbuhkan rasa cinta dan bangga terhadap budaya asli Indonesia di tengah arus globalisasi.</li>
 <li> Membentuk Karakter Pendekar: Menanamkan nilai-nilai mental spiritual seperti keberanian, kejujuran, kerendahan hati, dan pengendalian diri (self-control).</li>
 <li> Meraih Prestasi: Mengarahkan potensi siswa untuk berkompetisi dan meraih juara di berbagai jenjang kejuaraan (O2SN, POPDA, hingga Kejurda/Kejurnas).</li>
            </ul>
          </div>

          <div className="bg-green-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">Kegiatan </h2>
            <ul className="list-disc list-inside space-y-2 opacity-90">
               <li>Latihan Teknik Dasar: Penguasaan fondasi silat seperti sikap pasang, pola langkah, kuda-kuda, pukulan, tendangan, tangkisan, dan bantingan.</li>
 <li>Kategori Tanding (Laga): Latihan aplikasi teknik untuk pertarungan kompetitif, meliputi strategi serangan, pertahanan, dan aturan poin dalam gelanggang.</li>
 <li>Kategori Seni (TGR): Mempelajari keindahan gerak silat melalui jurus Tunggal, Ganda, dan Regu yang menekankan pada ketepatan, kemantapan, dan ekspresi gerak.</li>
 <li>Latihan Fisik & Pernapasan: Sesi khusus untuk meningkatkan stamina fisik dan olah napas guna mendukung performa maksimal saat bertanding.</li>
 <li>Uji Tanding (Sparring): Simulasi pertandingan antar anggota atau latih tanding dengan perguruan/sekolah lain untuk mengasah mental bertarung.</li>
 <li>Keikutsertaan Kejuaraan: Partisipasi aktif dalam turnamen silat tingkat pelajar, daerah, maupun nasional untuk menambah jam terbang dan koleksi medali sekolah.</li>

            </ul>
          </div>
        </section>

        
       
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
