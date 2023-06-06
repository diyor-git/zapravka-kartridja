import React from "react";
import s from "./ContactPage.module.scss";
const ContactPage = () => {
  return (
    <div className={s.root}>
      <h1>КОНТАКТЫ</h1>
      <div className={s.info}>
        <div className={s.phone}>
          <h4>Сервис центр Eco Print</h4>
          <h4>Телефон:</h4>
          <p>+99895 143 65 58</p>
          <p>+99890 910 84 24</p>
          <p>+99897 777 65 58</p>
        </div>
        <div className={s.workTime}>
          <h4>Время работы:</h4>
          <p>Пн-Пт: 9:00 - 18:00</p>
          <p>Сб: 10:00 до 14:00</p>
          <p>Вс: выходной</p>
          <div className={s.email}>
            <h4>Электронная почта</h4>
            <a href="mailto:info@ecoprint.uz">info@ecoprint.uz</a>
          </div>
        </div>
        <div className={s.socialNetworks}>
          <h4>Мы в социальных сетях:</h4>
          <div>
            <a href="https://www.instagram.com/ecoprint.uz" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://t.me/ecoprintservis" target="_blank">
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a href="https://www.facebook.com/ecoprint.uz/" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
      <div className={s.adress}>
        <h4>Адрес Сервис центр Eco Print:</h4>
        <p>
          г. Ташкент ул. Мирзо Улугбек Ориентир метро Буюк ипак йули (бывш.
          максим горький) Автобусы: 63, 96, 101, 110, 119, 129, 137, 151
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d646.5431867355195!2d69.30075145122397!3d41.31935396955829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x960da9b30b17953!2z0JfQsNC_0YDQsNCy0LrQsCDQutCw0YDRgtGA0LjQtNC20LXQuSDQsiDQotCw0YjQutC10L3RgtC1INGBINCy0YvQtdC30LTQvtC8INGA0LXRhtC40LrQu9C40L3QsyDQutCw0YDRgtGA0LjQtNC20LA!5e0!3m2!1sru!2s!4v1659953515586!5m2!1sru!2s"
          width="100%"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
