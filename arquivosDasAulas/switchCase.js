const prompt = require('prompt-sync')()
/*
let idade = Number(prompt("Informe sua idade!: "))

switch (true) {
    case idade >= 0 && idade < 12:
        console.log('voce e uma crinça')
        break
    case idade >= 12 && idade < 18:
        console.log('vc e adolecente')
        break
    case idade >= 18 && idade <60:
        console.log('vc e um adulto')
        break
    case idade >= 60 && idade <150:
        console.log('vc e um idoso')
        break

    default:
        console.log('impossivel definir sua idade.')
        break
}
*/

/*
let nascimento = Number(prompt('Informe o mes do seu nascimento: '))

switch (nascimento) {
    case 1:
        console.log('voce nasceu em janeiro')
        break;
    case 2:
        console.log('voce nasceu em fevereiro')
        break;
    case 3:
        console.log('voce nasceu em março')
        break;
    case 4:
        console.log('voce nasceu em abril')
        break;
    case 5:
        console.log('voce nasceu em maio')
        break;
    case 6:
        console.log('voce nasceu em junho')
        break;
    case 7:
        console.log('voce nasceu em julho')
        break;
    case 8:
        console.log('voce nasceu em agosto')
        break;
    case 9:
        console.log('voce nasceu em setembro')
        break;
    case 10:
        console.log('voce nasceu em outubro')
        break;
    case 11:
        console.log('voce nasceu em novenmbro')
        break;
    case 12:
        console.log('voce nasceu em dezembro')
        break;

    default:
        console.log('mes nao falido..')
        break;
}
*/

let salario = Number(prompt('Informe Seu Salario: '))

switch (true) {
    case salario <= 1500:
        console.log(`Seu desconto e de & {salario * 0.1}`)
        break;
    case salario > 1500 && salario <= 3000:
        console.log(`Seu desconto e de $ {salario * 0.15} `)
        break
    case salario > 3000:
        console.log(`Seu desconto e de $ {salario * 0.2} `)
    default:
        console.log('impossivel calcular.')
        break;
}