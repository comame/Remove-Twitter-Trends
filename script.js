const f = () => {
    const trends = document.querySelector('*[aria-label="タイムライン: トレンド"]')
    const trendsFeed = document.querySelector('*[aria-label="タイムライン: 話題を検索"]')
    const searchButton = document.querySelector('*[aria-label="調べたいものを検索"')

    trends?.parentElement.removeChild(trends)
    trendsFeed?.parentElement.removeChild(trendsFeed)
    searchButton?.parentElement.removeChild(searchButton)

    requestAnimationFrame(f)
}

window.addEventListener('load', f)
