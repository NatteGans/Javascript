var mijnauto = {
    merk: "Ford",
    type: "Mondeo",
    aantalWielen: 4,
    kleur: "blauw",
    snelheid: 0,
    toeter: function() {
        console.log("Toet!");
    },
    gasgeven: function() {
        this.snelheid += 10;
        console.log(this.snelheid);
    }
};

console.log(mijnauto.kleur);