
import React from 'react';

export interface NewsItem {
  id: string | number;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image_url: string;
  date: string;
  author_name: string;
  created_at?: string;
}

export interface SchoolSchedule {
  id: string | number;
  title: string;
  day?: string;
  startTime?: string;
  endTime?: string;
  description: string;
  type: 'daily' | 'weekly' | 'event' | 'holiday';
  created_at?: string;
}

export interface Announcement {
  id: string | number;
  title: string;
  content: string;
  priority: 'low' | 'medium' | 'high';
  status: 'active' | 'archived';
  published_date: string;
  created_at?: string;
}

export interface Teacher {
  id: string | number;
  nama: string;
  nip?: string;
  spesialisasi: string;
  email?: string;
  phone?: string;
  photo_url?: string;
  jabatan?: string;
  status: 'aktif' | 'non-aktif';
  created_at?: string;
}

export interface OSISMember {
  id: string | number;
  nama: string;
  jabatan: string;
  kelas: string;
  email?: string;
  phone?: string;
  photo_url?: string;
  masa_jabatan: string;
  departemen?: string;
  status: 'aktif' | 'non-aktif';
  created_at?: string;
}

export enum Page {
  HOME = 'HOME',           // Landing & Profile
  PROFIL = 'PROFIL',       // Full School Profile
  GURU = 'GURU',           // Teachers & Staff
  KEGIATAN = 'KEGIATAN',   // Activities & Ops
  PRESTASI = 'PRESTASI',   // Achievements
  BERITA = 'BERITA',       // Blog/News
  GALERI = 'GALERI',       // Visual Gallery
  PPDB = 'PPDB',           // Admission Hub
  SIAKAD = 'SIAKAD',       // Academic Portal
  LIBRARY = 'LIBRARY',     // Digital Library
  ALUMNI = 'ALUMNI',       // Alumni Network
  AI_HUB = 'AI_HUB',       // Creative AI Lab
  SCHOLAR = 'SCHOLAR',     // AI Tutor Hub
  ADMIN = 'ADMIN',
  GURU_PORTAL = 'GURU_PORTAL' // Teacher Portal
}

// PPDB Registration Interface
export interface PPDBRegistration {
  id: string | number;
  // Data Siswa
  nama_lengkap: string;
  nisn: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  jenis_kelamin: 'L' | 'P';
  agama: string;
  alamat: string;
  rt_rw: string;
  desa_kelurahan: string;
  kecamatan: string;
  kabupaten_kota: string;
  provinsi: string;
  kode_pos: string;
  
  // Data Orang Tua
  nama_ayah: string;
  nama_ibu: string;
  pekerjaan_ayah: string;
  pekerjaan_ibu: string;
  no_telp_ortu: string;
  
  // Data Sekolah Asal
  nama_sekolah_asal: string;
  npsn_sekolah_asal: string;
  alamat_sekolah_asal: string;
  
  // Status
  status_pendaftaran: 'menunggu' | 'diterima' | 'ditolak';
  tanggal_daftar: string;
  tahun_ajaran: string;
  
  // Dokumen
  kk_url?: string;
  akte_url?: string;
  foto_url?: string;
  ijazah_url?: string;
  
  created_at?: string;
}
