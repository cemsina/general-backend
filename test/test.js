const Parse = require("parse/node");
Parse.initialize("APP_ID");
Parse.serverURL = "https://cemsina.herokuapp.com/api";

Parse.User.logIn("cemsina", "1234").then(user => {
    var o = new Parse.Object("Test");
    o.set("col1", "b2");
    o.set("col2", "b2");
    o.set("col3", false);
    o.save({}, { sessionToken: user.getSessionToken() });

    var query = new Parse.Query("Test");
    query.equalTo("col1", "a");

    query.subscribe().then(sub => {
        sub.on("open", () => {
            console.log("OPEN");
        });

        sub.on("create", (obj) => {
            console.log("created", obj);
        });
    });
}).catch(err => {
    console.log(err);
});