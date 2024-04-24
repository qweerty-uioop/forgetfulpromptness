

var images = [
	'immagini/dalle01.png',
	'immagini/dalle02.png',
	'immagini/dalle03.png',
	'immagini/dalle04.png',
	'immagini/dalle05.png',
	'immagini/dalle06.png',
	'immagini/dalle07.png',
	'immagini/dalle08.png',
	'immagini/dalle09.png',
	'immagini/dalle10.png',
	'immagini/dalle11.png',
	'immagini/dalle12.png',
	'immagini/dalle13.png',
	'immagini/dalle14.png',
	'immagini/dalle15.png',
	'immagini/dalle16.png',
	'immagini/dalle17.png',
];

var i=0; 
var time = 20000; //20s


function shuffle(images){
	return images.sort(() => Math.random() - 0.5);
}

function changeImg(){
		document.getElementById("random-image").src=images[i];
		
		if(i < images.length ){
			i++;
		} else {
				document.body.style.background = 'white';
				document.getElementById("fp").style.color="black";
				document.getElementById("text").style.color="black";
				document.getElementById("lingua").style.color="black";
				document.getElementById("divTitolo").style.background="white";
				document.getElementById("question").style.color="black";
				document.getElementById("mail").style.color="black";

				document.getElementById("random-image").style.display = "none";
		}
		setTimeout("changeImg()", time);
	}

function mostra(IdElementoDaMostrare){
  if (document.getElementById(IdElementoDaMostrare).style.display === "none") {
    document.getElementById(IdElementoDaMostrare).style.display = "block";}
  else {
    document.getElementById(IdElementoDaMostrare).style.display = "none";
}
}

function spostaImm(){
	const imm = document.getElementById("random-image");
if (!imm.classList.contains('sposta')){
imm.className +="sposta";}

else {
	imm.classList.remove('sposta') 
}

}

function clic (){
document.getElementById("fp").addEventListener("click", spostaImm);
document.getElementById("fp").addEventListener("click", mostra('wrapper'));


}

//lingua 
x=1;
var testo =document.getElementById("text");
var pulsante= document.getElementById("lingua");

function changeLng(){
	if (x==1) {
		x=0;
		pulsante.innerHTML = "it";
		testo.innerHTML = "<br>A machine, a medium, an algorithm, translate an input into an output. Whatever the input, it is necessarily processed through the execution of a series of blocked instructions. It is only thanks to this hyper-simplicity of operation that the hyper-productivity of the machine can be achieved. But what happens if we introduce into a machine an anomalous flow compared to the one it is predisposed to receive, for example by asking an artificial intelligence designed to convert text into images to generate a <i>forgotten image</i>? An image that <i>for man</i> is structurally absent, if anything present in the sphere of the unconscious, lost forever or suddenly found in a dream. <br><br>From the corpus of images obtained by repeating the same prompt hundreds of times (<i>“an image that is forgotten”</i>), all the images that were too clear were discarded, i.e. those that referred to an easily readable common imaginary of forgetfulness. But the possibility of infinitely soliciting the algorithm on an ambiguous input has sometimes generated images in front of which one seems to lose. They are images that never cease to articulate themselves as a 'scene' of something, because the algorithm does not know <i>another scene</i> and is prevented from creating a scribble, or from leaving the frame of the picture; yet we fail to grasp a sense that goes beyond this mere <i>sensible way</i>. These are the images that have been selected.<br><br>In these images it becomes evident that 'the structure of the machine is analogous to the structure of the unconscious, it lacks depth and is extraneous to the flows that pass through it' (Vaccari). In our case the imaginary of forgetfulness goes around in circles, blends continuing to create compositions which, however, are useless for any purpose. But the indifference of these images to meaning could acquire a new value, in the manner of a new <i>ready-made</i>, no longer mechanical but algorithmic. Mere clues of meaning, mere glimpse of significance, that indicate without showing anything. Relics, but in a new form."
	} else {
		x++;
		pulsante.innerHTML = "eng";
		testo.innerHTML = "<br>Una macchina, un medium, un algoritmo, traducono un input in un output. Qualsiasi sia l’input, viene necessariamente elaborato tramite l’esecuzione di una serie di istruzioni bloccate. È solo grazie a questa iper-semplicità di funzionamento che si può ottenere l’iper-produttività della macchina. Ma cosa succede se immettiamo in una macchina un flusso anomalo rispetto a quello che è predisposta a ricevere, chiedendo per esempio ad un’intelligenza artificiale pensata per convertire il testo in immagini di generare un’<i>immagine dimenticata</i>? Un’immagine quindi <i>per l’uomo</i> strutturalmente assente, presente semmai nella sfera dell’inconscio, persa per sempre o ritrovata all’improvviso in un sogno. <br><br>Dal corpus di immagini ottenuto ripetendo centinaia di volte lo stesso prompt (<i>“an image that is forgotten”</i>) sono state scartate tutte le immagini troppo chiare, cioè quelle che si rifacevano ad un immaginario comune della dimenticanza facilmente leggibile. Ma la possibilità di sollecitare all’infinito l’algoritmo su un input ambiguo talvolta ha generato delle immagini di fronte a cui sembra di perdere ogni riferimento. Sono immagini che non cessano di articolarsi come una “scena“ di qualcosa, perchè l’algoritmo non conosce <i>un’altra scena</i> e gli è precluso di creare uno scarabocchio, o di uscire dal quadro; eppure non riusciamo a cogliere un senso che vada oltre questo mero <i>modo sensato</i>. Queste sono le immagini che sono state selezionate. <br><br>In queste immagini diventa evidente che “la struttura della macchina è analoga alla struttura dell’inconscio, è priva di profondità ed è estranea ai flussi che la attraversano” (Vaccari). Nel nostro caso l’immaginario della dimenticanza gira a vuoto, frulla continuando a creare composizioni che però risultano inservibili a qualsiasi scopo. Ma l’indifferenza di queste immagini rispetto al senso potrebbe acquistare un nuovo valore, al modo di un nuovo <i>ready-made</i>, non più meccanico ma algoritmico. Meri indizi del senso, mero affacciarsi della significanza, indicano senza mostrare nulla. Reliquie, ma in una nuova forma."
	}	
}; 





	window.onload = shuffle(images);
	window.onload = changeImg(); clic();
		