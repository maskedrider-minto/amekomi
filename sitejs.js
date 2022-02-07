$(function(){

	$('#TranslatorText').keyup(function(event){
		TranslatorEvent()
	});
	
	var element = document.getElementById("TranslatorText");
	element.addEventListener("paste",function(event){
		setTimeout(function(e){
			TranslatorEvent()
		}, 100, event);
	});
	
	$('#ClearButton').click(function(event){
		$('#TranslatorText').val("");
		while ($('#TranslatorItem').length > 0) $('#TranslatorItem').remove();
	});
});

function TranslatorEvent(){
	while ($('#TranslatorItem').length > 0) $('#TranslatorItem').remove();
	var text = $('#TranslatorText').val();
	if(text != ""){
		var splitwords = "";
		splitwords = text.replace("　"," ");
		splitwords = splitwords.split(" ");
		var wordnumber = 0;
		splitwords.forEach(function(words){
			var word = words;
			word = word.replace(".","");
			word = word.replace("?","");
			word = word.replace("!","");
			if(word != ""){
				$('#TranslatorTable').append("<tr id='TranslatorItem'><td>" + (wordnumber+1) + "</td><td>" + word + "</td><td></td><td></td></tr>");
				wordnumber++;
			}
		});
	}
}
