const valor = document.getElementById("valor");
const barra = document.getElementById("fill");
const meta = 18000;
let valorAtual = 0;
let Agregado = 0;

function mudarValor() {
    valorAtual = 2916.23;
    valor.innerText = "R$ " + valorAtual.toLocaleString("pt-BR", {
        minimumFractionDigits: 2
    });
    mudarBarra();
}

function mudarBarra() {
    const porcentagem = (valorAtual / meta) * 100;
    barra.style.width = Math.min(porcentagem, 100) + "%";
}

function aumentar() {
    const diferenca = valorAtual - Agregado;
    
    valorAtual += diferenca;

    valor.innerText = "R$ " + valorAtual.toLocaleString("pt-BR", {
        minimumFractionDigits: 2
    });

    mudarBarra();
}