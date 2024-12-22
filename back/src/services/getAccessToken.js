async function getAccessToken() {
    const response = await fetch('https://oauth.fatsecret.com/connect/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
        }),
    });
    const data = await response.json();
    if (response.ok) {
        return data.access_token;
    } else {
        console.error('Error fetching access token:', data);
    }
}

module.exports = getAccessToken