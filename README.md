# Website IMM Buya Hamka

Website statis IMM Buya Hamka dengan tampilan modern dan responsif.

## Jalankan lokal

```bash
python -m http.server 8000
```

Buka `http://localhost:8000`.

## Struktur

- `index.html` — beranda
- `tentang.html` — profil, visi, misi
- `pengurus.html` — struktur pengurus
- `galeri.html` — dokumentasi kegiatan + lightbox
- `kontak.html` — kanal komunikasi + form frontend
- `css/style.css` — design system dan responsive UI
- `js/main.js` — navigasi mobile, tahun otomatis, lightbox
- `asset/gambar/` — aset logo, kegiatan, dan pengurus

Foto yang belum tersedia memakai placeholder lokal agar tidak ada broken image. Ganti placeholder tersebut dengan aset resmi saat sudah tersedia.

Form kontak belum terhubung ke backend; sambungkan ke endpoint/API organisasi sebelum produksi.
