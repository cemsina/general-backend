function randomString(n){
    n = n || 10;
    const alphabet = "qwertyuopasdfghjklizxcvbnm1234567890";
    var str = "";
    for(var i=0;i<n;i++){
        const r = Math.floor(Math.random() * alphabet.length)
        str += alphabet[r];
    }
    return str;
}

Parse.Cloud.define("test", (request) => {
    var text = "hello world";
    var jsonObject = {
        "answer": text
    };
    return jsonObject
});


Parse.Cloud.job("createRandomEmployee", async (request) =>  {
    const employee = new Parse.Object("Employee");
    employee.set("firstName",randomString());
    employee.set("lastName",randomString());
    employee.set("username",randomString());
    employee.save();
    return employee;
});