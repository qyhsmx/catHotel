document.addEventListener('DOMContentLoaded', () => {
    const showVideosBtn = document.getElementById('show-videos-btn');
    const videosSection = document.querySelector('.details-videos');

    showVideosBtn.addEventListener('click', () => {
        videosSection.classList.toggle('hidden');
    });

    // 图片淡入效果
    const images = document.querySelectorAll('.details-images img');
    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('fade-in');
        }, index * 300);  // 逐个淡入
    });
});
