class Comment {
    post_id = "";
    user_id = "";
    content = "";
    api_url = "https://6334a608ea0de5318a06d722.mockapi.io";

    create() {
        let session = new Session();
        session_id = session.getSession();

        let data = {
            post_id: this.post_id,
            user_id: this.user_id,
            content: this.content
        }

        data = JSON.stringify(data);

        let response = fetch(this.api_url + "/comments", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: data
        });
        data = response.json();
        return data;
    }
}