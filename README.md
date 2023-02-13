Репозиторий для приложения проекта `Mesto`, включающий фронтенд и бэкенд части приложения со следующими возможностями: авторизации и регистрации пользователей, операции с карточками и пользователями. Бэкенд расположите в директории `backend/`, а фронтенд - в `frontend/`.

Пожалуйста, прикрепите в это описание ссылку на сайт, размещенный на Яндекс.Облаке.

---

- IP 158.160.37.136
- Frontend https://photograms.nomoredomainsclub.ru/
- Backend https://api.photograms.nomoredomainsclub.ru/

---

## PHOTOGRAM

### Обзор

- О чем проект?
- Что использовалось при созданий проекта?
- Update project (обновления проекта)
- Спасибо!

**Проект доступен по ссылке - [Mesto & Photogram](https://photograms.nomoredomainsclub.ru/)**

**О чем проект?**
Данный проект создан для познавательной информации.
Позже он будет становиться лучше и лучше.

Проект ориентирован на познавательный контент.

**Что использовалось при созданий проекта?**

- Использовались следующий технологий при созданий проекта:

1. BEM – это методология, разработанная в яндексе, расшифровывается, как: Блок\_*элемент*модификатор.

2. Grid — это набор горизонтальных и вертикальных «линий», которые пересекаются между собой и создают сетку из рядов и колонок.

3. Хранение древовидных структур в Базах данных (Nested)

4. Медиа-запросы — это функция CSS, которая позволяет содержимому веб-страницы адаптироваться к разным размерам экрана и разрешениям.

5. CSS flexbox (Flexible Box Layout Module) — модуль макета гибкого контейнера — представляет собой способ компоновки элементов, в основе лежит идея оси.
   и другие технологий.

6. JavaScript — это язык программирования, позволяющий создавать скрипты, которые встраиваются в HTML-страницы и выполняются в браузере посетителя страницы.

7. Валидация форм — процесс проверки данных, введенных пользователем в объект, требующий от пользователя предоставить информацию о себе (это может форма он-лайн оплаты, форма регистрации и т.д.). Уверен, что из определения вполне ясно, почему валидация важна.

8. Добавили возможность закрытие окон по нажатию на кнопку "escape" и "клику" в область темного фона. Посмотреть видео по тому как работает закрытие по "клику" вы можете по ссылке --> [Открыть видео](https://code.s3.yandex.net/web-developer/learning-materials/project/project-6-03-overlay.mp4)

9. Подключили «Вебпак» — самый популярный и гибкий инструмент, а потому и самый универсальный.
   Плюсы «Вебпака»:

- JavaScript-код, написанный по новой спецификации, переделывается в точно такой же, но написанный по старой. Это позволяет пользоваться всеми самыми современными инструментами языка и не беспокоиться о поддержке сайта старыми браузерами.

- JavaScript и CSS минифицируются. Это значит, что внутри файла удаляются все пробелы, переносы строк и комментарии: браузеру они не нужны, а файл с кодом становится короче и оттого — легче. Более лёгкий файл быстрее загрузится.

- [Вендорные префиксы](https://doka.guide/css/vendor-prefixes/) тоже проставляются автоматически. Так что за поддержку css-кода старыми браузерами тоже можно не волноваться.

10. Добавьте в проект классы Section, Popup, PopupWithForm, PopupWithImage и UserInfo. Каждый из них выполняет строго одну задачу. Всё, что относится к решению этой задачи, находится внутри класса.

11. Все классы вынесены в отдельные файлы для быстрой работы сайта и удобства обслуживания.

**Update**
_Зачем обновлять дизайн и функционал сайта?_

1. Первые впечатления важны
   Поскольку многие посетители оценивают ваш веб-сайт за несколько секунд, критически важно иметь профессиональную, привлекательную и увлекательную графику.

2. Ваши потенциальные клиенты делают покупки для сравнения
   Побеждает компания с самым привлекательным веб-сайтом, предлагающая лучшие ресурсы и информацию.

3. Обновленные веб-технологии
   Точно так же старые системы корзины покупок также очень уязвимы для хакеров, если они не обслуживаются разработчиками.

4. Он не подходит для мобильных устройств
   Более 50% всего трафика веб-сайтов, поступающего на ваш веб-сайт, поступает со смартфонов или мобильных устройств. Если ваш бизнес-сайт не оптимизирован для мобильных устройств, это может стоить вам больших затрат.

5. Пора избавиться от беспорядка
   Редизайн веб-сайта дает возможность упростить формулировку, макет и навигацию.

6. Улучшенная структура сайта повышает SEO (поисковая оптимизация)
   В способ построения вашего веб-сайта внесено несколько изменений, которые могут существенно повлиять на ваше SEO.
   Редизайн веб-сайта может улучшить архитектуру сайта, имена страниц, имена изображений, метатеги и контент, чтобы он стал значительно более дружественным к SEO.

7. Созданы запросы по API, теперь вам будет видно карточки других пользователей!

8. Теперь ваши персональнеы [имя и ваша специальность] данные сохраняются на сервере.

9. Теперь вы не сможете случайно удалить свою карточку с сайта, нужно будет подтвердить удаление.

10. Лайки которые вы поставили на карточках других пользователей\собственных сохраняются и вы видите что вы лайкнули.

11. Отзывчивый интерфейс!
    Теперь вы понимаете когда происходит удаление карточки\сохранение и так же с профилем.

**Global Update v20.23**
Мы длительно разрабатывали данный проект и тщательно, трудились над проектом всей душой.
Подошел финальный этап обновления, мы полностью создали проект с нуля и сейчас он полноценно работает на наших серверах и полностью обменивается данными с нашим **API REST** благодарим каждого кто проверял и тестировал наш проект после каждого внесения изменений, проделана огромная работа и не простая.
Надеемся что наша история на этом не подойдет к концу и дальнейшее обновления продукта последует.
Спасибо всем!

_Что сделали по проекту?_

1. Приложение полностью перенесено на JavaScript-библиотеку **REACT** [что это?](https://academy.yandex.ru/journal/chto-takoe-react-i-kak-ego-osvoit) полностью функционирующее приложение на функциональных компонентах.
2. Сделана разработка собственного **REST API** [что это?](https://habr.com/ru/post/483202/)
3. Производилась оптимизация нашего кода, это лучше как для разработчиков, так и для обычных пользователей, так как сайт будет работать в **2х скорости** от обычной при таком обращений к структуре нашей системы.
4. Если что-то пойдет не так при каких либо действиях, таких как (поставить лайк, открыть профиль, сменить аватар и т.д) у нас всё зафиксируется в логах, простым языком у нас есть **журнал** куда наша система записывает ваши **любые ошибки**, что поможет нам быстрее разобраться в вашей ситуаций.
5. Теперь можно найти наш сайт быстрее по домену [`photograms.nomoredomainsclub.ru`](https://photograms.nomoredomainsclub.ru/) или просто **photograms**
6. Ваша сессия защищена протоколом _HTTPS_ ваши данные шифруются и их не смогут прочитать злоумышленники
7. И многое другое в разделе безопасности было выполнено работ.
