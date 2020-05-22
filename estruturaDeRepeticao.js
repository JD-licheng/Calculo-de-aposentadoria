const usuarios = [  
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
]

for ( let lista of usuarios) {
console.log(`${lista.nome} trabalha com ${lista.tecnologias.join(', ')}`)
}

// Criei uma const usuarios 
// Depois dcriei um array
// Dentro do array criei 3 objetos
// Para percorrer a array, usei o for
// Criei uma variavel para minha const usuarios
// Imprimi usando string
// Usando o join em juntei em uma string