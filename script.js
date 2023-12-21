function carica(){
    let board = document.createElement("div");
    board.className = "board";

    let verde = document.createElement("div");
    verde.id = "verde";
    board.appendChild(verde);
    let rosso = document.createElement("div");
    rosso.id = "rosso";
    board.appendChild(rosso); 
    
    verde.className = "item";
    rosso.className = "item";

    verde.onclick = cliccato;
    rosso.onclick = cliccato;
    
    document.body.appendChild(board);

    let board2 = document.createElement("div");
    board2.className = "board";

    let giallo = document.createElement("div");
    giallo.id = "giallo";
    board2.appendChild(giallo);
    let blu = document.createElement("div");
    blu.id = "blu";
    board2.appendChild(blu);    

    giallo.className = "item";
    blu.className = "item";

    giallo.onclick = cliccato;
    blu.onclick = cliccato;

    document.body.appendChild(board2);
}

let contatore = 4;
let arrColori = [];

function inizio() {
    arrColori = [];

    for (let i = 0; i < contatore; i++) {
        let num = Math.trunc(Math.random() * 4);
        arrColori.push(num);
    }

    console.log(arrColori);

    accendiColore(0);
    contatore++;
}

function accendiColore(index) {
    if (index < arrColori.length) {
        let num = arrColori[index];

        if (num === 0)
            document.getElementById("verde").style.filter = "brightness(0.7)";
        else if (num === 1)
            document.getElementById("rosso").style.filter = "brightness(0.7)";
        else if (num === 2)
            document.getElementById("giallo").style.filter = "brightness(0.7)";
        else if (num === 3)
            document.getElementById("blu").style.filter = "brightness(0.7)";

        setTimeout(function () {
            resettaColore(num);
        }, 1000);
        
        setTimeout(function () {
            accendiColore(index + 1);
        }, 1500);            
    }
}

function resettaColore(num) {
    if (num === 0)
        document.getElementById("verde").style.filter = "brightness(1)";
    else if (num === 1)
        document.getElementById("rosso").style.filter = "brightness(1)";
    else if (num === 2)
        document.getElementById("giallo").style.filter = "brightness(1)";
    else 
        document.getElementById("blu").style.filter = "brightness(1)";
}

let arrClickUtente = [];

function cliccato() {
    let elemCliccato = this;
    let elemId = elemCliccato.id;

    if(elemId == "verde")
        arrClickUtente.push(0);
    else if(elemId == "rosso")
        arrClickUtente.push(1);
    else if(elemId == "giallo")
        arrClickUtente.push(2);
    else if(elemId == "blu")
        arrClickUtente.push(3);
	
	console.log(arrClickUtente)

    if(arrClickUtente.length == arrColori.length){
        vaildaSequenza();
    }


}

function vaildaSequenza(){
	if(arrClickUtente.length == contatore - 1){
		
    let i = 0;
		while(arrColori[i] == arrClickUtente[i] && i < contatore){
			i++;
		}
				
		if(i != contatore)
			//HAI PERSO
		
		
		arrClickUtente.length = 0;
		arrColori.length = 0;
	}
}