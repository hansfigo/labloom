const credentialStore = () => {
    interface AuthData {
        username: string;
        password: string;
    }

    const login = async (username: string, password: string) => {
        const data = {
            username: username,
            password: password
        };

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        const url = 'http://localhost:8000/login.php';

        const response = await fetch(url, requestOptions);

        if (!response.ok) {
            return {
                response: response,
            };
        }

        const responseData = await response.json();

        return {
            response: response,
            responseData: responseData
        };
    };

    const register = async (username: string, password: string) => {
        const data = {
            username: username,
            password: password
        };

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        const url = 'http://localhost:8000/register.php';

        const response = await fetch(url, requestOptions);

        if (!response.ok) {
            return {
                response: response,
            };
        }

        const responseData = await response.json();

        return {
            response: response,
            responseData: responseData
        };
    };


    const getUserDataFromCookies = async (token: string) => {
        const data = {
            token: token
        };

        const url = `http://localhost:8000/cookies.php?token=${token}`;

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const response = await fetch(url, requestOptions);

        if (!response.ok) {
            return {
                response: response,
            };
        }

        const responseData = await response.json();

        return {
            response: response,
            responseData : responseData
        };

    }

    const createCookies = async (username: string, token: string) => {
        const data = {
            username: username,
            token: token
        };

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        const url = 'http://localhost:8000/cookies.php';

        const response = await fetch(url, requestOptions);

        if (!response.ok) {
            return {
                response: response,
            };
        }

        const responseData = await response.json();

        console.log(responseData);


        return {
            response: response,
            responseData : responseData
        };
    }

    return {
        register: register,
        login: login,
        createCookies: createCookies,
        getUserDataFromCookies : getUserDataFromCookies
    }
}

export const auth = credentialStore()