
document.addEventListener('DOMContentLoaded', function() {
    const semuaBagian = document.querySelectorAll('.bagian');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {       
            if (entry.isIntersecting) {            
                entry.target.classList.add('terlihat');
            }
        });
    }, {
        threshold: 0.15
    });
  
    semuaBagian.forEach(bagian => {
        observer.observe(bagian);
    });

    const tautanNavigasi = document.querySelectorAll('.nav-tautan a');

    window.addEventListener('scroll', () => {
        let posisiScroll = window.scrollY;
        let idBagianSaatIni = '';

        semuaBagian.forEach(bagian => {
            if (posisiScroll >= bagian.offsetTop - 150 && posisiScroll < bagian.offsetTop + bagian.offsetHeight - 150) {
                idBagianSaatIni = bagian.getAttribute('id');
            }
        });

        tautanNavigasi.forEach(tautan => {            
            tautan.classList.remove('aktif');
            if (tautan.getAttribute('href') === '#' + idBagianSaatIni) {
                tautan.classList.add('aktif');
            }
        });
    });

});
