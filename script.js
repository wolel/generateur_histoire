
var noms = ["Babe", "Paul", "Clodomir", "George", "Brigitte", "Homer-Simpson", "Kylian", "Georges-Clooney", "Quintus", "Anais", "Styvens", "Keen-V", "Ludovic", "Yoshi", "Lucifer", "Pumba", "Eglantine", "Cayde-6", "Poutine", "Squall"];

var verbes = ['Danser' ,'Frapper' ,'Lubrifier', 'Trikiter', 'Procrastiner', 'Foutre', 'Prendre', 'Nager',
             'Recoudre', 'Punir', 'Attaquer', 'Coder', 'Jouer', 'Manger', 'Avoir'];

var objets = ['valise', 'poivrier connecté', 'épée', 'cahier', 'pneu', 'table', 'godsabre', 'truelle', 'madelaine', 'trident', 'pull rose', 'pc', 'tisonnier', 'guimbarde', 'chandelier',
            'verre', 'table bancale', 'arbre', 'souris, dague'];

var temperatures = ['30', '24', '-273.15', '21', '42', '-38', '35', '584', '-8000', '28', '20', '37.2', '-30', '35', 'hot', '27', '-100', '55' ];

var lieux = ['Tombouctou', 'Lille', 'Sataya', 'Montcuq', 'Paris' , 'Batcave', 'Maubeuge', 'Réacteur nucléaire', 'Martinique', 'Balamb garden', "L'enfer", 'Montbeilard', 'Namek', 'Londres', 'Une île', 'Une cave', 'le Caire', 'New York', 'Le tampon', 'Berlaimont',];


var champ = document.getElementById('champ');
var generer = document.getElementById('generate');
var champU = document.getElementById('champU').value;

generer.addEventListener('click', function () {
    var g_noms = noms[Math.floor(Math.random()*noms.length +1)];
    var g_verbes = verbes[Math.floor(Math.random()*verbes.length +1)];
    var g_objets = objets[Math.floor(Math.random()*objets.length +1)];
    var g_temperatures = temperatures[Math.floor(Math.random()*temperatures.length +1)];
    var g_lieux = lieux[Math.floor(Math.random()*lieux.length + 1)];

    var champU = document.getElementById('champU').value;


    champ.value = champU  +  " cherche à " + g_verbes + " " + g_objets + " avec une batte de " + g_temperatures + " puis s'enfuit à " + g_lieux;

    function Get_Name_Utilisateur() {
    document.getElementById('champU').innerHTML;


}


});


