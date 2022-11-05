let num1 = prompt("");
let num2 = prompt("");
num1 = num1.toLowerCase();
num2 = num2.toLowerCase();
let count1 = 0;
let count2 = 0;
for(let i=0; i<=num1.length; i++){
    
           if(num1[i]=== 'a' || num1[i] === 'e' || num1[i] === 'i' || num1[i] === 'o' || num1[i] === 'u'){
                count1++;
     }
}

for(let j=0; j<=num2.length; j++){
     if(num2[j]=== 'a' || num2[j] === 'e' || num2[j] === 'i' || num2[j] === 'o' || num2[j] === 'u'){
          count2++;
     }   
}

if(count1>count2){
    console.log("Number1 Have A More Vowels  ", count1)
}else if(count1>=count2){
    console.log("Same Vowels Each Number  ", count1, count2)
}else{
    console.log("Number2 Have A More Vowels  ", count2)
}