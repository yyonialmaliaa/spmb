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
            src="/images/paskibra.jpg"
            alt="Paskibra SMK Citra Negara"
            width={900}
            height={500}
            className="mx-auto rounded-lg shadow-xl mb-8 object-cover"
            priority
          />
          <h1 className="font-display" style={{ fontSize: 48, color: 'white', marginBottom: 16 }}>
            PASKIBRA SMK Citra Negara
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Paskibra (Pasukan Pengibar Bendera) adalah salah satu ekstrakurikuler yang banyak dijumpai di sekolah-sekolah di Indonesia. Berikut adalah beberapa hal penting mengenai ekstrakurikuler Paskibra:
          </p>
        </section>

        {/* Deskripsi Tujuan & Kegiatan */}
        <section className="max-w-4xl mx-auto px-6 py-12 space-y-8">
          <div className="bg-green-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">Tujuan Paskibra</h2>
            <ul className="list-disc list-inside space-y-2 opacity-90">
              <li>Meningkatkan Nasionalisme: Melalui kegiatan Paskibra, siswa diajarkan untuk mencintai tanah air dan menghormati simbol-simbol negara, termasuk bendera merah putih.</li>
              <li>Membentuk Karakter: Kedisiplinan, tanggung jawab, dan kerjasama adalah nilai-nilai utama yang ditanamkan dalam setiap kegiatan Paskibra.</li>
              <li>Mengembangkan Kepemimpinan: Anggota Paskibra dilatih untuk memiliki jiwa kepemimpinan dan keberanian dalam menghadapi berbagai tantangan.</li>
            </ul>
          </div>

          <div className="bg-green-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">Kegiatan Paskibra</h2>
            <ul className="list-disc list-inside space-y-2 opacity-90">
              <li>Latihan Baris-Berbaris (PBB).</li>
              <li>Latihan Pengibaran Bendera sesuai protokol.</li>
              <li>Kegiatan fisik dan mental untuk ketahanan dan kepercayaan diri.</li>
              <li>Peran penting dalam upacara bendera sekolah dan peringatan nasional.</li>
            </ul>
          </div>
        </section>

        
       
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
