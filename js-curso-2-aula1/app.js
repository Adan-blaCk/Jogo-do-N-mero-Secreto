let listadeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
};
function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', `Escolha um número de 1 a 100`);
}
verificarChute();
exibirMensagemInicial();
 function  verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' ;
        let mensagemTentativa = `Voce descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('h1', 'ACERTOU!');
        exibirTextoNaTela('p', mensagemTentativa);
        limparoCampo();
    }else{
    
    if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `O número é menor que ${chute}`);
        }else{
            exibirTextoNaTela('p',`O número é maior que ${chute}`);
        }
        tentativas++;
        limparoCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosnaLista = listadeNumerosSorteados.length;

    if(quantidadeDeElementosnaLista == numeroLimite){
        listadeNumerosSorteados = [];
    }

     if(listadeNumerosSorteados.includes(numeroEscolido)){
        return gerarNumeroAleatorio(); 
     }else{
        console.log(listadeNumerosSorteados);
        listadeNumerosSorteados.push(numeroEscolido);
        return numeroEscolido;  
     } 
} 
 
 function limparoCampo() {
    chute = document.querySelector('input');
    chute.value = '';
 }
 reset();
function reset(){
    console.log (numeroSecreto = gerarNumeroAleatorio());
    exibirMensagemInicial();
    limparoCampo();
    tentativas = 1;
  

}
   
 
 console.log(numeroSecreto);