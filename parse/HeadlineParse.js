function parseNewsResponse(response){
    let articles = response.data.articles
    let article_list = []
    for(var i =0; i<articles.length; i++){
        let obj = {}
        let article = articles[i]
        obj['source'] = article.source.name
        obj['author'] = article.author
        obj['title'] = article.title
        obj['description'] = article.description
        obj['url'] = article.url
        article_list.push(obj)
    }
    return(article_list)
}

module.exports = {
    parseNewsResponse
}