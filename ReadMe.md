# Print it - **Carrousel Dynamique**

Bienvenue sur le projet **Print it** !  
Ce projet a été réalisé dans le cadre d'un exercice de développement front-end pour dynamiser le site statique d'une imprimerie familiale.

---

## 📋 OBJECTIF

Créer un carrousel dynamique pour la bannière du site **Print it**, avec :

- Navigation à l'aide de flèches (`arrow_left`, `arrow_right`)
- Affichage et mise à jour automatique des bullet points
- Gestion du passage d'une image à l'autre
- Boucle infinie entre les slides
- Passage automatique à la slide suivante toutes les 3 secondes

---

## 🚀 FONCTIONNALITÉS

### Navigation par flèches

- **Flèche gauche** : aller à la slide précédente
- **Flèche droite** : aller à la slide suivante

### Navigation par bullet points

- Cliquer sur un bullet point permet d’afficher directement la slide correspondante.

### Affichage automatique

- Le carrousel passe automatiquement à la slide suivante toutes les 3 secondes.

### Boucle infinie

- À la dernière slide, un clic vers la droite ramène à la première.
- À la première slide, un clic vers la gauche va à la dernière.

---

## 🛠️ TECHNOLOGIES UTILISÉES

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**

---

## 📂 STRUCTURE DU PROJET

/print-it-JS/
|--- /assets/
| |--- script.js
| |--- style.css
|
| |--- /images/
| | |--- /slideshow/
| | |--- slide1.jpg
| | |--- slide2.jpg
| | |--- slide3.jpg
| | |--- slide4.png
| | |--- arrow_left.png
| | |--- arrow_right.png
|
|--- index.html
|--- ReadMe.md

- **index.html** : Contient la structure HTML du site.
- **style.css** : Gère la mise en forme du carrousel, des flèches et des bullet points.
- **script.js** : Gère toute la logique du carrousel (navigation, affichage, automatisation).

---

## 🔑 POINTS TECHNIQUES IMPORTANTS

### Slides

- Les informations (image + texte) sont stockées dans un tableau `slides`.

### Navigation

- Les flèches et les bullet points sont associés à des écouteurs d'événements (`addEventListener`).

### Gestion de l'index

- Utilisation de `(i + slides.length) % slides.length` pour assurer une navigation infinie sans erreur.

### Sélection de DOM

- Utilisation de `querySelector` et `querySelectorAll` pour cibler les éléments du carrousel.

### Création dynamique des bullet points

- Les bullet points sont générés automatiquement en fonction du nombre d'images dans le carrousel.

---

## 📸 APERÇU DU CARROUSEL

Ce que propose ce projet :

- Flèches à gauche et à droite pour naviguer
- Bullet points cliquables
- Texte dynamique lié à chaque image
- Changement d'image automatique toutes les 3 secondes
- Boucle fluide d'une extrémité à l'autre

---

## 📖 COMMENT UTILISER LE PROJET

1. Cloner ce dépôt ou copier les fichiers sur votre machine locale.
2. Ouvrir `index.html` dans votre navigateur.
3. Le carrousel fonctionne directement sans besoin de serveur externe.

---

## 🎯 À RETENIR

Ce projet est un excellent exercice pour :

- Manipuler le DOM avec JavaScript
- Dynamiser un site statique
- Gérer les événements utilisateurs
- Créer une boucle infinie dans un carrousel
- Construire une interface utilisateur simple et interactive
