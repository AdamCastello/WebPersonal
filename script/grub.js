// Konfigurasi link Grup WhatsApp
const grubConfig = {
    inviteLink: 'https://chat.whatsapp.com/Eo36LfQvY5ZIu6MlINrhVw?mode=gi_t' // Ganti dengan link invite grup WhatsApp
};

document.addEventListener('DOMContentLoaded', function() {
    const btnGrub = document.getElementById('btnGrub');
    if (btnGrub) {
        btnGrub.addEventListener('click', function() {
            window.open(grubConfig.inviteLink, '_blank');
        });
    }
});