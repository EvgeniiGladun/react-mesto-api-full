class Auth {
  constructor({ baseUrl, headers, credentials }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
    this.credentials = credentials;
  }

  // Првоеряем всё ли хорошо с пришедшим запросом
  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  // Регестрируем нового пользователя
  setRegisterUser(email, password) {
    return fetch(this.baseUrl + "/signup", {
      method: "POST",
      headers: this.headers,
      credentials: this.credentials,
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        return this._getResponseData(res);
      })
      .then((data) => {
        return data;
      });
  }

  // Отправляем данные пользователя на авторизацию 
  setAuthorizeUser(email, password) {
    return fetch(this.baseUrl + "/signin", {
      method: "POST",
      headers: this.headers,
      credentials: this.credentials,
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        return this._getResponseData(res);
      })
      .then((data) => {
        return data;
      });
  }

  // Проверяем JWT пользователя 
  getAuthenticationUser() {
    return fetch(this.baseUrl + "/users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: this.credentials,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // Удаления токена пользователя при разлогирование
  setLogOutUser() {
    return fetch(this.baseUrl + "/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: this.credentials,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }
}

// Делаем запрос по api для получения информации
const auth = new Auth({
  baseUrl: "https://api.photograms.nomoredomainsclub.ru",
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
});

export default auth;
