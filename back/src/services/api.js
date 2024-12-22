const getAccessToken = require("./getAccessToken")

class Api {
    async getProductByName(name) {
        const accessToken = await getAccessToken()
        const url = `https://platform.fatsecret.com/rest/server.api?method=foods.search&search_expression=${name}&format=json`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const data = await response.json();
        if (response.ok) {
            return data;
        } else {
            console.error('Error fetching food data:', data);
            throw new Error('Failed to fetch food data');
        }
    }
    async getProductById(id) {
        const accessToken = await getAccessToken()
        const url = `https://platform.fatsecret.com/rest/server.api?method=food.get&food_id=${id}&format=json`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const data = await response.json();
        if (response.ok) {
            return data;
        } else {
            console.error('Error fetching food data:', data);
            throw new Error('Failed to fetch food data');
        }
    }
}

module.exports = new Api()