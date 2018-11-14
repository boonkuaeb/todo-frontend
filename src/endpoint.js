
var endpoint = {
    loginURL: "https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1619902299&redirect_uri=https://bk-todo-app.herokuapp.com/auth&scope=profile&state=",
    getProfile: "https://api.line.me/v2/profile",
    todoApiURL: "https://f04aac9b.ngrok.io/api/v1/todo/user/",
    todoApiUpdateURL: "https://f04aac9b.ngrok.io/api/v1/todo/",
    getTokenURL: "https://f04aac9b.ngrok.io/api/auth"
};


export default endpoint;