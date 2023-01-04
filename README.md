CLAC_test

le serveur tourne sur le port 8080


1er service : /chicken

POST: requete permettant de creer chicken avec les champs :
      - name -> obligatoire
      - birthday
      - weight -> obligatoire
      - steps
      - isRunning

PATCH : requete permettant de modifier un chicken avec son id

PUT: Pareil que PATCH

GET : requete permettant de recevoir les informations liee a un chicken

DELETE : requete permettant de supprimer un chicken de la db


2 eme service: /chicken/run

PATCH: requete permettant d'incrementer de 1 la valeur steps d'un chicken qui vaut 0 par defaut
