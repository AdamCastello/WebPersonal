// Konfigurasi Lagu
const laguConfig = {
    title: 'Lagu Favorit Atmin',
    audioUrl: 'https://file.garden/abdAy0WFLSjEBceS/Web%20Personal/%CA%99%E1%B4%8F%E1%B4%9B%20%E1%B4%8B%E1%B4%80%E1%B4%8B%20%E1%B4%9B%E1%B4%8F%20%E1%B4%9B%E1%B4%80%E1%B4%8B.m4a' // Ganti dengan URL lagu Anda
};

// Inisialisasi player
document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');
    const progressBar = document.getElementById('progressBar');
    const progressFill = document.getElementById('progressFill');
    const currentTimeEl = document.getElementById('currentTime');
    const durationEl = document.getElementById('duration');
    const songTitleEl = document.getElementById('songTitle');

    // Set judul lagu
    if (songTitleEl) {
        songTitleEl.textContent = laguConfig.title;
    }

    // Set source audio
    if (audioPlayer && laguConfig.audioUrl) {
        audioPlayer.src = laguConfig.audioUrl;
    }

    // Format waktu
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Load metadata
    audioPlayer.addEventListener('loadedmetadata', function() {
        durationEl.textContent = formatTime(audioPlayer.duration);
    });

    // Update progress
    audioPlayer.addEventListener('timeupdate', function() {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressFill.style.width = progress + '%';
        currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
    });

    // Play/Pause
    playPauseBtn.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        } else {
            audioPlayer.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        }
    });

    // Click pada progress bar untuk seek
    progressBar.addEventListener('click', function(e) {
        const rect = progressBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const percentage = (clickX / width) * 100;
        const seekTime = (percentage / 100) * audioPlayer.duration;
        audioPlayer.currentTime = seekTime;
    });

    // Reset saat lagu selesai
    audioPlayer.addEventListener('ended', function() {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        progressFill.style.width = '0%';
        currentTimeEl.textContent = '0:00';
    });
});