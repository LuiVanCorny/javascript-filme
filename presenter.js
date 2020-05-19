import { Model } from "./model.js";
import { View } from "./view.js";

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
        const bewertung = parseInt(this.view.getBewertung());

        let kategorie;
        if (this.view.isSelectedBergfilm()) {
            kategorie = 'Bergfilm';
        } else {
            kategorie = 'Roadmovie';
        }

        // Objekt zusammenbauen
        const film = {
            titel: titel,
            bewertung: bewertung,
            kategorie: kategorie
        };

        // Objekt speichern
        this.model.addFilm(film);

        // Neue Daten anzeigen
        this._allesAnzeigen();
    }

    // PRIVATE
    _allesAnzeigen() {
        // Statistik
        this.view.displayAnzahlBergfilm(this.model.getAnzahlBergfilm());
        this.view.displayAnzahlRoadmovie(this.model.getAnzahlRoadmovie());
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
            const text =
                film.titel + ': ' + film.bewertung + ' Sterne, ' + film.kategorie;
            stringArray.push(text);
        }
        return stringArray;
    }
}