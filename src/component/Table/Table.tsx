import React from "react";
import s from "./Table.module.scss";
const Table = ({ product, state }: any) => {
  return (
    <div id="morecharacters" className={s.table}>
      <table>
        <tbody>
          <tr>
            <td data-header="Name">Код</td>
            <td data-header="Email">{product?.code}</td>
          </tr>
          {!state && (
            <>
              <tr>
                <td data-header="Name">Бренд</td>
                <td data-header="Email">{product?.brand}</td>
              </tr>
              <tr>
                <td data-header="Name">Тип</td>
                <td data-header="Email">{product?.type}</td>
              </tr>
            </>
          )}
          <tr>
            <td data-header="Name">Ресурс черного картриджа, стр.</td>
            <td data-header="Department">{product.resource}</td>
          </tr>
          {state && (
            <>
              <tr>
                <td data-header="Name">Требуется замена чипа</td>
                <td data-header="Department">
                  {product.chipReplace ? "Да" : "Нет"}
                </td>
              </tr>
              <tr>
                <td data-header="Name">Нужна прошивка при первой заправке</td>
                <td data-header="Department">
                  {product.needFirware ? "Да" : "Нет"}
                </td>
              </tr>
            </>
          )}
          <tr>
            <td data-header="Name">Наименование картриджей</td>
            <td data-header="Department">{product.cartridgeName}</td>
          </tr>
          <tr>
            <td data-header="Name">Модель принтера</td>
            <td data-header="Department">
              {!state ? product.properModel : product.model}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
