/* ----------------------------------------------
    Exercices JavaScript : animer avec
    la bibliothèque GSAP
   ----------------------------------------------
    Installer GSAP
   ---------------------------------------------- */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/* -----------------------
    Exercice 1
   -----------------------
    Déplacer l'item 1 de 100px vers la gauche
    durant 3 secondes
   ----------------------- */

const itemA = document.querySelector("#js-exercise-1");

gsap.to(itemA, {
  x: 100,
  duration: 3,
});

/* -----------------------
    Exercice 2
   -----------------------
    Effectuer une rotation de l'item 2 de 45 degrés
    durant 2 secondes
    après un délai de 2 secondes
   ----------------------- */

const itemB = document.querySelector("#js-exercise-2");

gsap.to(itemB, {
  rotate: 45,
  duration: 2,
  delay: 2,
});

/* -----------------------
    Exercice 3
   -----------------------
    Changer l'item 3 d'échelle (75%)
    et d'opacité (0.5)
    durant 2 secondes
    après un délai de 1 secondes
   ----------------------- */

const itemC = document.querySelector("#js-exercise-3");

gsap.to(itemC, {
  scale: 0.75,
  opacity: 0.5,
  duration: 2,
  delay: 1,
});

/* -----------------------
    Exercice 4
   -----------------------
    Rétablir l'item 4 DEPUIS une échelle de 75%
    et d'opacité (0.5)
    durant 2 secondes
    après un délai de 1 secondes
   ----------------------- */

const itemD = document.querySelector("#js-exercise-4");

gsap.fromTo(
  itemD,
  {
    scale: 0.75,
    opacity: 0.5,
  },
  {
    scale: 1,
    opacity: 1,
    duration: 2,
    delay: 1,
  }
);

/* -----------------------
    Exercice 5 (timeline)
   -----------------------
    Déplacer l'item 5 de -100px vers la gauche
    durant 3 secondes
    PUIS effectuer une rotation de l'item 5 de 45 degrés
    durant 2 secondes après un délai de 1 seconde
    PUIS déplacer l'item 5 de 100px vers le haut
    durant 2 secondes après un délai de 1 seconde
   ----------------------- */

const itemE = document.querySelector("#js-exercise-5");

const animationE = gsap.timeline();

animationE.to(itemE, { x: -100, duration: 3 });
animationE.to(itemE, { rotate: 45, duration: 2, delay: 1 });
animationE.to(itemE, { y: 100, duration: 2, delay: 1 });

/* -----------------------
    Exercice 6 (timeline)
   -----------------------
    Déplacer l'item 6 de 100px vers le bas
    durant 3 secondes
    ET SIMULTANEMENT changer l'item 6 d'échelle (75%)
    durant 5 secondes
   ----------------------- */

const itemF = document.querySelector("#js-exercise-6");

const animationF = gsap.timeline();

animationF.to(itemF, { y: -100, duration: 3 });
animationF.to(itemF, { scale: 0.75, duration: 5 });

/* -----------------------
    Exercice 7 (repeat + yoyo)
   -----------------------
    Effectuer une rotation de l'item 7 de 135 degrés
    durant 2 secondes
    avec un easing elastic.out
    et répéter ce mouvement à l'infini
   ----------------------- */

/* -----------------------
    Exercice 8
   -----------------------
    Réaliser une animation libre
    lorsque le bouton est cliqué
   ----------------------- */
