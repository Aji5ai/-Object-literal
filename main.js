// Création d'un objet litéral
const movie = {
    title : "Pleasantville",
    year : "1998",
    filmmaker : "Gary Ross",
    actors : ["Tobey Maguire", "Reese Witherspoon", "Jeff Daniels"], //Tableau des noms d'acteurs
    isAFavourite : true,
    rating : 16.4,
    duration : 0,
    setDuration : function(hours, minutes) { // Fonction qui change la durée du film en minutes selon les heures et minutes données en arguments
        this.duration = hours*60 + minutes
    }
}

console.log(movie.duration); // retourne 0
movie.setDuration(2,4); //On change la durée pour 2 heures et 4 minutes
console.log(movie.duration); // retourne 124 minutes

// Version avec un constructeur, permet de créer plusieurs instances facilement
function Movies(title, year, filmmaker, actors, isAFavourite, rating, duration) {
    this.title = title, // Les this sont remplacés ensuite par le nom de l'instance en cours
    this.year = year,
    this.filmmaker = filmmaker,
    this.actors = actors,
    this.isAFavourite = isAFavourite,
    this.rating = rating,
    this.duration = duration,
    this.setDuration = function(hours, minutes) { // Fonction qui change la durée du film en minutes selon les heures et minutes données en arguments
        this.duration = hours*60 + minutes
    }
}

const film1 = new Movies("Pleasantville", "1998", "Gary Ross", ["Tobey Maguire", "Reese Witherspoon", "Jeff Daniels"], true, 16.4, 0); // On donne les arguments
console.log(film1); // Donne bien l'objet créé
console.log(film1.duration); // Affiche 0
film1.setDuration(2,4); // Changement de durée à 2h04
console.log(film1.duration); // Affiche 124 minutes


// Constructeur alternatif avec paramètres précisés lors de la création de l'instance
function Movies2(parametres) {
    this.title = parametres.title,
    this.year = parametres.year,
    this.filmmaker = parametres.filmmaker
}

const film2 = new Movies2({title: "Pleasantville", year: "1998", filmmaker: "Gary Ross"}); // Risque d'erreurs en tapant les noms des paramètres
console.log(film2);
