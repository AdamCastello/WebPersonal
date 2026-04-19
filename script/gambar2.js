// Konfigurasi gambar profil kedua (di card musik)
const gambar2Config = {
    imageUrl: 'https://file.garden/abdAy0WFLSjEBceS/Web%20Personal/%C9%A2%E1%B4%80%E1%B4%8D%CA%99%E1%B4%80%CA%802.jpg', // Ganti URL gambar sesuai keinginan
    altText: 'Cewe DimzKanjut99'
};

// Mengatur gambar profil 2
document.addEventListener('DOMContentLoaded', function() {
    const profileImg2 = document.getElementById('profileImg2');
    if (profileImg2) {
        profileImg2.src = gambar2Config.imageUrl;
        profileImg2.alt = gambar2Config.altText;
    }
});