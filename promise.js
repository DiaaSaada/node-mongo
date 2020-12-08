const promise = new Promise((resolve, reject) => {
    console.log("Start")
    setTimeout(() => {
        resolve({ name: "efhihfefhehflef" });

    }, 3000)
    console.log("End")
});

console.log("A1")
promise.then((user) => {
    console.log(user)
})
console.log("A2")