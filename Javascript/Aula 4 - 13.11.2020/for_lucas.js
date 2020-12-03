let vetor1 = [4,5,2,6,8,4,0,10]
let vetor2 = [8,4,2,4,1,0,6,4]

let vetor3 = []

for (let i = 0; i < vetor1.length; i+=2){
    vetor3.push(vetor1[i]+vetor2[i])
}

for (let num of vetor1){
    console.log(num);
}

for (let i in vetor1){
    console.log(`${i}: ${vetor1[i]}`);
}