

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
	'immagini/dalle18.png',
	'immagini/dalle19.png',
	'immagini/dalle20.png',
	'immagini/dalle21.png',
	'immagini/dalle22.png',
	'immagini/dalle23.png',
	'immagini/dalle24.png',
	'immagini/dalle25.png',
	'immagini/dalle26.png',
	'immagini/dalle27.png',
	'immagini/dalle28.png',
	'immagini/dalle29.png',
	'immagini/dalle30.png',

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
				document.getElementById("texteng").style.color="black";
				document.getElementById("eng").style.color="black";
				document.getElementById("divTitolo").style.background="transparent";

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
function eng(){
if (document.getElementById("texteng").style.display = "none")
{document.getElementById("text").style.display = "none"
	document.getElementById("texteng").style.display = "block";
	}
	else 

		{document.getElementById("text").style.display = "block";
		document.getElementById("texteng").style.display = "none";
	}
}
	window.onload = shuffle(images);
	window.onload = changeImg(); clic();

		