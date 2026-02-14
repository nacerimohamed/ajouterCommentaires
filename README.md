📝 Comment App - React & Redux

Description

Comment App est une application React qui permet aux utilisateurs d’ajouter et de supprimer des commentaires en temps réel, en utilisant Redux pour gérer l’état global.

Fonctionnalités principales :

Ajouter un commentaire avec le nom de l’utilisateur.

Supprimer tous les commentaires d’un seul clic.

Interface moderne et responsive.

🚀 Installation

Cloner le repo :

git clone <URL_DU_REPO>


Installer les dépendances :

npm install


Lancer l’application :

npm start


Ouvrir http://localhost:3000
 pour voir l'application.

🗂️ Structure du projet
/src
  /actions
    commentaction.js    // Actions ADD_Comment et VIDER_Comment
  /reducers
    CommentReducer.js   // Gestion du state des commentaires
  /components
    CommentUser.jsx     // Formulaire + affichage des commentaires
  App.jsx               // Composant principal
  index.js              // Redux Provider + rendu React

🛠️ Utilisation

Entrer le nom dans l’input user.

Entrer le commentaire dans le textarea.

Cliquer sur Ajouter Commentaire pour ajouter un commentaire.

Cliquer sur Supprimer Commentaires pour effacer tous les commentaires.

Exemple
user: "Nacer"
comment: "Super application!"


Affichage :

Nacer: Super application!

🎨 Design

Thème sombre, cards pour chaque commentaire

Hover effects sur les boutons

Responsive (mobile et desktop)

⚡ Technologie utilisée

React.js

Redux / React-Redux

JavaScript ES6

CSS moderne pour design pro

💡 Remarques

Le tableau de commentaires est vide au démarrage.

Tous les commentaires sont gérés globalement via Redux.

✅ Conseil GitHub : Ajouter ce README.md à la racine du repo, ça donnera un aspect professionnel au projet.
