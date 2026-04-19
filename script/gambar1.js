// Konfigurasi gambar profil pertama (atas)
const gambar1Config = {
    imageUrl: 'https://file.garden/abdAy0WFLSjEBceS/Web%20Personal/%C9%A2%E1%B4%80%E1%B4%8D%CA%99%E1%B4%80%CA%801.png', // Ganti URL gambar sesuai keinginan
    altText: 'DimzKanjut99'
};

// Mengatur gambar profil 1
document.addEventListener('DOMContentLoaded', function() {
    const profileImg1 = document.getElementById('profileImg1');
    if (profileImg1) {
        profileImg1.src = gambar1Config.imageUrl;
        profileImg1.alt = gambar1Config.altText;
    }
});