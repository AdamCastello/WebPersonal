// Konfigurasi link Instagram
const instagramConfig = {
    username: 'dimznotdev' // Ganti dengan username Instagram
};

document.addEventListener('DOMContentLoaded', function() {
    const btnInstagram = document.getElementById('btnInstagram');
    if (btnInstagram) {
        btnInstagram.addEventListener('click', function() {
            const url = `https://www.instagram.com/${instagramConfig.username}/`;
            window.open(url, '_blank');
        });
    }
});