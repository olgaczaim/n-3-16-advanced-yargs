var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Olgac'
    };
    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(11, (userObject) => {
    console.log(userObject);
});