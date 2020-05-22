function parseTriviaResponse(response){
    let data = response.data[0]
    let obj = {}
    obj["question"] = data.question
    obj["answer"] = data.answer
    obj["category"] = data.category.title
    return obj
}

module.exports = {
    parseTriviaResponse
}