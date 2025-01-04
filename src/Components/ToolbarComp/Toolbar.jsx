import React from 'react';
import "./style.css";


export  function Toolbar({filters, selected, onSelectFilter}) {
   console.log(selected);
   return (
      <div className="butns">
      {filters.map((item) => { return <button className={selected === item ? "active" : " "} onClick={onSelectFilter}>{item}</button>}
   )}
       </div>
  )
}




















//ормирование разметки идёт внутри метода map. ilters - это же массив имён кнопок
//если имя текущей обрабатываемой кнопки совпадает с нажатой, то добавить ей класс. 
//массив имён кнопок; нажатая кнопка (её имя) и ф-ия слушатель клика