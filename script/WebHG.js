// ===== TEMPLATE TOMBOL LINK BIASA =====
// Ganti:
// - 'btnFacebook' dengan ID tombol Anda
// - 'https://...' dengan URL tujuan

document.addEventListener('DOMContentLoaded', function() {
    const btnHG = document.getElementById('btnHG');
    if (btnHG) {
        btnHG.addEventListener('click', function() {
            window.open('https://bt-hgame.vercel.app', '_blank');
        });
    }
});