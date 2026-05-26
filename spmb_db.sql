-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 26 Bulan Mei 2026 pada 06.04
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `spmb_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `pendaftaran`
--

CREATE TABLE `pendaftaran` (
  `id` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `namaLengkap` varchar(191) NOT NULL,
  `namaPanggilan` varchar(191) NOT NULL,
  `ttl` varchar(191) NOT NULL,
  `jenisKelamin` varchar(191) NOT NULL,
  `alamat` text NOT NULL,
  `agama` varchar(191) NOT NULL,
  `namaOrtu` varchar(191) NOT NULL,
  `noOrtu` varchar(191) NOT NULL,
  `noPribadi` varchar(191) DEFAULT NULL,
  `jurusan` varchar(191) NOT NULL,
  `asalSekolah` varchar(191) NOT NULL,
  `nisn` varchar(191) NOT NULL,
  `nik` varchar(191) NOT NULL,
  `status` varchar(191) NOT NULL DEFAULT 'pending',
  `nilaiSeleksi` double DEFAULT NULL,
  `catatan` text DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `pendaftaran`
--

INSERT INTO `pendaftaran` (`id`, `userId`, `namaLengkap`, `namaPanggilan`, `ttl`, `jenisKelamin`, `alamat`, `agama`, `namaOrtu`, `noOrtu`, `noPribadi`, `jurusan`, `asalSekolah`, `nisn`, `nik`, `status`, `nilaiSeleksi`, `catatan`, `createdAt`, `updatedAt`) VALUES
('cmplwbyzr0003ug5odbd8vdkx', 'cmplw9m1y0001ug5ojwckxfjw', 'contoh', 'contoh', '15 januari 2010', 'Perempuan', 'jl. apa aja dulu', 'Islam', 'contoh', '012345678', '012345678', 'Rekayasa Perangkat Lunak (RPL)', 'smp contoh', '1234567899', '12345678912356', 'diterima', 90, 'selamat', '2026-05-26 00:27:44.487', '2026-05-26 00:30:56.424'),
('cmplwwehw0002ugq802vwu4u1', 'cmplwtlx10000ugq8g1pvd1kl', 'Hasisr', 'Hasi', 'jakarta, 12/5/2007', 'Laki-laki', 'Jalan aja dulu no 2,rt 2 rw 3 no 54', 'Kristen Protestan', 'air suci', '0867342846', '0809657354', 'Teknik Komputer & Jaringan (TKJ)', 'Smp kemaren', '1234567891', '1234567891', 'diterima', 50, 'ok', '2026-05-26 00:43:37.700', '2026-05-26 00:44:27.149'),
('cmplx486d0005ugq89d5zoes2', 'cmplx1a9i0003ugq8yj8b57k8', 'ambon', 'a', 'abc', 'Perempuan', 'pitar', 'Kristen Katolik', 'kunto', '0891345678', '08435267', 'Rekayasa Perangkat Lunak (RPL)', 'mts', '25', '12', 'ditolak', 5, 'belajar lagi coooo', '2026-05-26 00:49:42.757', '2026-05-26 00:51:08.545');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `role` varchar(191) NOT NULL DEFAULT 'user',
  `namaLengkap` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `role`, `namaLengkap`, `createdAt`, `updatedAt`) VALUES
('admin001', 'admin@smkcitranegara.sch.id', '$2b$10$nnmRh/cjtXmOY3HIZgwZjuviITrvyKPoh9MKziFSyJOXhAMcKvukC', 'admin', 'Administrator', '2026-05-24 11:38:36.000', '2026-05-24 11:38:36.000'),
('cmpcoo3rn0000ug0skeely7nm', 'a@gmail.com', '$2b$10$cKUOU4Gl0qGRm988xGRtG.JbqOwOxnTCYA6Xp5RWcfNpSbCbJ7aca', 'user', 'w', '2026-05-19 13:43:18.035', '2026-05-19 13:43:18.035'),
('cmpikn8ke0000ugpcyz25838a', 'c@gmail.com', '$2b$10$Lyqn8sU7s2Dymc8dyAjZseM7CWR1JXHDfvCNGlcg9mZGxBz2plEMe', 'user', 'chan', '2026-05-23 16:37:16.174', '2026-05-23 16:37:16.174'),
('cmplw9m1y0001ug5ojwckxfjw', 'contoh@gmail.com', '$2b$10$uoqRYKXOmVn3NUYfpRHvy.c.5RQhJEfXW8gYySDjL7zc3QcZLJPlG', 'user', 'ex', '2026-05-26 00:25:54.407', '2026-05-26 00:25:54.407'),
('cmplwtlx10000ugq8g1pvd1kl', 'hasisr@gmail.com', '$2b$10$toRHFNVU6DRmnTApRwUqWus7JnurI7LPA4Ctf7MsDi2SGeIQgKwXG', 'user', 'Hasi suara', '2026-05-26 00:41:27.349', '2026-05-26 00:41:27.349'),
('cmplx1a9i0003ugq8yj8b57k8', 'ambon@gmail.com', '$2b$10$C0EpYEFYc/dvWtJxg8f0w.Wnv4JLdQTehT04i4UwzzTRlSJQOWAoS', 'user', 'ambon', '2026-05-26 00:47:25.495', '2026-05-26 00:47:25.495');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `pendaftaran`
--
ALTER TABLE `pendaftaran`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Pendaftaran_userId_key` (`userId`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`);

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `pendaftaran`
--
ALTER TABLE `pendaftaran`
  ADD CONSTRAINT `Pendaftaran_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
