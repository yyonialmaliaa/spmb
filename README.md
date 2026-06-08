# 🎓 SPMB Online

Sistem Penerimaan Murid Baru (SPMB) berbasis web yang dibuat menggunakan Next.js, TypeScript, Prisma, dan PostgreSQL.

Repository:

https://github.com/yyonialmaliaa/spmb

---

# ✨ Fitur

* Landing Page SPMB
* Informasi Jurusan
* Informasi Ekstrakurikuler
* Informasi Prestasi Sekolah
* Form Pendaftaran Online
* Login Admin
* Dashboard Admin
* Kelola Data Pendaftar
* Kelola Jurusan
* Kelola Prestasi
* Kelola Ekstrakurikuler

---

# 🛠️ Teknologi Yang Digunakan

* Next.js
* React
* TypeScript
* Prisma ORM
* MySql
* Tailwind CSS
* Vercel

---

# 📋 Persyaratan

Pastikan sudah menginstall:

* Node.js v18 atau lebih baru
* Git
* XAMPP
* VS Code (disarankan)

Cek versi:

```bash
node -v
npm -v
```

---

# 📥 Mengambil Project Dari GitHub

Clone repository:

```bash
git clone https://github.com/yyonialmaliaa/spmb.git
```

Masuk ke folder project:

```bash
cd spmb
```

---

# 📦 Install Dependency

Install semua package yang dibutuhkan:

```bash
npm install
```

Tunggu hingga proses selesai.

---

# 🗄️ Setup Database 

Buat database baru dengan nama:

```sql
CREATE DATABASE spmb_db;
```

Atau gunakan nama database lain sesuai kebutuhan.

---

# ⚙️ Konfigurasi Environment

Buat file baru dengan nama:

```txt
.env
```

Lalu isi seperti berikut:

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/spmb_db"

NEXTAUTH_SECRET="isi_dengan_secret_acak"

NEXTAUTH_URL="http://localhost:3000"
```

Sesuaikan:

* username 
* password 
* nama 

---

# 🔄 Menjalankan Prisma Migration

Generate Prisma Client:

```bash
npx prisma generate
```

Jalankan:

```bash
npx prisma db push
```

Jika berhasil maka seluruh tabel database akan dibuat otomatis.

---

# ▶️ Menjalankan Project

Mode Development:

```bash
npm run dev
```

Buka browser:

```txt
http://localhost:3000
```

---

#

# 🔄 Mengambil Update Terbaru

Jika repository sudah pernah di-clone:

```bash
git pull origin main
```

---

# 📤 Upload Perubahan ke GitHub

Setelah mengubah kode:

```bash
git add .

git commit -m "Perubahan terbaru"

git push origin main
```

---

# 📌 Perintah Git Yang Sering Digunakan

Melihat status file:

```bash
git status
```

Melihat riwayat commit:

```bash
git log --oneline
```

Melihat remote repository:

```bash
git remote -v
```

---


# 👨‍💻 Developer

XI PPLG 1
1. Chantique Putri
2. Elang Saputra
3. Indah Wardani
4. Keisya Naila
5. Yoni Al’fiani

---

# 📄 Notes

admin@smkcitranegara.sch.id
admin123

Project ini dibuat untuk kebutuhan Sistem Penerimaan Murid Baru (SPMB) dan Ujian Praktik.
