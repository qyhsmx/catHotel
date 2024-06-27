document.querySelectorAll('.gallery-link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        document.body.style.animation = 'none';  // 重置动画
        document.body.style.opacity = '0';  // 隐藏内容
        setTimeout(() => {
            window.location.href = link.href;
        }, 300);  // 延迟跳转
    });
});
