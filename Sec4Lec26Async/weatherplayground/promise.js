var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('Hey. It Worked!');
        reject('Unable to fulfill promise');
    }, 2500)
});

somePromise.then((message) => {
    console.log('Success', message);
});