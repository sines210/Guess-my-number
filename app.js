 // Créer un jeu simple de devinette de nombre. Le jeu choisit aléatoirement un nombre 
// entre 1 et 100, // FAIT puis il met le joueur au défi de le deviner en 10 tentatives maxi //FAIT.À chaque tour, le 
// joueur doit être informé s'il a deviné ou non le bon nombre // FAIT— si ce n'est pas le cas, le jeu lui 
// indique si son estimation est trop basse ou trop élevée. //FAIT Le jeu se termine quand le joueur a deviné le nombre mystère, //FAIT ou 
// s'il a épuisé ses 10 chances. //FAIT À la fin du jeu, le joueur a la possibilité de débuter une nouvelle 
// partie. // A FAIRE
//Bonus : Le jeu doit également rappeler au joueur les 
// nombres déjà proposés // A FAIRE




    
///////////////////////////////////////////////////////////////////////

    function getRandom() {
             var randomNumber =  Math.random() * 100;
            return Math.round(randomNumber) }
    getRandom()

///////////////////////////////////////////////////////////////////////
var myButton = document.querySelector('button')
var randomNumber = getRandom()
var myDivTest = document.querySelector('div')  


var inputValue = () =>
{
  
 var typedValue = document.querySelector("input").value  

if(typedValue == randomNumber)
{myDivTest.innerText="bravo"
window.alert(" Bravo !")}
else if (typedValue> randomNumber)
{ myDivTest.innerText=" Loupé trop haut. Rééssayez" + typedValue}
else
{myDivTest.innerText="Loupé trop bas. Rééssayez" + typedValue + randomNumber}

}

///////////////////////////////////////////////////////////////////////

var x = 0
var countClic = () =>
{x = x+1; 
    document.querySelector('p').innerHTML = x;
if(x<10)
{inputValue()}
else
{window.alert(" Veuillez rééssayer")
}
}

///////////////////////////////////////////////////////////////////////

var boutonClic = myButton.addEventListener("click", countClic)





// TODO redémarrer la partie après les 10 tentatives + affichage valeurs précédentes + affichage des règles mise en forme ... +
// Pour l'instant j'ai créé une fonction me permettant de générer un nombre aléatoire entre 0 et 1 et de le multiplier par 100 afin de générer un nombre aléatoire entre 1 et 100.
// Ensuite j'ai créé une variable me permettant de stocker le résultat de ma fonction de génération de nombre aléatoire puisque si j'utilise ma fonction directement elle générera un nouveau nombre à chaque clique de l'utilisateur tandis que si je stocke la valeur générée dans une variable, la fonction n'est éxécutée qu'une fois et donc le nombre alétatoire est conservé et on peut le réutiliser pour les différents éssais. Ensuite j'ai créé une condition de comparaison qui affiche du texte pour l'utilisateur. 