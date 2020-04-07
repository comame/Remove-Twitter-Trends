const f = () => {
    const trends = document.querySelector('*[aria-label="タイムライン: トレンド"]')
    if (!trends) {
        requestAnimationFrame(() => {
            f()
        })
    } else {
        trends.parentElement.removeChild(trends)
    }
}

f()
