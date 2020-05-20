import { DAO } from "./dao.js";

export class Model {
//Ludwig Korn
    constructor() {
        this.dao = new DAO();
        this.liste = this.dao.read();
        
    }

    // CREATE
    addFilm(film) {
        this.liste.push(film);
        this.dao.write(this.liste);
    }

    // READ
    getAll() {
        return this.liste;
    }

    getBest() {
        let bestAll = this.liste.slice(); // Copy
        bestAll.sort(function (a, b) {
            return b.bew - a.score;
        });
        const best3 = bestAll.slice(0, 3);
        return best3;
    }

    getNewest() {
        let last3 = this.liste.slice(); // Copy
        last3.reverse();
        return last3.slice(0, 3);
    }

    getAnzahlBergfilm() {
        return this._getAnzahlKategorie('Bergfilm');
    }

    getAnzahlRoadmovie() {
        return this._getAnzahlKategorie('Roadmovie');
    }

    getAnzahlWestern(){
        return this._getAnzahlKategorie("Western");
    }

    getAnzahlGesamt() {
        return this.liste.length;
    }

    // PRIVATE
    _getAnzahlKategorie(kategorie) {
        let anzahl = 0;
        for (let index = 0; index < this.liste.length; index++) {
            const element = this.liste[index];
            if (element.kategorie === kategorie) {
                anzahl++;
            }
        }
        return anzahl;
    }
}
