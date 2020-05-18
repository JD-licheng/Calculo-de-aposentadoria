const nome = "carlos"

const idade = "32"

const tec = [
    { 
        nome: 'C++', 
        especialidade: 'Desktop'  
    },

    { 
        nome: 'Python', 
        especialidade: 'Data Science' 
    },

    { 
        nome: 'JavaScript', 
        especialidade: 'Web/Mobile'
    }

]

const usuário = (`O usuário ${nome} tem ${idade} anos e usa a tecnologia ${tec[0].nome} com especialidade em ${tec[0].especialidade}`)

console.log(usuário)                      