const f = () => {
    const ariaLabels = [
        'おすすめユーザー',
        'タイムライン: ',
        'タイムライン: トレンド',
        'タイムライン: 話題を検索',
        '調べたいものを検索'
    ]

    const queries = ariaLabels.map(label => `*[aria-label="${label}"]`)
    for (const query of queries) {
        const element = document.querySelector(query)
        element?.parentElement.removeChild(element)

        if (element) console.log(element)
    }

    requestAnimationFrame(f)
}

window.addEventListener('load', f)
