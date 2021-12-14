# Introduction

Nous allons découvrir styled-components un module spécifique React permettant de gérer les styles en JS. D'autre approche similaire comme Emotion peut être utiliser avec React et sans.

Les composants stylisés seront définie dans un composant avec une syntaxe qui ressemblera à :

```js
import React from "react";
import styled from "styled-components";

// définition d'un composant avec ses styles propres.
const Presentation = styled.h1`
    color : red;
    font-size : 1.2rem;
`;

const App = () => (
    <Presentation>Hello world</Presentation>
);

export default App;

```

Il existe de nombreuse approche pour la gestion des styles CSS avec React. Nous avons vu par exemple que l'on pouvait utiliser SASS et des fichiers de styles par composant en gérant également un fichier de style global avec un index.scss.

L'approche CSS-in-JS permet de gérer les CSS en JS. Il n'utilisera pas le build SASS ou CSS de React qui est gérer par webpack en interne. Les CSS un peu moins optimisé seront directement insérer dans la balise style de la page. Cependant ils seront propre à chaque composant et donc sont plus optimisés.

## Avantages

Les noms de classe sont autogéré, ils sont unique par composant. Il n'y donc pas de risque d'effet de bord pour la définition des styles entres composants. On peut donc facilement gérer les CSS directement dans l'inspecteur.

On a une syntaxe CSS classique pour définir les styles et une partie des fonctionnalités SASS est intégrée dans sa syntaxe. On peut également utiliser des pseudo-classes, pseudo-éléments et les media-queries.

On peut utiliser des thèmes avec un composant ThemProvider, cette approche est très pratique en utilisant le Context API de React. Il permet alors d'injecter un thème dans les props de tous ces enfants. Le thème peut alors être utiliser dans les règles CSS d'un composant.

On peut également utiliser des props pour styliser de manière conditionnelle.

```js

```

## Installation

Vous pouvez installer styled components avec yarn ou npm.

```bash
npm install styled-components --save
```

## Création de classes CSS

Vous pouvez créer des classes CSS pour ciblier un élément spécifique :

Un élément HTML :

```html
<div class="Presentation Presentation--outline Presentation--primary">
    <img class="Presentation__img" />
</div>
```

Et pour la partie CSS les règles SASS sont possibles :

```css

.Presentation {
    &--outline{

    }
    &--primary{

        &__img{

        }
    }
}
```

## Création de composant avec Styled components

Ci-dessous on définit un composant Presentation qui sera un titre de niveau 1 (h1).

```js
import React from "react";
import styled from "styled-components";

// définition d'un composant avec ses styles propres.
const Presentation = styled.h1`
    color : red;
    font-size : 1.2rem;
`;

const App = () => (
    <Presentation>Hello Styled components</Presentation>
);

export default App;

```

Styled components créera dans le DOM une classe spécifique, elle sera unique et propre au composant.

```html
<h1 class="sc-bdGXs ghtXs">Hello Styled components</h1>
```

## Style global

Vous pouvez créer des règles CSS globales à l'aide de la méthode createGlobalStyle de styled-components

```js
const GlobalStyle = createGlobalStyle`
    /*...*/
`;

const Container = styled.div``;

const App = () => (
  <Container>
    <GlobalStyle />
    <p>Hello React</p>
  </Container>
);

export default App;
```

## Exercice

Utilisation des class

Créez un bouton qui affiche un message et un autre qui le fait disparaître. Vous créerez un composant Button pour le style des boutons, Global pour le style général de la page et Presentation le style du message.

Dans le composant Button il faudra passer des props pour gérer la différence de couleur entre les 2 boutons.

App gèrera le rendu final mais également les fonctionnalités permettant de lancer le message au clic.


## Exercice

Utilisation des hooks
Le but étant de d'incrémenter le compteur dès lors qu'on clique dessus.

Sur la page nous aurons un titre suivi de l'icône React, un paragraphe de présentation, un bouton puis un autre paragraphe qui génère le compteur.

Il faudra donc:
- 1 composant pour styliser le titre
- 1 composant pour l'insertion de l'image 
- 1 composant pour styliser le bouton: on rajoutera un effet gradient au survol, un autre effet quand on clique sur le bouton. Effet de votre choix
- 1 composant pour gérer le compteur et afficher une phrase qui indique combien de fois l'utilisateur clique 
   Premier affichage: "Vous avez cliqué sur le bouton 0 fois."
   Premier clic: "Vous avez cliqué sur le bouton une première fois."
   Second clic: "Vous avez cliqué sur le bouton 2 fois."
- 1 composant pour styliser une div dans lequel sera regroupé tous ces éléments
- App gèrera le style général de l'appli et affichera le rendu final

## Exercice

Dans le code de l'exemple styled (CRA), faites en sorte que lorsque vous appuyez sur Yes ou No un message s'affiche en dessous dans un bloc stylisé. Mettez en place un rendu spécifique en fonction du choix Yes et respectivement No.

Ajoutez un bouton reset pour retirer le message sous le premier bloc. Gérez un troisième rendu pour ce bouton. Essayez de créez qu'un seul Button que vous styliserez en fonction du type de bouton.

Pensez à faire un dossier Styles où vous créez les composants stylisés que vous importerez dans l'application.

Ajoutez un composant Input que vous stylisez sous les boutons Yes, No et Reset. Il permet d'ajouter un nombre. 
Affichez la liste des nombres ajoutés sur une ligne au dessus du titre de l'application.

``text

            Hello world + logo react!

            [Cliquer ici]

            Vous avez cliqué ... fois
```
