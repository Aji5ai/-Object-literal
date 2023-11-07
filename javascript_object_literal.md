# JavaScript - Objet littéral

Découvre les prémices de la programmation orientée objet avec les objets littéraux en JavaScript

## Ressources

- [MDN - Initialisateur d'objet](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- [MDN - L'opérateur this](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/this)

## Contexte du projet

Qu'est-e qu'un objet en langage de programmation ? Un objet est un concept, réel ou abstrait, qui possède des états (des propriétés) et des comportements (des méthodes).

C'est une autre façon de penser la programmation, on parle de **paradigme**.

Imagine une voiture :

- elle aura des états : elle est démarrée, qu'elle est sa vitesse, qu'elle est sa marque et son modèle ?
- elle aura des comportement : accélérer, ralentir, tourner à droite, tourner à gauche

Tout cela pourra être représenté par la programmation orientée objet.

Si tu en as déjà entendu parler, tu sais peut-être que l'on parle de **classe** : il s'agit du moule qui permet de créer des **instances** (des objets). Dans notre exemple, une classe serait l'usine de fabrication de voiture : en fonction de la marque et du modèle, on obtiendrait une voiture différente.

### Créer un objet littéral

JavaScript est un langage de programmation orienté objet : en effet, il a été conçu à la base pour pouvoir créer des objets et interagir avec.

Et **JavaScript** a un avantage : il est possible de créer l'**instance** d'un objet sans passer par des classes ! On parle alors d'objet littéral, et c'est que tu vas découvrir dans ce brief !

Voyons tout d'abord à quoi ça ressemble :

```js
const car = {
  brand: "Honda",
  model: "Civic",
  maxSpeed: 170,
  currentSpeed: 0,
  directionDegree: 0,
  owners: ["Michel Durand", "Gertrude Durand"],
  speedUp: function() {
    this.currentSpeed = Math.min(this.currentSpeed + 1, this.maxSpeed)
  },
  speedDown: function() {
    this.currentSpeed = Math.max(this.currentSpeed - 1, 0)
  },
  setDirection: function(angle) {
    this.directionDegree += angle;

    // ajuster l'angle pour qu'il reste dans la plage de 0 à 359 degrés
    this.directionDegree = (this.directionDegree % 360 + 360) % 360;

    return this.directionDegree;
  },
}
```

Un objet est un ensemble de **clé** (les propriétés, *brand* ou *speedUp* par exemple) et de **valeurs**. Tous les types existants en JavaScript peuvent être attribués aux valeurs d'un objet (ex: number, string, boolean, function, object, null, undefined...).

Si la valeur d'une **propriété** est une fonction, on parle alors d'une **méthode** : c'est le comportement d'un objet.

Tu as dû remarquer l'utilisation du `this` dans les **méthodes** : c'est comme cela qu'on appelle l'**instance** en cours : si tu appelles `this.currentSpeed` dans une méthode, cela va appeler la valeur de la **propriété** `currentSpeed` sur l'instance.

Tu trouveras plus d'infos ici : [MDN - L'opérateur this](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/this).

Si tu veux aller plus loin dans les notions sur les objets littéraux, tu peux te référer à cette ressource : [MDN - Initialisateur d'objet](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer).

### Interagir avec un objet

Imaginons que l'on veuille utiliser l'objet précédent, pour afficher les valeurs des **propriétés** et les modifier, ainsi qu'utiliser ses **méthodes**.

```js
console.log(car.brand); // Honda
console.log(car.model); // Civic

for (let person of car.owners) {
  console.log(person);
}
// Michel Durand
// Gertrude Durand

console.log(car.maxSpeed); // 170
car.maxSpeed = 180;
console.log(car.maxSpeed); // 180

console.log(car.currentSpeed); // 0
for (let i = 0; i < 100; i++) {
  car.speedUp();
}
console.log(car.currentSpeed); // 100

console.log(car.setDirection(25)); // 25
console.log(car.setDirection(-40)); // 345
```

## Modalités pédagogiques

Créé un objet `movie` avec les propriétés suivante (à faire en anglais) :

- titre du film
- année de réalisation
- réalisateur (il ne peut y en avoir qu'un)
- acteurs principaux (il peut y avoir plusieurs acteurs, limite-toi à deux ou trois)
- est un film favoris (vrai ou faux)
- la note du film (nombre à virgule)

Prends comme exemple ton film préféré !

Ensuite, ajoute une propriété `duration` initialisée avec la valeur 0.

Tu vas ainsi pouvoir ajouter une méthode `setDuration` qui prend deux paramètres : le nombre d'heures et le nombre de minutes.

La méthode va convertir la durée, à partir des paramètres, en minutes uiquement, puis sauvegarder la durée dans la propriété `duration`.

Par exemple :

```js
inception.setDuration(2, 28); // 2 heures et 28 minutes
console.log(inception.duration); // 148
```
Ajoute des commentaires afin d'expliquer ton code.

Versionne ton code et partage un lien vers un dépôt GitLab en solution.

## Modalités d'évaluation

- Un dépôt GitLab contient le code du projet
- Un objet movie contient les propriétés demandées
- L'objet contient une méthode setDuration fonctionnelle
- Des commentaires expliquent le code

## Livrables

Un lien vers GitLab

## Critères de performance

- Le code source est documenté
- Utiliser les normes de codage du langage
- La documentation technique de l’environnement de travail est comprise
- Utiliser un outil de gestion de versions