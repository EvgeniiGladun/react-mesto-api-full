class Api {
  constructor({ baseUrl, headers, credentials }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
    this.credentials = credentials;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  // Запрос массив карточек
  getInitialCards() {
    return fetch(this.baseUrl + "/cards", {
      headers: this.headers,
      credentials: this.credentials,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // Запрашиваем данные пришедшего пользователя
  getInitialUsers() {
    return fetch(this.baseUrl + "/users/me", {
      headers: this.headers,
      credentials: this.credentials,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // Обновляем данные пользваотеля
  setInitialUsers(name, about) {
    return fetch(this.baseUrl + "/users/me", {
      method: "PATCH",
      headers: this.headers,
      credentials: this.credentials,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // Добавляем карту пользователя
  setAddNewCard(name, link) {
    return fetch(this.baseUrl + "/cards", {
      method: "POST",
      headers: this.headers,
      credentials: this.credentials,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // Удаляем добавленную карту пользователя
  deleteCard(cardId) {
    return fetch(this.baseUrl + "/cards/" + cardId, {
      method: "DELETE",
      headers: this.headers,
      credentials: this.credentials,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // Добавляем лайк пользователя
  pushLike(cardId) {
    return fetch(this.baseUrl + "/cards/" + cardId + "/likes/", {
      method: "PUT",
      headers: this.headers,
      credentials: this.credentials,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // Удаляем лайк пользователя
  deleteLike(cardId) {
    return fetch(this.baseUrl + "/cards/" + cardId + "/likes/", {
      method: "DELETE",
      headers: this.headers,
      credentials: this.credentials,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // Отправляем новую аватарку пользователя
  setNewAvatar(avatar) {
    return fetch(this.baseUrl + "/users/me/avatar/", {
      method: "PATCH",
      headers: this.headers,
      credentials: this.credentials,
      body: JSON.stringify({ avatar }),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // Проверяем стоит ли лайк уже пользователя
  changeLikeCardStatus(cardId, isLiked) {
    return isLiked ? this.pushLike(cardId) : this.deleteLike(cardId);
  }
}

// Делаем запрос по api для получения информации
const api = new Api({
  baseUrl: "https://api.photograms.nomoredomainsclub.ru",
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
