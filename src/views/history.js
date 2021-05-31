import React, { Component } from "react";
import "../App.css";
import warhammer1 from "../images/warhammer1.jpg";
import warhammer2 from "../images/warhammer2.jpg";
import dwarf from "../images/dwarf.jpg";
export default class history extends Component {
  render() {
    return (
      <>
        <div className="context-container">
          <div className="context-box">
            <h2>Historia</h2>
            <img src={warhammer1} alt="warhammer" className="img-right" />
            <p>
              Według wczesnej mitologii Krasnoludów , Elfów i Jaszczuroludzi -
              miliony lat temu na ziemię przybyła rasa istot, znanych teraz jako
              Pradawni (Prastarzy). Były to dziwne stworzenia o niemal boskich
              mocach. Ukształtowały one klimat i teren tego świata. Uważano, że
              nie pochodzą z tego świata, lecz byli także jego twórcami. Nowo
              odkryty świat wydał im się dobry. Wiedzieli, że odegra główną rolę
              w historii wszechświata, postanowili więc pokierować jego drogą.
              Ogrzali go w promieniach słońca i wykuli kontynenty zgodnie z
              wzorami starożytnego proroctwa. Aby ułatwić sobie prace, stworzyli
              Portale Biegunowe na północnej i południowej granicy świata.
              Pozwoliły one na błyskawiczne podróżowanie przez rozległe
              przestrzenie dzielące ich skolonizowane światy.
            </p>
            <img src={warhammer2} alt="warhammer" className="img-left" />
            <p>
              Później pradawni mieli zapłacić za swoje aroganckie wtargnięcie.
              Stworzone przez nich Bramy Wypaczenia na biegunach świata, każda
              przyćmiewająca największe góry, zostały zniszczone, jako że duchy
              znajdujące się w krainie za zasłoną skręcały się i gotowały wraz
              ze zmieniającym się światem żywych. Bramy Wypaczenia zapadły się w
              przełomowej dla epoki eksplozji, dewastującej kontynenty i
              zalewającej świat, wraz z konstrukcjami pradawnych, ogromnymi,
              gotującymi się morzami Chaosu. Zatarła się przez to granica
              pomiędzy rzeczywistością, a światem niematerialnym i zaczęły się
              one na siebie nakładać. Hordy demonicznych kreatur natarły na
              świat i wymordowały Pradawnych, niszcząc doszczętnie ich
              prosperującą do tej pory cywilizację .
            </p>
            <img src={dwarf} alt="warhammer" className="img-right" />
            <p>
              Świat Warhammera mieści się na planecie, której powierzchnia jest
              pokryta kilkoma wielkimi kontynentami, z któych każdy posiada
              odrębną cywilizację i zróżnicowaną faunę. Wokół planety krążą dwa
              księżyce - biało-szary Mannslieb i zielonkawy Morrslieb, o który
              mówi się, że jest wielką grudą spaczenia, która znalazła się w
              atmosferze dawno temu, kiedy Bramy Wypaczenia upadły i zaczęły
              wylewać Chaos na ziemię. Aktualnie na planecie rządzi rasa ludzi,
              głównie z Imperium w Starym Świecie, utworzone przez Sigmara
              Młotodzierżce z niezliczonych walczących między sobą plemion
              terenu znanego jako Dorzecze Reiku, które urosło do prawie
              niedostępnego globalnego mocarstwa. Imperium jest najeżdżane ze
              wszystkich stron - z zimnej północy nadciąga groźny Chaos, ze
              wschodu hordy Zielonoskórych .Natomiast wewnętrzna niespójność
              kala chwałę imperium Sigmara i rozkłada je od środka.
            </p>
          </div>
        </div>
      </>
    );
  }
}
