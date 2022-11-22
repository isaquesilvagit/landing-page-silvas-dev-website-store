

function clicou(){
	document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
	//console.log(document.getElementeById("agradecimento"));
	//alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://globallabs.academy/");
    //window.location.href = "https://globallabs.academy/";
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}    