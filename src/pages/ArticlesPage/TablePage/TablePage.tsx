import { Fragment } from "react";
import s from "./TablePage.module.scss";

const TablePage = () => {
  return (
    <Fragment>
      <h3>Что нужно знать о совместимости картриджей HP/Canon?</h3>
      <p>
        Уже много лет компании Canon и HP выпускают лазерные принтеры в тесном
        сотрудничестве друг с другом. Больше 50 % деталей для
        копировально-печатной техники HP создаются на заводах Canon, поэтому
        многие картриджи являются взаимозаменяемыми. Ниже представлена таблица
        совместимости картриджей лазерных принтеров HP и Canon. В ней указаны
        расходные материалы, которые могут заменять друг друга.
      </p>

      <h3 id="table">Таблица совместимости лазерных картриджей Canon и HP</h3>

      <div className={s.table}>
        <table>
          <tbody>
            <tr>
              <th colSpan={2}>HP</th>
              <th colSpan={2}>CANON</th>
            </tr>
            <tr>
              <th rowSpan={1}>Модели принтеров</th>

              <th colSpan={2} className={s.subjects}>
                Картриджи
              </th>
              <th rowSpan={1}>Модели принтеров</th>
            </tr>
            <tr>
              <td>M630, LJ Enterprise M604, M605, M606</td>
              <th>CF281A/CF281X</th>
              <th>039/039H</th>
              <td>i-SENSYS LBP351x, 352x</td>
            </tr>
            <tr>
              <td>
                Enterprise M506, M527, M501 CF287A/CF287X 041/041H LBP312, 522X,
                525X
              </td>
              <th>CF287A/CF287X</th>
              <th>041/041H</th>
              <td>LBP312, 522X, 525X</td>
            </tr>
            <tr>
              <td>M102a, M102w, M130a, M130fw, M130nw</td>
              <th>CF217A/CF218A</th>
              <th>047/047H</th>
              <td>LBP112, 113W, MF112, 113W</td>
            </tr>
            <tr>
              <td>M203dn, M203dw, M227fdw, M227fdn, M227sdn</td>
              <th>CF230A/CF230X</th>
              <th>051/052</th>
              <td>LBP162dw, MF264dw, 267dw, 269dw</td>
            </tr>
            <tr>
              <td>M507x, M528dn</td>
              <th>CF289A</th>
              <th>056</th>
              <td>MF542x, MF543x, LBP325x</td>
            </tr>
            <tr>
              <td>M507x, M528dn</td>
              <th>CF289Y</th>
              <th>T06</th>
              <td>X1643P, 1643IF</td>
            </tr>
            <tr>
              <td>M304a, M404n, M404dw, M404dn, M428fdn, M428dw</td>
              <th>CF259A/CF259X</th>
              <th>057/057H</th>
              <td>LBP223dw, 226dw, L228, MF443dw, 445dw, 446x, 449x</td>
            </tr>
            <tr>
              <td>LJ 4V, 4MV</td>
              <th>HP C3900A</th>
              <th>EP-B</th>
              <td>P380</td>
            </tr>
            <tr>
              <td>1100, 3200</td>
              <th>C4092A</th>
              <th>ЕР-22</th>
              <td>LBP-800, 810, 1120</td>
            </tr>
            <tr>
              <td>2100, 2200</td>
              <th>C4096A</th>
              <th>ЕР-32</th>
              <td>LBP-32, 470, 1000, 1310</td>
            </tr>
            <tr>
              <td>1000, 1200, 1220, 3300, 3330, 3380</td>
              <th>C7115A</th>
              <th>ЕР-25</th>
              <td>LBP-1210</td>
            </tr>
            <tr>
              <td>4000, 4050</td>
              <th>C4127A/ C4127X</th>
              <th>ЕР-51/ ЕР-52</th>
              <td>LBP-1760</td>
            </tr>
            <tr>
              <td>5000, 5100</td>
              <th>C4129X</th>
              <th>ЕР-72</th>
              <td>LBP-3260</td>
            </tr>
            <tr>
              <td>P2030, 2035, 2050, 2055</td>
              <th>CE505A/CE505X</th>
              <th>719/719H</th>
              <td>LBP 6650/6680/6300/6310, MF 5840/5880/5940/5980</td>
            </tr>
            <tr>
              <td>1160, 1320, 3390, 3392</td>
              <th>Q5949A/Q5949X</th>
              <th>708/708H</th>
              <td>LBP 3300/3360</td>
            </tr>
            <tr>
              <td>P2014, 2015, M2727</td>
              <th>Q7553A/Q7553X</th>
              <th>715/715H</th>
              <td>LBP 3310/3370</td>
            </tr>
            <tr>
              <td>P3010, 3015, Pro 500 M521, 525</td>
              <th>CE255A/CE255X</th>
              <th>724/724H</th>
              <td>LBP 6750</td>
            </tr>
            <tr>
              <td>P1102, M1132, M1212nf</td>
              <th>CE285A</th>
              <th>725</th>
              <td>LBP-6000, 6020, 6030, MF3010</td>
            </tr>
            <tr>
              <td>P1005, P1006</td>
              <th>CB435A</th>
              <th>712</th>
              <td>LBP-3010, 3020, 3100</td>
            </tr>
            <tr>
              <td>M1120, M1120n, M1522, M1522n, M1522nf, P1505, P1505n</td>
              <th>CB436A</th>
              <th>713</th>
              <td>LBP 6000, 6020, MF-3010</td>
            </tr>
            <tr>
              <td>M1530, , P1560, P1566, P1600, P1606</td>
              <th>CE278A</th>
              <th>728</th>
              <td>
                MF-4400, 4410, 4430, 4450, 4580, 4730, 4780, 4870, FAX-L170
              </td>
            </tr>
            <tr>
              <td>
                1010, 1015, 3010, 3015, 3020, 3030, 3050, 3055, M1005, M1319
              </td>
              <th>Q2612A</th>
              <th>703</th>
              <td>LBP-2900, 3000</td>
            </tr>
            <tr>
              <td>2410, 2420, 2430</td>
              <th>Q6511A/Q6511X</th>
              <th>710/710H</th>
              <td>LBP-3460</td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
      <div className={s.addition}>
        <b>Примечание!</b> <br /> Картридж Canon 728 можно использовать в
        принтерах HP, но расходник HP СЕ278А не получится установить вместо 728.
        В других случаях, возможно, потребуются незначительные доработки
        картриджа для взаимозаменяемости. Рекомендуем проконсультироваться с
        мастерами сервисного центра.
      </div>

      <h3 id="colorTable">
        Таблица совместимости лазерных картриджей Canon и HP (цветных)
      </h3>
      <div className={s.table}>
        <table>
          <tbody>
            <tr>
              <th colSpan={2}>HP</th>
              <th colSpan={2}>CANON</th>
            </tr>
            <tr>
              <th rowSpan={1}>Модели принтеров</th>

              <th colSpan={2} className={s.subjects}>
                Картриджи
              </th>
              <th rowSpan={1}>Модели принтеров</th>
            </tr>

            <tr>
              <td>M252, M274, M277</td>
              <th>CF400A (201A)/ CF400X (201X)</th>
              <th>045/045H</th>
              <td>LBP-611Cn, 613Cdw, MF631Cn, 633Cdw, 635Cx</td>
            </tr>
            <tr>
              <td>M377dw, M452dn, M452nw, M477fdn, M477fdw, M477fnw</td>
              <th>CF410A</th>
              <th>046</th>
              <td>LBP653Cdw, 654Cx, MF732Cdw, MF734Cdw, MF735Cx</td>
            </tr>
            <tr>
              <td>M254dw, MFP M281fdw</td>
              <th>CF500A (202A)/ CF540A (203A)</th>
              <th>054/054H</th>
              <td>LBP-620, 621, 623, 640, MF-640, 641, 642, 643, 644, 645</td>
            </tr>
            <tr>
              <td>M479dw, M479fdw, M479fnw, M454dn</td>
              <th>W2030A (415A)/ W2030X (415X)</th>
              <th>055/055H</th>
              <td>MF742Cdw, 744Cdw, 746Cx, LBP663Cdw, 664Cx</td>
            </tr>
            <tr>
              <td>2550, 2820, 2840</td>
              <th>Q3960A (122A)</th>
              <th>701</th>
              <td>MF8180C, LBP5200</td>
            </tr>
            <tr>
              <td>1600/2600/CM1015 MFP</td>
              <th>Q6000A (124A)</th>
              <th>707</th>
              <td>LBР-5000, 5100, 5300</td>
            </tr>
            <tr>
              <td>3600, 3800, CP3505</td>
              <th>Q6470A / Q7580A</th>
              <th>711</th>
              <td>MF9220Cdn, 9280Cdn</td>
            </tr>
            <tr>
              <td>CP1215, CM1312mfp, CP1515n, CP1518n</td>
              <th>CB540A (125A)</th>
              <th>718</th>
              <td>LBP-7200, 7680, MF8330, 8350, 8580CDW, 724Cdw</td>
            </tr>
            <tr>
              <td>CP3525dn, CP3525n, CM3530</td>
              <th>CE250 (504A)</th>
              <th>723</th>
              <td>LBP7750</td>
            </tr>
            <tr>
              <td>CP1025, CP1025nw, M100, M275, M175a, M175n</td>
              <th>CE310A</th>
              <th>729</th>
              <td>LBP-7010, 7018</td>
            </tr>
            <tr>
              <td>200, M251nw, M276nw</td>
              <th>CF210A / CF210X</th>
              <th>731/731H</th>
              <td>LBP-7100Cn, 7110Cw, MF8230Cn, 8280CW, 628Cw, 623CN</td>
            </tr>
            <tr>
              <td>500, M551n, m570dn</td>
              <th>CE400A (507A)</th>
              <th>732</th>
              <td>LBР-7080</td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </Fragment>
  );
};

export default TablePage;
