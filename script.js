const f = () => {
    const trends = document.querySelector('*[aria-label="タイムライン: トレンド"]')
    if (trends) trends.parentElement.removeChild(trends)
    requestAnimationFrame(f)
}

window.addEventListener('load', f)
