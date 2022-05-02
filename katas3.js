const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1(number) {
    let count = []
    for(let i = 1; i <= number; i++){
        count += `${i},`
    }
    return count
}
console.log(kata1(25))

function kata2(number) {
    let count = []
    for(let i = 25; i >= number; i--){
        count += `${i},`
    }
    return count
}
console.log(kata2(1))

function kata3(number) {
    let count = []
    for(let i = -1; i >= number; i--){
        count += `${i},`
    }
    return count
}
console.log(kata3(-25))

function kata4(number) {
    let count = []
    for(let i = -25; i <= number; i++){
        count += `${i},`
    }
    return count
}
console.log(kata4(-1))

function kata5(number) {
    let count = []
    for(let i = 25; i >= number; i--){
        if(i % 2 !== 0){
            count+= `${i}, `
        }
    }
    return count
}
console.log(kata5(-25))

function kata6(number) {
    let count = []
    for(let i = 3; i <= number; i++){
        if(i % 3 == 0){
            count+= `${i}, `
        }
    }
    return count
}
console.log(kata6(100))

function kata7(number) {
    let count = []
    for(let i = 7; i <= number; i++){
        if(i % 7 == 0){
            count+= `${i}, `
        }
    }
    return count
}
console.log(kata7(100))

function kata8(number) {
    let count = []
    for(let i = 100; i >= number; i--){
        if(i % 7 == 0 || i % 3 == 0){
            count+= `${i}, `
        }
    }
    return count
}
console.log(kata8(3))

function kata9(number) {
    let count = []
    for(let i = 5; i <= number; i++){
        if(i % 5 == 0 && i % 2 !== 0){
            count+= `${i}, `
        }
    }
    return count
}
console.log(kata9(100))

function kata10(arr) {
    let count = []
    for(let i = 0; i < arr.length; i++){
        count+= `${arr[i]}, `
    }
    return count
}
console.log(kata10(sampleArray))

function kata11(arr) {
    let count = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            count+= `${arr[i]}, `
        }
    }
    return count
}
console.log(kata11(sampleArray))

function kata12(arr) {
    let count = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            count+= `${arr[i]}, `
        }
    }
    return count
}
console.log(kata12(sampleArray))

function kata13(arr) {
    let count = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 8 == 0){
            count+= `${arr[i]}, `
        }
    }
    return count
}
console.log(kata13(sampleArray))

 function kata14(arr) {
    let count = []
    for(let i = 0; i < arr.length; i++){
     count+= Math.sqrt(arr[i]) + ', '
    }
    return count
}
console.log(kata14(sampleArray)) 

function kata15(number) {
    let soma = 0
    for(let i = 1; i <= number; i++){
        soma+= i
    }
    return soma
}
console.log(kata15(20))

function kata16(arr) {
    let soma = []
    for(let i = 1; i < arr.length; i++){
        soma+= arr[i]
    }
    return soma
}
console.log(kata16(sampleArray))

function kata17(arr) {
    var min = Math.min(...arr);
    var max = Math.max(...arr);
    return min
}
console.log(kata17(sampleArray))

function kata18(arr) {
    var max = Math.max(...arr);
    return max
}
console.log(kata18(sampleArray))

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
