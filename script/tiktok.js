// Konfigurasi link TikTok
const tiktokConfig = {
    username: '@dimznotdev.vercel.app' // Ganti dengan username TikTok
};

document.addEventListener('DOMContentLoaded', function() {
    const btnTiktok = document.getElementById('btnTiktok');
    if (btnTiktok) {
        btnTiktok.addEventListener('click', function() {
            const url = `https://www.tiktok.com/${tiktokConfig.username}`;
            window.open(url, '_blank');
        });
    }
});