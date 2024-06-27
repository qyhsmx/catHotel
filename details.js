document.addEventListener('DOMContentLoaded', () => {
    const showVideosBtn = document.getElementById('show-videos-btn');
    const videoModal = document.getElementById('video-modal');
    const closeVideoBtn = document.getElementById('close-video-btn');
    const floatingVideo = document.getElementById('floating-video');

    showVideosBtn.addEventListener('click', () => {
        videoModal.classList.remove('hidden');
        floatingVideo.play();
    });

    closeVideoBtn.addEventListener('click', () => {
        videoModal.classList.add('hidden');
        floatingVideo.pause();
        floatingVideo.currentTime = 0;  // 重置视频到开头
    });

    // 图片淡入效果
    const images = document.querySelectorAll('.details-images img');
    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('fade-in');
        }, index * 300);  // 逐个淡入
    });
});

// JavaScript函数，用于放大图片
function zoomImage(image) {
    // 切换当前图片的放大样式
    image.classList.toggle('zoomed');

    // 关闭其他已放大的图片
    const allImages = document.querySelectorAll('.details-images img');
    allImages.forEach(img => {
        if (img !== image) {
            img.classList.remove('zoomed');
        }
    });
}

