// Menunggu hingga seluruh konten halaman HTML dimuat sebelum menjalankan skrip
document.addEventListener('DOMContentLoaded', function() {

    // --- FUNGSI 1: EFEK FADE-IN PADA SECTION SAAT DI-SCROLL ---

    // Pilih semua elemen 'section' dengan kelas 'bagian'
    const semuaBagian = document.querySelectorAll('.bagian');

    // Buat Intersection Observer untuk mendeteksi kapan elemen masuk ke layar
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Jika elemen (section) terlihat di layar
            if (entry.isIntersecting) {
                // Tambahkan kelas 'terlihat' untuk memicu animasi CSS
                entry.target.classList.add('terlihat');
            }
        });
    }, {
        // Opsi: memicu 15% sebelum elemen sepenuhnya terlihat
        threshold: 0.15
    });

    // Terapkan observer ke setiap section
    semuaBagian.forEach(bagian => {
        observer.observe(bagian);
    });


    // --- FUNGSI 2: MENYOROT TAUTAN NAVIGASI SESUAI POSISI SCROLL ---

    // Pilih semua tautan di dalam list navigasi
    const tautanNavigasi = document.querySelectorAll('.nav-tautan a');
    
    // Tambahkan event listener untuk event 'scroll' pada window
    window.addEventListener('scroll', () => {
        let posisiScroll = window.scrollY;
        let idBagianSaatIni = '';

        // Loop melalui setiap section untuk menemukan mana yang sedang aktif
        semuaBagian.forEach(bagian => {
            // Cek apakah posisi scroll berada dalam jangkauan section ini
            if (posisiScroll >= bagian.offsetTop - 150 && posisiScroll < bagian.offsetTop + bagian.offsetHeight - 150) {
                idBagianSaatIni = bagian.getAttribute('id');
            }
        });

        // Loop melalui setiap tautan navigasi untuk memperbarui kelas 'aktif'
        tautanNavigasi.forEach(tautan => {
            // Hapus dulu kelas 'aktif' dari semua tautan
            tautan.classList.remove('aktif');
            // Jika tautan merujuk ke section yang sedang aktif, tambahkan kelas 'aktif'
            if (tautan.getAttribute('href') === '#' + idBagianSaatIni) {
                tautan.classList.add('aktif');
            }
        });
    });

});
