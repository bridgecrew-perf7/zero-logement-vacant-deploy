db = db.getSiblingDB("zlv");

db.createCollection("property");

db.getCollection("property").insertMany([
    {
        "ownerid": "51e0373c6f35bd826f47e9a0",
        "adresse_logement": "0002 RUE GAY LUSSAC",
        "nom_commune": "Paris",
        "proprietaire": "Benjamin Doberset",
        "etape": 1,
        "commentaire": "...",
        "email": "demo@email.fr"
    },
    {
        "ownerid": "51e0373c6f35bd826f47e9a0",
        "adresse_logement": "0002 RUE GAY LUSSAC",
        "nom_commune": "donnée",
        "proprietaire": "donnée",
        "etape": 1,
        "commentaire": "...",
        "email": "demo@email.fr"
    }
]);

db.createCollection("owner");

db.getCollection("owner").insertMany([
    {
        "_id": ObjectId("51e0373c6f35bd826f47e9a0"),
        "name": "Doberset",
        "lastname": "Benjamin"
    },
]);

db.createCollection("user");