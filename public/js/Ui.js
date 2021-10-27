class Ui{
    static news = []

    static createNews(news){
        document.getElementById('childNews').innerHTML = ""
        news.forEach((n, i) => {
            if(i == 0) {
                Ui._createHeaderNews(n)
            }else{
                Ui._createChildNews(n, i)
            }
        })
    }

    static _createHeaderNews(news){
        const headerNews = document.getElementById('headerNews')
        headerNews.innerHTML = `
            <img src="${news.urlToImage}" class="card-img-top" alt="picture" style="max-height: 50vh; object-fit: cover;">
            <div class="card-body">
                <h5 title="0" class="card-title search-id">${news.title}</h5>
                <p class="card-text">${news.description}</p>
                <p class="card-text"><small class="text-muted">${news.publishedAt}</small></p>
            </div>        
        `
    }

    static _createChildNews(news, index){
        const div = document.createElement('div')
        div.className = "col-md-4"
        div.innerHTML = `
            <div class="card">
                <img src="${news.urlToImage}" class="card-img-top" alt="picture">
                <div class="card-body">
                    <h5 title="${index}" class="card-title search-id">${news.title}</h5>
                    <p class="card-text">${news.description}</p>
                    <p class="card-text"><small class="text-muted">${news.publishedAt}</small></p>
                    <button title="${index}" class="btn btn-primary search-id">More...</button>
                </div>
            </div>      
        `
        document.getElementById('childNews').appendChild(div)
    }

    static openNewsDetail(titleId){
        const news = Ui.news.filter((n, i) => {
            return i == titleId
        })
        const modaldetail = document.getElementById('modal-detail')
        modaldetail.innerHTML = `
            <div class="modal-x">x</div>
            <div class="card mb-3 mt-3">
                <img src="${news[0].urlToImage}" class="card-img-top" alt="picture">
                <div class="card-body">
                    <h5 class="card-title">${news[0].title}</h5>
                    <p class="card-text">${news[0].content}</p>
                    <p class="card-text"><small class="text-muted">${news[0].publishedAt}</small></p>
                </div>
            </div>`
    }

}