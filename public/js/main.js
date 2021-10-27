const year = new Date().getFullYear()
const month = new Date().getMonth() + 1
const day = new Date().getDate() - 1

function searchAllNews(){ 
    fetch(`/api?q=sports&from=${year}-${month}-${day}&sortBy=popularity`)
    .then(res => res.json())
    .then(data => {
        Ui.news = data.articles
        Ui.createNews(data.articles)
    })
    .catch(err => console.log(err))
}

function searchByCategory(){
    const search = document.getElementById('search').value
    if(search != "" ){
        fetch(`/api?q=${search}&from=${year}-${month}-${day}&sortBy=popularity`)
        .then(res => res.json())
        .then(data => {
            Ui.news = data.articles
            Ui.createNews(data.articles)
        })
        .catch(err => console.log(err))
    }
}

document.addEventListener('click', e => {
    document.getElementById('modal-detail').classList.add('modal-hidden')
    if(e.target.className.indexOf('search-id') >= 0){
        const titleId = e.target.title
        Ui.openNewsDetail(titleId)  
        document.getElementById('modal-detail').classList.remove('modal-hidden')  
        window.scrollTo(0,0)    
    }else if(e.target.className.indexOf('modal-x') >= 0){
        document.getElementById('modal-detail').classList.add('modal-hidden')
    }
})