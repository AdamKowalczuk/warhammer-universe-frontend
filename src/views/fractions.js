import React, { Component } from "react";
import "../App.css";
import tyranid from "../images/tyranid.jpg";
import necron from "../images/necron.jpg";
import orc from "../images/orc.jpg";
import eldar from "../images/eldar.jpg";
import darkEldar from "../images/dark-eldar.jpg";
import tau from "../images/tau.jpg";
import chaos from "../images/chaos.jpg";
export default class fractions extends Component {
  render() {
    return (
      <>
        <div className="context-container">
          <div className="context-box">
            <h2 style={{ marginBottom: "30px" }}>Frakcje</h2>
            <div className="description">
              <h3 className="left-text">Tyranidzi</h3>
              <br />
              <img src={tyranid} alt="warhammer" className="img-left" />
              <p>
                Po raz pierwszy w historii Drogi Mlecznej pojawiają się siły z
                innych galaktyk. To Tyranidzi, niby zwiastun końca. Wszystko
                żrą, ogałacają całe planety i rozmnażają się i tak w kółko. Jak
                rurkowce. Nie stosują technologii, są mistrzami ewolucji i
                adaptacji genów. Ich ilość jest nieporównywalna do wszystkich
                ras razem wziętych i pomnożonych przez niewiadomo ile.
                Jakościowo jednostki mają lepsze niż większość innych frakcji,
                ale o bardzo małym potencjale destrukcyjnym, niby pożerają dużo
                planet ale w najważniejszych konfliktach zawsze dostają baty i
                przeciw nim nawet wrogowie łączą siły.
              </p>
            </div>
            <div className="description">
              <h3 className="right-text">Nekroni</h3>
              <br />
              <br />
              <img src={necron} alt="warhammer" className="img-right" />
              <p>
                Oprócz tego nieco wcześniej budzą się do życia starożytne
                maszyny, które 60 milionów lat temu rządziły Galaktyką, powstają
                by odzyskać władze a nawet coś więcej - duszę i ciała. To
                Nekroni, przeciwnik o niezwykle zaawansowanej technologii i
                często jest po prostu przepotężny wobec innych wojsk galaktyki.
                Dawno dawno temu byli normalnymi istotami, ale zaprzedali dusze
                dla nieśmiertelności, stając się maszynami - proces, który część
                z nich próbuje odwrócić. Teoretycznie ich władcą jest Milczący
                Król, który powrócił do Galaktyki po tułaczce by znów postawić
                swoją rasę na mechaniczne nogi.
              </p>
            </div>
            <div className="description">
              <h3 className="left-text">Orkowie</h3>
              <br />
              <img src={orc} alt="warhammer" className="img-left" />
              <p>
                Bardzo silni i trudni w eksterminacji obcy. Złomiarze. Ich
                technologia działa bo... bo oni chcą żeby tak było, to tzw.
                orkowość / orkowa energia. Oprócz tego wojna to dla nich tylko i
                wyłącznie rozrywka i sport, rozmnażają się jak grzyby po
                deszczu, dosłownie - to grzyby. Istnieją też odmiany Orków nie
                znające technologii. Latają od planet do planet i robią WAAAAGH!
                lub po polsku: ŁAAAA! Są bardzo mocno podzieleni, nie stanowią
                jednolitej grupy i bardzo często walczą sami ze sobą tylko i
                wyłącznie dla własnej uciechy, obecnie największe WAAAAGH!
                przeprowadza Ghazghkull Mag Uruk Thraka.
              </p>
            </div>
            <div className="description">
              <h3 className="right-text">Eldarzy</h3>
              <br />
              <br />
              <img src={eldar} alt="warhammer" className="img-right" />
              <p>
                Ci którzy na statkach wielkości małych planet uciekli przed
                upadkiem swojej rasy. W ich skład obok zwykłych, zamieszkujących
                owe światostatki wchodzą też Wygnańcy, którzy jeszcze przed
                upadkiem Eldarów woleli odłączyć się od reszty swych braci.
                Enigmatyczni Arlekini, zamieszkujący Pajęczy Trakt (inny
                wymiar), działają dla Roześmianego Boga (bóg Eldarów, jeden z
                niewielu który przeżył narodziny Slaanesha). Są też Wyrzutki,
                którzy opuścili światostatek i tułają się bez celu po Galaktyce,
                są Uciekinierzy, którzy, cóż uciekli i od dawna żyją sobie na
                dziewiczych światach. Ogólnie Eldarzy to rasa psioników, którzy
                mocami Osnowy mogą wpływać na rzeczywistość. Coś jak magia, ale
                to nie magia. Bardzo enigmatyczna rasa, która stara się
                ingerować w ważne wydarzenia w galaktyce, nierzadko
                ratując/zabijając wiele istnień przed Chaosem etc.
              </p>
            </div>
            <div className="description">
              <h3 className="left-text">Mroczni Eldarzy</h3>
              <br />
              <img src={darkEldar} alt="warhammer" className="img-left" />
              <p>
                Bracia wyżej wymienionych Eldarów, którzy również przetrwali,
                jednak są hedonistycznymi i zdeprawowanymi emo. To głównie
                piraci latający sobie od planetki do planetki zbierając
                niewolników i ciekawych Xenos do uprawiania bardzo niefajnych
                rzeczy ( ͡° ͜ʖ ͡°). Uwielbiają politykę, czyli wbijanie sobie
                sztyletów w plecy. Nie mają psioników, ich zbroje to ich skóra i
                kości, bowiem polegają na zwinności i mobilności, nawet bardziej
                niż ich kuzyni. Mroczni Eldarzy mimo iż mroczni nie wyznają
                Bogów Chaosu, jeśli już to wszelkie ich działania podyktowane są
                strachem przed Slaanesh.
              </p>
            </div>
            <div className="description">
              <h3 className="right-text">Dominium Tau</h3>
              <br />
              <br />
              <img src={tau} alt="warhammer" className="img-right" />
              <p>
                Prócz tego mamy jeszcze młode i prężnie rozwijające się, a także
                jako jedyne asymilujące, a nie eksterminujące inne gatunki
                Dominium Tau. To rasa walcząca dla Większego Dobra, właściwie
                najbardziej dobra ze wszystkich ras. Ich technologia skupia się
                na maskowaniach, mobilności i sile ognia - coś jak dzisiejsze
                wojsko. Wykorzystują pancerze bitewne - humanoidalne maszyny
                sterowane przez pilotów. Nie potrafią walczyć wręcz. Osobną
                frakcją są stworzone przez renegata z Dominium Tau tzw. Enklawy
                Farsighta, od nazwy buntownika. Należy pamiętać że Dominium i
                Enklawy są bardzo malutkie i nie mają aż takiego wpływu na
                sytuacje w Galaktyce ale szybko ekspandują
              </p>
            </div>
            <br />
            <div className="description">
              <h3 className="left-text">Chaos</h3>
              <br />
              <img src={chaos} alt="warhammer" className="img-left" />
              <p>
                W jego skład wchodzą jego wyznawcy, w postaci ludzi
                (najczęściej) czy innych obcych (np. bardzo rzadko Orkowie, czy
                niektórzy Eldarzy) oraz masa demonów i sił jeszcze z czasów
                Herezji Horusa. Są bardzo podzieleni a największym dowódcą sił
                jest Abaddon Profanator, zaś prawdziwi władcy tej frakcji -
                Mroczni Bogowie przebywają w innym wymiarze, Osnowie, gdzie są
                wyłącznie emocje, uczucia i dusze, nie ma praw fizyki a koncept
                czasu wziął i wyszedł. Występuje tam niezliczona ilość demonów,
                wszystko tam jest wypaczone, czas nie istnieje itd. To dzięki
                Osnowie wszystkie rasy (poza Nekronami, bo używają innej
                technologii) mogą latać szybciej niż światło. Istnieje 4 bogów,
                docelowo 5. Tzeentch odpowiada za "magię" (psionizm) i knowania.
                Nurgle za choroby i śmierć. Khorne za przelewanie krwi. Slaanesh
                za hedonizm, przyjemności, czy seksualne żądze. I Malice
                (prawdopodobnie nie istnieje/jest niekanoniczny), wygnany przez
                resztę bogów bóg szaleństwa, bardzo słaby, nikt go nie lubi i w
                dodatku prawie nie ma armii (1 zakon, Synowie Malice i dlatego
                jest plotka jakoby istniał - głównie dzieło fanów znających
                Warhammera Fantasy, aczkolwiek nie został też zanegowany.)
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
