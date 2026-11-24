// Menu navigasi untuk tampilan mobile

const abinToggle = document.getElementById('abin_toggle');
const abinNav = document.getElementById('abin_nav');

if (abinToggle && abinNav) {
    abinToggle.addEventListener('click', function () {
        abinNav.classList.toggle('abin_show');
    });
}


// Form kontak

const abinForm = document.getElementById('abin_contact_form');

if (abinForm) {
    abinForm.addEventListener('submit', function (event) {

        event.preventDefault();

        const abinNama = document.getElementById('abin_nama').value.trim();

        const abinEmail = document.getElementById('abin_email').value.trim();

        const abinPesan = document.getElementById('abin_pesan').value.trim();

        const abinStatus = document.getElementById('abin_form_status');

        if (!abinNama || !abinEmail || !abinPesan) {
            abinStatus.textContent = 'Mohon lengkapi semua kolom terlebih dahulu.';
            return;
        }

        abinStatus.textContent = 'Terima kasih, ' + abinNama + '! Pesan berhasil divalidasi (demo).';

        abinForm.reset();
    });
}