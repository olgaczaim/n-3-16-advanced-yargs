var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Olgac'
    };
    callback(user);
};

getUser(11, (userObject) => {
    console.log(userObject);
});