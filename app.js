 // Créer un jeu simple de devinette de nombre. Le jeu choisit aléatoirement un nombre 
// entre 1 et 100, puis il met le joueur au défi de le deviner en 10 tentatives maxi .À chaque tour, le 
// joueur doit être informé s'il a deviné ou non le bon nombre si ce n'est pas le cas, le jeu lui 
// indique si son estimation est trop basse ou trop élevée.  Le jeu se termine quand le joueur a deviné le nombre mystère,  ou 
// s'il a épuisé ses 10 chances. À la fin du jeu, le joueur a la possibilité de débuter une nouvelle 
// partie.
//Bonus : Le jeu doit également rappeler au joueur les 
// nombres déjà proposés 


var cl=console.log

    
///////////////////////////////////////////////////////////////////////

 //Definition du nombre aléatoire, nombre généré aléatoirement entre 0 et 1, multiplié par 100 et arrondi//

    function getRandom() {
             var randomNumber =  Math.random() * 100;
            return Math.round(randomNumber) }
    getRandom()
        

///////////////////////////////////////////////////////////////////////

                

//Définition des variables : je vais chercher mes éléments HTML, puis je créé une variable pour stocker mon nombre aléatoire (permet qu'il reste constant entre chaque essai) je créé un indice x à O qui permettra de compter le nombre de clics enfin je créé un tableau inputArray qui stockera les nombres déjà proposés. 


var myButton = document.querySelector('.essai')
var resetButton = document.querySelector('.reset')
var myDivTest = document.querySelector('div')  
var nbProposés = document.querySelector('p')
var randomNumber = getRandom()
var x = 0
var inputArray = []

//Fonctions du jeu qui démarre au clic

// Le compteur démarre avec  x+1 à chaque clic, puis la variable typedValue récupère la valeur tapée dans l'input, valeurs poussées dans le tableau inputArray et rajoutés dans le HTML des nombres proposés.
// Les conditions renvoient des messages de félicitations, ou d'indication si la valeur est trop élevée ou trop basse (==, > ou <) les conditions prennent en compte le nombre de clic inférieur à 10. Si mes clics sont supérieurs à 10, une alert apparaitra pour indiquer qu'il faut recommencer la partie et le bouton reset va apparaitre (il était caché par un display:none)
var randGame = () =>
{
    myButton.addEventListener('click', () =>
    {
        x=x+1
        var typedValue = document.querySelector('input').value
        inputArray.push(`${typedValue}`)
        // nbProposés.innerText=(`Nombres proposés : ${inputArray}`)
        nbProposés.innerText="Nombres que vous avez proposés: " + inputArray
     if(x<10 && typedValue == randomNumber)
{myDivTest.innerText="bravo"
window.alert(" Bravo !")}
else if (x<10 && typedValue> randomNumber)
{ myDivTest.innerText=" Trop haut. Rééssayez"}
else if(x<10  && typedValue < randomNumber)
{myDivTest.innerText="Trop bas. Rééssayez" }
else if(x>10)
{window.alert(" Veuillez recommencer une partie")
resetButton.style.display = 'block'
}
    })
}
randGame()

//////////////////////////////////////////////////////////////////////////

                //Bouton reset
//RELOAD la page au clic

resetButton.addEventListener('click', () =>{document.location.reload()} )


///////////////////////////////////////////////////////////////////////




