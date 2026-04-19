// Konfigurasi link WhatsApp
const whatsappConfig = {
    phoneNumber: '6283185461828', // Ganti dengan nomor WhatsApp
    message: 'Halo DimzKanjut99 Saya Mau Beli Membership'
};

document.addEventListener('DOMContentLoaded', function() {
    const btnWhatsapp = document.getElementById('btnWhatsapp');
    if (btnWhatsapp) {
        btnWhatsapp.addEventListener('click', function() {
            const url = `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(whatsappConfig.message)}`;
            window.open(url, '_blank');
        });
    }
});