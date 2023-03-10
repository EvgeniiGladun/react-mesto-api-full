import React from "react";

function ImagePopup(props) {
  return (
    <section onClick={props.onClose} className={`popup popup-img ${props.card ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_img">
        <button
          onClick={props.onClose}
          className="popup__close popup-img__close"
          type="reset"
          aria-label="Закрыть"
        ></button>

        <img
          className="popup__img"
          onClick={props.propagation}
          src={`${props.card ? props.card.link : "#"}`}
          alt={`${props.card ? props.card.name : "Изображение"}`}
        />
        <h3 className="popup__title popup__title_img"
          onClick={props.propagation}
        >{`${props.card ? props.card.name : ""
          }`}</h3>
      </div>
    </section>
  );
}

export default ImagePopup;
