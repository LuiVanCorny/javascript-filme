import { Model } from "./model.js";
import { View } from "./view.js";
//Ludwig Korn
export class Presenter {
    constructor() {
        this.model = new Model();
        this.view = new View(this);
        this._allesAnzeigen();
    }

    // EVENTS
    buttonNeuClick() {
        // Daten von View holen
        const titel = this.view.getTitel();
        const regie = this.view.getRegie();
        const bewertung = parseInt(this.view.getBewertung());

        let kategorie;
        if (this.view.isSelectedBergfilm()) {
            kategorie = 'Bergfilm';
        } else if(this.view.isSelectedRoadmovie()) {
            kategorie = 'Roadmovie';
        } else{
            kategorie = 'Western';
        }

        // Objekt zusammenbauen
        const film = {
            titel: titel,
            regie: regie,
            bewertung: bewertung,
            kategorie: kategorie
        };

        // Objekt speichern
        this.model.addFilm(film);

        // Neue Daten anzeigen
        this._allesAnzeigen();
    }

    sliderBewertungChange(){
        let bewertung = this.view.getBewertung();
        let sterneString = "";
        for(let i = 0; i < bewertung; i++){
            sterneString += "*"
        }
        this.view.displaySterneBewertung(sterneString);
    }

    // PRIVATE
    _allesAnzeigen() {
        // Statistik
        this.view.displayAnzahlBergfilm(this.model.getAnzahlBergfilm());
        this.view.displayAnzahlRoadmovie(this.model.getAnzahlRoadmovie());
        this.view.displayAnzahlWestern(this.model.getAnzahlWestern());
        this.view.displayAnzahlGesamt(this.model.getAnzahlGesamt());

        // Die neuesten Filme
        const filmListNeueste = this.model.getNewest();
        let stringListNeueste = this._filmArrayToStringArray(filmListNeueste);
        this.view.displayLast(stringListNeueste);

        // Alle Filme
        const filmListAlle = this.model.getAll();
        let stringListAlle = this._filmArrayToStringArray(filmListAlle);
        this.view.displayAll(stringListAlle);
    }

    _filmArrayToStringArray(filmList) {
        let stringArray = [];
        for (let i = 0; i < filmList.length; i++) {
            const film = filmList[i];
            const text =`${film.titel}: ${film.bewertung} Sterne, ${film.kategorie}, ${film.regie}`;
            stringArray.push(text);
        }
        return stringArray;
    }
}