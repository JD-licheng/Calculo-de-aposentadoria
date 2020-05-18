
const nome = 'Diego';
const sexo = 'M';
const idade = 48;
const contribuição = 53;

const calculocontribuicao = idade + contribuição

// Condição para o sexo Feminio
if (sexo == 'F')
if (calculocontribuicao > 85) {
    console.log (`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
}

// Condição para o sexo Masculino

if (sexo == 'M')
if (calculocontribuicao > 95) {
    console.log (`${nome}, você pode se aposentar!`)

} else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
}

