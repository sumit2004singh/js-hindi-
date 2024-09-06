//for 

for (let i = 0; i <= 20; i++) {
    const element = i ;
    if(element == 5) {
       // console.log("5 is best number")
    }
    //console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value : ${i}`)
    for (let k = 1; k <= 10; k++) {
       // console.log(`inner loop value: ${k} and inner loop ${i}`)
       // console.log(i + '*' + k + '=' + i*k)
       
    }
    
}

//______________________________________________________________________

//break and continue

// for (let i = 1; i <= 20; i++) {
//     if(i == 5){
//         console.log(`detected 5`)
//         break
//          break will break the printing to 5
//     }
//     console.log(`Value of i is ${i}`)
    
// }

// for (let i = 1; i <= 20; i++) {
//     if(i == 5){
//         console.log(`detected 5`)
//        continue
//         // it allows printing but stops that particular one , conditioned
//     }
//     console.log(`Value of i is ${i}`)
    
// }

//___________________________________-next-_________________________________
// while loop

let i = 0
while (i <= 10) {
    console.log(`value of i is ${i}`);
    i = i + 2
}
 //do while loop

 let score =11

 do{
    console.log(`score is ${score}`);
    score++
 } while (score <= 10)
    //do while loop will print the value once anyhow

//for of loop

const arr = [ 1, 2, ,3 ,4 , 5 , 6 ]

for (const i of arr) {
    console.log(i)
}

const name = "sumitsinghchauhanthakur"
for(const i of name) {
    console.log(`each char is ${i}`)
}

//for each 

const myCoding =[
    {
        languagename:"javascript" ,
        languagefilename: "js"
    },
    {
        languagename:"phyton" ,
        languagefilename: "py"
    },
    {
        languagename:"java" ,
        languagefilename: "java"
    }
]

myCoding.forEach((item) => {
    console.log(item.languagename);
})