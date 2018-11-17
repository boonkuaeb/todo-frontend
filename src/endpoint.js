
var endpoint = {
    loginURL: "https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1619902299&redirect_uri=https://line-todo-manage.herokuapp.com/auth&scope=profile&state=",
    getProfile: "https://api.line.me/v2/profile",
    todoApiURL: "https://line-todo-api.herokuapp.com/api/v1/todo/user/",
    todoApiUpdateURL: "https://line-todo-api.herokuapp.com/api/v1/todo/",
    getTokenURL: "https://line-todo-api.herokuapp.com/api/auth"
};


export default endpoint;