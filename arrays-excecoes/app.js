try {
    const listaProdutosDisponiveis = [
        "Pão",
        "Leite",
        "Café",
        "Laranja",
        "Macarrão",
        "Sabonete",
        "Detergente"
    ];

    const listaArgs = process.argv.slice(2); // input recibido no console

    const listaProdutosSolicitadosDisponiveis = listaProdutosDisponiveis.filter(produto => {
        return listaArgs.find(argumento => argumento === produto);
    });

    console.log('--------------------------------------------------------------------');
    listaProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nos temos: ${produto}`));

    const listaProdutosSolicitadosNaoDisponiveis = listaArgs.filter(argumento => {
        return !listaProdutosDisponiveis.find(produto => produto === argumento);
    });

    console.log('--------------------------------------------------------------------');
    listaProdutosSolicitadosNaoDisponiveis.forEach(produto => console.log(`Este produto nos não temos: ${produto}`));

    console.log('--------------------------------------------------------------------');
    listaProdutosDisponiveis.sort();
    listaProdutosDisponiveis.forEach(produto => console.log(`Este produto esta dispinível: ${produto}`));
    console.log('--------------------------------------------------------------------');
} catch (e) {
    console.log('Não foi possível realizar essa ação!');
    console.log('--------------------------------------------------------------------');
} finally {
    console.log('Sistema Encerando...');
}