
var endpoint = {
    loginURL: "https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1619902299&redirect_uri=http://localhost:3000/auth&scope=profile&state=",
    getProfile: "https://api.line.me/v2/profile",
    todoApiURL: "http://f04aac9b.ngrok.io/api/v1/todo/user/",
    todoApiUpdateURL: "http://f04aac9b.ngrok.io/api/v1/todo/",
    getTokenURL: "http://f04aac9b.ngrok.io/api/auth"
};


export default endpoint;