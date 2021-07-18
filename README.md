
<h1><u>Manuel d'utilisation / Initialisation de mon API - Exercice Idruide<u><h1>
<br>
<h2><u>Pour initialiser la base de donnée :<u><h2>
<br>

_Installer MySql

_Ouvrez un terminal à l'endroit des fichiers bdd.sql/fill_bdd.sql.

_Effectuer la commande "cat bdd.sql | mysql -u root -p". (C'est la commande que j'utilise sur Linux, il faut adapter si vous etes sous une autre plateforme)

_Lancer ensuite MySql et vérifier avec la commande "show databases" que la bdd "idruide" s'est bien crée.

_Si c'est bien le cas, revenez à votre terminal et faites la commande "cat fill_bdd.sql | mysql -u root -p".

_Vérifiez ensuite si les données ce sont bien insérées en faisant "use idruide", puis, "select id, Nom_etablissement from annuaire limit 10".

_En cas de problème contactez moi !

<br>
<h2>Connection NestJs - MySql<h2>
<p>Aller dans le fichier "ormconfig.json", et changer le username et password si besoin.<p>
<img src="./img/config.png" alt="config">
<br>
<h2>Paginations et routes<h2>
<br>
<img src="./img/academy.png" alt="academy">
<br>
<img src="./img/codePostal.png" alt="codePOstal">
<br>
<img src="./img/getById.png" alt="ID">
<br>
<img src="./img/identifier.png" alt="identifier">
<br>
<img src="./img/typeOfSchool.png" alt="typeOfSchool">

