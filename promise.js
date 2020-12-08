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