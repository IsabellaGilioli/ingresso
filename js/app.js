function comprar() {
    const tipo = document.getElementById('tipo-ingresso').value;
    const qtd = Number(document.getElementById('qtd').value);

    // validação do exercício (quantidade positiva)
    if (isNaN(qtd) || qtd <= 0) {
        alert('Erro! Digite um número válido maior que 0.');
        return;
    }

    const elementoQtd = document.getElementById(`qtd-${tipo}`);
    let qtdDisponivel = Number(elementoQtd.textContent);

    // validação de estoque
    if (qtd > qtdDisponivel) {
        alert(`Quantidade indisponível para ${tipo}.`);
        return;
    }

    // atualização da compra
    qtdDisponivel -= qtd;
    elementoQtd.textContent = qtdDisponivel;

    alert('Compra realizada com sucesso!');
}
