function parseApodResponse(response){
    let data = response.data
    let obj = {}
    obj['explanation'] = data.explanation
    obj['url'] = data.hdurl
    obj['title'] = data.title
    return obj
}

module.exports = {
    parseApodResponse
}