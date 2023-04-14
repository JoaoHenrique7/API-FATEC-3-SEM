export default class DataServiceAPI {

    public static async post(url: string, params: Object) {
        return await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            body: JSON.stringify(params),
        });
    }

    public static async get(url: string, params?: Object) {
        return await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params)
        });
    }

    public static async delete(url: string, params: Object) {
        return await fetch('http://localhost:3000/user/deleteUser', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            body: JSON.stringify(params)
        })
    }

}