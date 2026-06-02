'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from "next/image";

export default function pramukaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-900 via-green-700 to-yellow-500 text-white">
      
      {/* Navbar */}
      <Navbar />

      {/* Konten Utama */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <Image
            src="/images/pramuka.jpg"
            alt="pramuka SMK Citra Negara"
            width={900}
            height={500}
            className="mx-auto rounded-lg shadow-xl mb-8 object-cover"
            priority
          />
          <h1 className="font-display" style={{ fontSize: 48, color: 'green', marginBottom: 16 }}>
            PRAMUKA
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
        Ekstrakurikuler Pramuka adalah salah satu kegiatan yang sangat berharga untuk mengembangkan keterampilan, kedisiplinan, dan karakter positif pada siswa. Berikut adalah beberapa hal penting tentang ekstrakurikuler Pramuka:</p>
        </section>

        {/* Deskripsi Tujuan & Kegiatan */}
        <section className="max-w-4xl mx-auto px-6 py-12 sp ace-y-8">
          <div className="bg-green-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">Tujuan </h2>
            <ul className="list-disc list-inside space-y-2 opacity-90">
             <li> Meningkatkan Kedisiplinan: Pramuka mengajarkan pentingnya kedisiplinan melalui berbagai kegiatan yang terstruktur dan aturan yang ketat.</li>
<li> Mengembangkan Keterampilan: Siswa belajar berbagai keterampilan praktis seperti tali-temali, pertolongan pertama, navigasi, dan memasak di alam terbuka.</li>
<li> Membentuk Karakter: Pramuka menanamkan nilai-nilai seperti kepemimpinan, tanggung jawab, kerjasama, dan kepedulian terhadap sesama.</li>
<li> Menumbuhkan Cinta Alam dan Lingkungan: Melalui kegiatan di alam terbuka, Pramuka mengajarkan pentingnya menjaga dan menghargai lingkungan.</li>
<li> Meningkatkan Kepercayaan Diri: Berbagai tantangan dan kegiatan yang dilakukan membantu meningkatkan rasa percaya diri dan kemandirian siswa.</li>
            </ul>
          </div>

          <div className="bg-green-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">Kegiatan </h2>
            <ul className="list-disc list-inside space-y-2 opacity-90">
               <li>Latihan Rutin: Siswa mengikuti latihan rutin yang mencakup berbagai keterampilan dasar Pramuka seperti tali-temali, mendirikan tenda, dan mengatur api unggun.</li>
<li>Kegiatan Kemah: Siswa berpartisipasi dalam kegiatan kemah yang melibatkan berbagai kegiatan seperti hiking, penjelajahan, dan berbagai permainan yang menantang.</li>
<li>Lomba dan Kompetisi: Siswa diberi kesempatan untuk mengikuti berbagai lomba dan kompetisi Pramuka di tingkat sekolah, daerah, maupun nasional.</li>
<li>Proyek Pengabdian Masyarakat: Pramuka sering terlibat dalam proyek pengabdian masyarakat seperti bakti sosial, penanaman pohon, dan kegiatan lingkungan lainnya.</li>
<li>Kegiatan Kepemimpinan: Siswa diberikan kesempatan untuk mengembangkan keterampilan kepemimpinan melalui peran-peran seperti ketua regu atau pemimpin upacara.</li>
<li>Pelatihan dan Kursus: Siswa mengikuti berbagai pelatihan dan kursus untuk meningkatkan keterampilan dan pengetahuan mereka dalam bidang Pramuka.</li>

            </ul>
          </div>
        </section>

        
       
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
