import React, { useState, useEffect } from 'react';
import pgPromise from 'pg-promise';
//import * as ReactDOMClient from 'react-dom/client';
import Header from './components/Header';
//import React, { useState } from 'react';
//window.Telegram.WebApp.


// Настройте соединение с базой данных PostgreSQL
const pgp = pgPromise();
const db = pgp({
  host: 'dpg-cka5715drqvc73bm0lkg-a.frankfurt-postgres.render.com',
  port: '5432',
  database: 'massapp',
  user: 'yarikshark',
  password: 'U73Seuw8755a7ccte4XBur6X0beTTyES',
});

const YourComponent = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Получите значение tg.initDataUnsafe.user.id
    const telegId = tg.initDataUnsafe.user.id;

    // Выполните запрос к базе данных
    db.any('SELECT * FROM orders WHERE teleg_id = $1', [telegId])
      .then((data) => {
        // Обновите состояние компонента с полученными данными
        setOrders(data);
      })
      .catch((error) => {
        console.error('Ошибка при выполнении запроса:', error);
      });
  }, []);

  //return (
  //  <div>
  //    <h1>Заказы пользователя {tg.initDataUnsafe.user.id}</h1>
  //    <ul>
  //      {orders.map((order) => (
  //        <li key={order.id}>{order.order_description}</li>
  //        // Здесь используйте соответствующие поля из вашей таблицы "orders"
  //      ))}
  //    </ul>
  //  </div>
  //);
};

export default YourComponent;

//class App extends React.Component {
  //helpText = WebAppUser.username
//  helpText = "Help text"
//  render() {
//    return (<div className="name">
//    <Header title="Шапка сайта" />
//  <h1>{this.helpText}</h1>
//  <input type="text" placeholder={'Дата'} />
//  <input type="text" placeholder={'Час'} />
//</div>)
//  }
//}

//export default App

const tg = window.Telegram.WebApp;

const DateTimePicker = () => {
  // Стейт для хранения выбранной даты, часов и минут
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState(9);
  const [selectedMinute, setSelectedMinute] = useState(0);

  // Генерация дат на месяц вперед, начиная с завтрашнего дня
  const generateDateOptions = () => {
    const options = [];
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + 1);
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 1);

    while (startDate <= endDate) {
      options.push(
        <option key={startDate.toISOString()} value={startDate.toISOString()}>
          {startDate.toDateString()}
        </option>
      );
      startDate.setDate(startDate.getDate() + 1);
    }

    return options;
  };

  // Генерация часов (9-21)
  const generateHourOptions = () => {
    const options = [];
    for (let i = 9; i <= 21; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  // Генерация минут (00-59)
  const generateMinuteOptions = () => {
    const options = [];
    for (let i = 0; i <= 59; i += 5) {
      options.push(
        <option key={i} value={i}>
          {i < 10 ? `0${i}` : i}
        </option>
      );
    }
    return options;
  };

  // Обработчики изменения выбора
  const handleDateChange = (e) => {
    setSelectedDate(new Date(e.target.value));
  };

  const handleHourChange = (e) => {
    setSelectedHour(parseInt(e.target.value, 10));
  };

  const handleMinuteChange = (e) => {
    setSelectedMinute(parseInt(e.target.value, 10));
  };

  const onClose = () => {
    tg.close()
     }

  //const getKeys = () => {
  //  tg.CloudStorage.getKeys()
  //}

  return (
    <div>

      Вітаю, {tg.initDataUnsafe.user.first_name} <br /><br />
      {tg.initDataUnsafe.user.id} <br /><br />

      <ul>
        {orders.map((order) => (
          <li key={order.id}>{order.order_description}</li>
          // Здесь используйте соответствующие поля из вашей таблицы "orders"
        ))}
      </ul><br /><br />

      <label htmlFor="date">Оберіть дату:</label>
      <select id="date" onChange={handleDateChange}>
        {generateDateOptions()}
      </select><br /><br />

      <label htmlFor="hour">Оберіть час:</label>
      <select id="hour" onChange={handleHourChange}>
        {generateHourOptions()}
      </select><br /><br />

      <label htmlFor="minute">Оберіть хвилини:</label>
      <select id="minute" onChange={handleMinuteChange}>
        {generateMinuteOptions()}
      </select><br /><br />

      <button onClick ={onClose}>Закрыть</button>
    </div>
  );
};

export default DateTimePicker;