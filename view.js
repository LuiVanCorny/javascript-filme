export class View {
    constructor(presenter) {
        // CONTROLS
        this.inputTitel = document.getElementById('inputTitel');
        this.inputRegie = document.getElementById('inputRegie');

        this.sliderBewertung = document.getElementById('sliderBewertung');

        this.radioBergfilm = document.getElementById('radioBergfilm');
        this.radioRoadmovie = document.getElementById('radioRoadmovie');

        this.buttonNeu = document.getElementById('buttonNeu');

        this.tdBergfilm = document.getElementById('tdBergfilm');
        this.tdRoadmovie = document.getElementById('tdRoadmovie');
        this.tdGesamt = document.getElementById('tdGesamt');

        this.ulNeueste = document.getElementById('ulNeueste');
        this.ulAlle = document.getElementById('ulAlle');

        // EVENTS
        this.buttonNeu.addEventListener('click', function () {
            presenter.buttonNeuClick();
        });
    }

    // GETTER
    getTitel() {
        return this.inputTitel.value;
    }

    getRegie(){
        return this.inputRegie.value;
    }

    getBewertung() {
        return this.sliderBewertung.value;
    }
    isSelectedBergfilm() {
        return this.radioBergfilm.checked;
    }
    isSelectedRoadmovie() {
        return this.radioRoadmovie.checked;
    }

    // SETTER
    displayAnzahlBergfilm(zahl) {
        this.tdBergfilm.innerHTML = zahl;
    }
    displayAnzahlRoadmovie(zahl) {
        this.tdRoadmovie.innerHTML = zahl;
    }
    displayAnzahlGesamt(zahl) {
        this.tdGesamt.innerHTML = zahl;
    }
    displayLast(stringArray) {
        this._displayList(this.ulNeueste, stringArray);
    }
    displayAll(stringArray) {
        this._displayList(this.ulAlle, stringArray);
    }

    // PRIVATE
    _displayList(ul, stringArray) {
        ul.innerHTML = '';
        stringArray.forEach(element => {
            const liNode = document.createElement('li');
            ul.appendChild(liNode);
            const textNode = document.createTextNode(element);
            liNode.appendChild(textNode);
        });
    }
}