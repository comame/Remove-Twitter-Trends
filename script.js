const f = () => {
    const trends = document.querySelector('*[aria-label="タイムライン: トレンド"]')
    const trendsFeed = document.querySelector('*[aria-label="タイムライン: 話題を検索"]')

    trends?.parentElement.removeChild(trends)
    trendsFeed?.parentElement.removeChild(trendsFeed)

    requestAnimationFrame(f)
}

window.addEventListener('load', f)
