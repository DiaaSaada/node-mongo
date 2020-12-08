const promise = new Promise((resolve, reject) => {
    console.log("Start")
    setTimeout(() => {
        const rand = 3;
        if (rand % 2 == 0)
            resolve({ name: "efhihfefhehflef" });
        else {
            reject({ error: "random not even" });
        }

    }, 2000)
    console.log("End")
});

console.log("A1")
promise.then((user) => {
    console.log(user)
}).catch(error => {
    console.log(error)
})
console.log("A2")


//  async & wait

const fetchArticle = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ title: "longTask1" })
        }, 2000)
    })
}

const fetchAuthor = (article) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ author_name: "author" })
        }, 2000)
    })
}

const fetchAuthorCountry = (author) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ country_name: "Turkey" })
        }, 2000)
    })
}


//console.log('promise unclean way')
// un clean way
// const res = fetchArticle()
//     .then(article => fetchAuthor(article))
//     .then(author => fetchAuthorCountry(author))
//     .then(authorCountry => console.log(authorCountry));


console.log('promise CLEAN way')

async function fetchData() {
    const article = await fetchArticle();
    const author = await fetchAuthorCountry(article)
    const authorCountry = await fetchAuthorCountry(author)
    console.log(authorCountry);
    console.log("fetchData finished")
}

fetchData()