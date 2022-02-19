/*Crie um objeto "Usuário" com as propriedades que você desejar. 
Depois, mostre uma mensagem na tela perguntando quantos usuários  devem ser salvos.
Após isso, peça todos os dados necessários para seu objeto usuário e depois o salve 
em um array. Quando todos os objetos Usuários forem salvos, mostre o valor de cada 
propriedade do usuário na tela do Browser.*/

let usuario = {
    nome: '',
    idade: 0,
    nacionalidade: '',
    genero: '',
}

let quantidade=parseInt(prompt('Quantos Usuarios você quer cadastrar?'))

let dadosUsuario=[]

for (let i=0; i<quantidade; i++){
    usuario.nome=prompt('Digite o nome do usuario')
    usuario.idade=prompt('Digite a idade do usuario')
    usuario.nacionalidade=prompt('Digite a nacionalidade do usuario')
    usuario.genero=prompt('Digite o genero do usuario')

    dadosUsuario.push(usuario)

    console.log(dadosUsuario[i].nome, dadosUsuario[i].idade, dadosUsuario[i].nacionalidade, dadosUsuario.genero)
    document.write(`Nome do ${i + 1}ª usuário: ${dadosUsuario[i].nome} <p></p>`)
    document.write(`Idade do ${i + 1}ª usuário: ${dadosUsuario[i].idade} <p></p>`)
    document.write(`Nacionalidade do ${i + 1}ª usuário: ${dadosUsuario[i].nacionalidade} <p></p>`)
    document.write(`Genero do ${i + 1}ª usuário: ${dadosUsuario[i].genero} <p></p>`)
    document.write('<br><br>')
}

console.log(dadosUsuario)

