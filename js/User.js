class User{
    user_id = "";
    username = "";
    email = "";
    password = "";
    api_url = "https://6334a608ea0de5318a06d722.mockapi.io";

    create(){
        let data = {
            username : this.username,
            email: this.email,
            password: this.password
        }

        console.log(data);
    }
}