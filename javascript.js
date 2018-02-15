var perdu = new Audio('perdu.mp3');
var gagné = new Audio('gagné.mp3');
var min = 1;
var max = 10;
var random = Math.floor(Math.random() * max + min);
// console.log(random);
var hp = 3;

function recharge(){

	$("#recharge").html("<input id='reload' class='btn-primary' type='button' value='Rejouer'>");
	$("#reload").click(function(){
		random = Math.floor(Math.random() * max + min);
		// console.log(random);
		hp = 3;
		reponse = $('#reponse').val("");
		$("#valider").show();
		$("#reload").hide();
		$("#vies").text(" "+ hp);
		$("#alerte").html('<p></p>');
		gagné.pause();
		gagné.currentTime = 0;
	});
}


$("#valider").click(function(){
	hp -= 1;
	var reponse = $('#reponse').val();

	if(reponse < random && reponse > 0){
		$("#alerte").html('<p id="message"><strong>"Essaie un nombre plus grand!"</strong></p>');
		
	}
	else if(reponse > random && reponse < 11){
		$("#alerte").html('<p id="message"><strong>"Essaie un nombre plus petit!"</strong></p>');
	}
	else if(reponse == random){
		gagné.play();
		$("#alerte").html('<p id="message"><strong>"Félicitations!!!"</strong></p>');
		recharge();
		$("#valider").hide();
	}
	else{
		$("#alerte").html('<p id="message"><strong>"Apprend à lire et met un nombre entre 1 et 10!"</strong></p>');
	}

	if(hp == 0 && reponse != random){
		 perdu.play();
		$("#alerte").html('<p id="message"><strong>"Tu n\'as plus de vies... GAME OVER!!!"</strong></p>');
		recharge();
		$("#valider").hide();
	}
	$("#vies").text(" "+ hp);
});

