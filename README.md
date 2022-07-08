<p align="center">
  <img width="30%" src="frontEnd/public/pics/logoParici.png" />
</p>

## <p align="center"> Découvrez les petites commercants de Paris avec Parici </p>

"Parici" est un proof of concept (POC) créé dans le cadre du projet final de Hetic ayant pour but de vous faire découvrir le Paris des petits commerces.<br/> 

En effet, l'activité des petits commerçants sur Paris est vivante mais nombre d'entre-nous n'avons pas idée de cette richesse tant nous sommes pris dans nos habitudes. Nous connaissons les commerces de notre quartier ou allons dans les grands magasins. 

Ce POC vise à faire découvrir cette richesse du petit commerce en proposant des circuits sur Paris que l'on peux faire sur une journée ou une aprés-midi. Au lieu de devoir aller soit-même rechercher les commerces et les circuits, Parici vous facilite la tâche : vous concevez votre circuit avec aisance grâce à des propositions automatisées ou alors vous découvrez un circuit déjà créé par d'autres.  

### But du projet

Le premier but est de valoriser le petit commerce en proposant cette idée d'application. 

Le but est aussi pédagogique: apprendre à utiliser des technologies comme Node.js et React.js.

### Installation 

Pour réaliser l'installation vous avez besoin : 
- Installer Node.js en suivant les étapes sur <a href="https://nodejs.org/fr/" >ce site</a>
- Installer aussi NPM.
- Vous pouvez utiliser des outils comme MAMP afin d'être connecté à une base MySQL ou autre moyen (PHP n'est pas requis).

#### Une fois que vous êtes connecté à MySQL:<br/>
- Créez une base de donnée vide nommée paricidb (tout en minuscule).
- Puis ouvrez votre IDE et allez dans le dossier backEnd sur votre terminal. 
- Ouvrez un second terminal et aller dans frontEnd.
- Dans backEnd vous devez vérifiez certains points: 
    + Dans le fichier database/db.js :<br/>
      Dans la variable dbinfo: vérifiez que le mot de passe correspond au vôtre  (ici c'est "root" mais certains système ont rien ou un autre mot de passe)<br/>
      En bas de ce fichier, trouvez la ligne de code commentée <code>dbinfo.sync({ force: true });</code>: décommentez-là. 
    + Dans le fichier serveur.js, vous verrez que le port utilisé par le back est 3000: déconnectez vos autres activités de ce port qui doit être libre.
 - Lancer ensuite dans le dossier backEnd : npm install
 - Normalement, le dossier package.json que ce soit celui du back ou du front n'est plus dans gitignore donc les modules supplémentaires doivent s'installer.
 
#### Une fois le backEnd bien démarrer ("connexion à mon db" s'affiche), vous lancez le front avec React :<br/>

  Tapez `npm install` pour installer les node-modules nécessaires à React.
 
 - Le fichier package.json a normalement été préservé dans le repo mais si ce n'est pas le cas, voici les modules supplémentaires à installer (npm install + nom) :<br/>
   Pour le back end : express, nodemon, sequelize
   Pour le front-end: sass, react-icons, react-router, react-leaflet (voir la documentation en ligne) sur l'installation. 
  
  Ensuite, pour démarrez les environnement de développement: `npm start` 
  
- Vous démarrez ainsi les environnements de développement dans cet ordre (ou alors assurez-vous de libérer le port 3000 pour le back): 
  + En premier sur backEnd : npm start (pour avoir le port 3000)
  + En second sur frontEnd (il demandera de changer de port : tapez "Y"): npm start 
  
#### Rappel des commandes principales:<br/> 
 0. `NPM` ou `Yarn` sont requis

 Si vous optez pour npm:<br/>
 1. Installer les modules `NPM`:
 
    ```sh
    npm i ou npm install
    ```
    
 2. Pour démarrer l'environnement de développement:
    ```sh
    npm start
    ```


### Equipe: 

- [Farmata SIDIBE](https://github.com/Farmata-sidibe)
- [Salma Wadouachi](https://github.com/TerraNovaX)
- [Amaury FRANSSEN](https://github.com/ExploryKod) 
- [Nachmia MOHAMED](https://github.com/Nachmia)
- [Raphaël Louison](https://github.com/Nakashaki)
- [Mathias Bouillon](https://github.com/MathiasBln)
- [Julien Vérité](https://github.com/JulienVJ)
- [Idris Abelli](https://github.com/Sinitus)
- [Morgane Dassonville](https://github.com/Jun080)
- Martin Claver 


### Technologies : 
   ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
   ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
   ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
   ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
   ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
   ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
   ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
   
 
