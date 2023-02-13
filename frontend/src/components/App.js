import { userContex } from "../contexts/CurrentUserContext";

import React from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import api from "../utils/Api";
import auth from "../utils/Auth";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";

import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import СonfirmationRemovePopup from "./СonfirmationRemovePopup";

import Login from "./Login";
import Register from "./Register";
import InfoTooltip from "./InfoTooltip";
import ProtectedRoute from "./ProtectedRoute";

import Spinner from "./Spinner";

function App() {
  const history = useHistory();
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isСonfirmationPopupOpen, setIsСonfirmationPopupOpen] =
    React.useState(false);
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [cards, setCards] = React.useState([]);
  const [card, setCard] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [loadingText, setLoadingText] = React.useState("");
  const [btnFormText, setBtnFormText] = React.useState(`Сохранить`);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [requestStatus, setRequestStatus] = React.useState(false);
  const [headerEmail, setHeaderEmail] = React.useState('');

  // Проверка JWT ключа в файлах пользвоателя
  React.useEffect(() => {

    // Если есть токен, авторизируем
    auth
      .getAuthenticationUser()
      .then((res) => {
        if (res) {

          setLoggedIn(true);
          setHeaderEmail(res.email);
          history.push('/');
        }
      }).catch((err) => console.log(`Вы не авторизованы, ${err}`));
  }
    , [])

  React.useEffect(() => {

    // Загрузочный экран
    spinnerInfo(true, `Загружаем сайт...😊`);

    if (!loggedIn) {
      setTimeout(() => spinnerInfo(false), 2000);
      return;
    }

    Promise.all([api.getInitialCards(), api.getInitialUsers()])
      .then(([dataCards, dataUser]) => {
        // Рендер карточек на сайт из массива
        setCards(dataCards.map((card) => card));
        // Делаю запрос данных - пользователя
        setCurrentUser(dataUser);

        spinnerInfo(false)
      })

      .catch((err) => {
        setLoadingText(`Карточки не загрузились... 😢 ${err}`);
        console.log(err); // выведем ошибку в консоль
      });
  }, [loggedIn]);

  function handleCardLike(card) {
    // Проверяем, есть ли уже лайк на этой карточке
    const checkLike = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, !checkLike)
      .then((newCard) => {
        setCards((cards) =>
          cards.map((arrCard) => (arrCard._id === card._id ? newCard : arrCard))
        );
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  function handleCardDelete(card) {
    setBtnFormText(`Удаление карточки...😢`);

    // Отправляем запрос в API для удаления карточки
    api
      .deleteCard(card._id)
      .then(() => {
        setCards(cards.filter((arrCards) => arrCards._id !== card._id));
        closeAllPopups();
      })
      .catch((err) => {
        setBtnFormText(`${err}`);
        setTimeout(() => {
          setBtnFormText(`Повторить попытку 🔄️`);
        }, 1000);
        console.log(err); // выведем ошибку в консоль
      });
  }

  const handleEditAvatarClick = () => {
    setBtnFormText(`Сохранить`);
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setBtnFormText(`Сохранить`);
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setBtnFormText(`Сохранить`);
    setIsAddPlacePopupOpen(true);
  };

  const handleСonfirmationClick = (card) => {
    setBtnFormText(`Да`);
    setIsСonfirmationPopupOpen(true);
    setCard(card);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleInfoTooltip = (boolean) => {
    setInfoTooltipPopupOpen(true);
    setRequestStatus(boolean);
  };

  const spinnerInfo = (boolew, text) => {
    setLoading(boolew);
    setLoadingText(text);
  };

  const handleLoggedIn = (boolew) => {
    setLoggedIn(boolew);
    auth.
      setLogOutUser()
      .then((data) => data)
  }

  const handleUpdateUser = (dataUser) => {
    setBtnFormText(`Сохраняем крутые данные...😎`);

    // Отправляем в API новые данные пользователя
    api
      .setInitialUsers(dataUser.name, dataUser.about)
      .then((userData) => {
        setCurrentUser(userData);
        // Закрываем окна после отправки
        closeAllPopups();
      })
      .catch((err) => {
        setBtnFormText(`${err}`);
        setTimeout(() => {
          setBtnFormText(`Повторить попытку 🔄️`);
        }, 1000);
        console.log(err); // выведем ошибку в консоль
      });
  };

  const handleUpdateAvatar = (dataAvatar) => {
    setBtnFormText(`Обновляем аватарку... 🖼️`);

    // Отправляем в API новые данные пользователя
    api
      .setNewAvatar(dataAvatar.avatar)
      .then((newUserAvatar) => {
        setCurrentUser(newUserAvatar);
        // Закрываем окна после отправки
        closeAllPopups();
      })
      .catch((err) => {
        setBtnFormText(`${err}`);
        setTimeout(() => {
          setBtnFormText(`Повторить попытку 🔄️`);
        }, 1000);
        console.log(err); // выведем ошибку в консоль
      });
  };

  const handleAddPlaceSubmit = (dataNewCard) => {
    setBtnFormText(`Добавляем карточку... 🤩`);

    // Отправляем в API новые данные карточки и добавляем в массив
    api
      .setAddNewCard(dataNewCard.title, dataNewCard.link)
      .then((arrNewCard) => {
        setCards([arrNewCard, ...cards]);
        // Закрываем окна после отправки
        closeAllPopups();
      })
      .catch((err) => {
        setBtnFormText(`${err}`);
        setTimeout(() => {
          setBtnFormText(`Повторить попытку 🔄️`);
        }, 1000);
        console.log(err); // выведем ошибку в консоль
      });
  };

  const handleLogin = (email, password) => {
    auth
      .setAuthorizeUser(email.toLowerCase(), password)
      .then((data) => {
        if (data.JWT) {
          setLoggedIn(true);
          setHeaderEmail(email);
          history.push('/');
          return data;
        }
      })
      .catch((err) => {
        handleInfoTooltip(false);
        return console.log(err);
      });
  }

  const handleRegister = (email, password) => {
    auth
      .setRegisterUser(email.toLowerCase(), password)
      .then((res) => {
        if (res) {
          handleInfoTooltip(true);
          setHeaderEmail(email);
          history.push('/sign-in');
        }
      })
      .catch((err) => {
        handleInfoTooltip(false);
        return console.log(err);
      });
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsСonfirmationPopupOpen(false);
    setInfoTooltipPopupOpen(false);
    setSelectedCard(false);
  };

  const stopPropagation = (evt) => {
    return evt.stopPropagation();
  };

  return (
    <>
      {loading ? (
        <Spinner loading={loading} spinnerText={loadingText} />
      ) : (
        <>
          <Header
            emailUser={headerEmail}
            onLoggedIn={handleLoggedIn}
          />

          <Switch>
            <Route path="/sign-up">
              <Register auth={auth}
                onRegister={handleRegister} />
              <InfoTooltip
                isRequestStatus={requestStatus}
                isOpenInfoTooltip={isInfoTooltipPopupOpen}
                onClose={closeAllPopups}
              />
            </Route>

            <Route path="/sign-in">
              <Login
                auth={auth}
                onLogin={handleLogin}
              />
              <InfoTooltip
                isRequestStatus={requestStatus}
                isOpenInfoTooltip={isInfoTooltipPopupOpen}
                onClose={closeAllPopups}
              />
            </Route>

            <userContex.Provider value={currentUser}>
              <ProtectedRoute
                exact
                path="/"
                component={Main}
                loggedIn={loggedIn}
                arrCards={cards}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                onСonfirmationRemove={handleСonfirmationClick}
              />
              <EditAvatarPopup
                isOpen={isEditAvatarPopupOpen}
                btnText={btnFormText}
                onUpdateAvatar={handleUpdateAvatar}
                propagation={stopPropagation}
                onClose={closeAllPopups}

              />
              <ImagePopup
                propagation={stopPropagation}
                card={selectedCard}
                onClose={closeAllPopups}
              />
              <EditProfilePopup
                isOpenEditProfile={isEditProfilePopupOpen}
                btnText={btnFormText}
                onUpdateUser={handleUpdateUser}
                propagation={stopPropagation}
                onClose={closeAllPopups}

              />
              <AddPlacePopup
                isOpenAddPlace={isAddPlacePopupOpen}
                btnText={btnFormText}
                onAddPlace={handleAddPlaceSubmit}
                propagation={stopPropagation}
                onClose={closeAllPopups}

              />
              <СonfirmationRemovePopup
                isOpenСonfirmation={isСonfirmationPopupOpen}
                btnText={btnFormText}
                onCardDelete={handleCardDelete}
                card={card}
                onСonfirmationRemove={handleСonfirmationClick}

              />
              <Footer />
            </userContex.Provider>

            <Route exact path="/">
              {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
            </Route>
          </Switch>
        </>
      )}
    </>
  );
}

export default App;
