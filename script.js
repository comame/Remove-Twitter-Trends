const f = () => {
    const trends = document.querySelector('*[aria-label="タイムライン: トレンド"]')
    console.log(trends)
    if (!trends) {
        requestAnimationFrame(() => {
            f()
        })
    } else {
        trends.parentElement.removeChild(trends)
    }
}

f()
