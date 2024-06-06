import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview-pattern-based',
  templateUrl: './interview-pattern-based.component.html',
  styleUrls: ['./interview-pattern-based.component.scss']
})
export class InterviewPatternBasedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { this.callOninIt(); }

  callOninIt() { }

  code111: string = `
for(let i=1; i<=4; i++){
  let pa = "";
  for(let j=1; j<=i; j++){
      pa += i+" "; 
  }
  console.log(pa);
}`;
  code112: string = `
1 
2 2 
3 3 3 
4 4 4 4`;
  code113: string = `
for(let i=1; i<=4; i++){
  let pa = "";
  for(let j=1; j<=i; j++){
      pa += j+" "; 
  }
  console.log(pa);
}`;
  code114: string = `
1 
1 2 
1 2 3 
1 2 3 4 `;
  code115: string = `
let counter = 1;
for(let i=1; i<=4; i++){
    let pa= "";
    for(let j=1; j<=i; j++){
        pa += counter+" ";
        counter++;
    }
    console.log(pa);
}`;
  code116: string = `
1 
2 3 
4 5 6 
7 8 9 10`;
  code117: string = `
for(let i=1; i<=4; i++){
  let pa = "";
  for(let j=4; j>=i; j--){
      pa += " ";
  }
  for(let k=1; k<=i; k++){
      pa += i+" ";
  }
  console.log(pa);
}`;
  code118: string = `    
   1 
  2 2 
 3 3 3 
4 4 4 4 `;
  code119: string = `
for(let i=1; i<=4; i++){
  let pa = "";
  for(let j=4; j>=i; j--){
      pa += " ";
  }
  for(let k=1; k<=i; k++){
      pa += k+" ";
  }
  console.log(pa);
}`;
  code120: string = `
   1 
  1 2 
 1 2 3 
1 2 3 4`;
  code121: string = `
let couter = 1;
for(let i=1; i<=4; i++){
    let pa = "";
    for(let j=4; j>=i; j--){
        pa += " ";
    }
    for(let k=1; k<=i; k++){
        pa += couter+" ";
        couter++;
    }
    console.log(pa);
}`;
  code122: string = `
    1 
   2 3 
  4 5 6 
 7 8 9 10 `;
  code123: string = `
for(let i=1; i<=5; i++){
  let pa = "";
  for(let k=1; k<=i; k++){
      pa += " * ";
  }
  console.log(pa);
}`;
  code124: string = `
* 
*  * 
*  *  * 
*  *  *  * 
*  *  *  *  * `;
  code125: string = `
for(let i=1; i<=5; i++){
  let pa = "";
  for(let k=5; k>=i; k--){
      pa += " * ";
  }
  console.log(pa);
}`;
  code126: string = `
*  *  *  *  * 
*  *  *  * 
*  *  * 
*  * 
* `;
  code127: string = ` 
let n = 5;
for(let i = 0; i<=n; i++){
 let patern = "";
 for(let j=1;j<=(n-i);j++){
     patern += j;
 }
 console.log(patern); 
}`;
  code128: string = `
12345
1234
123
12
1`;
  code129: string = ` 
let n = 5;
function getPattern(n){
   for(let i = 0; i<=n; i++){
   if(i%2!==0){
       let patern = "";
       for(let k=n; k>=i; k--){
         patern += " ";
       }
       for(let j=1;j<=i;j++){
       patern += j+" ";
       }
       console.log(patern); 
   }
 }
};
getPattern(n);`;
  code130: string = `
    1 
  1 2 3 
1 2 3 4 5 `;
  code131: string = `
let n = 5;
function getPatteern(n){
    for (let i = 2; i < n; i++) {
        let patt = "";
        if(i!==1){
            for (let j = n; j > i; j--) {
                patt += " ";
            }
            
        for (let j = 0; j < i; j++) {
                patt += " *";
            }
            
        for (let j = n; j > i; j--) {
                patt += " ";
            }
        
        for (let j = n; j > i; j--) {
                patt += " ";
            }
        
        for (let j = 0; j < i; j++) {
                patt += " *";
            }
        }
        console.log(patt);
    }

for (let i = 0; i < n*2; i++) {
        let patt = "";
    
        for (let j = 0; j < i; j++) {
                patt += " ";
            }
            
        for (let j = n*2; j > i; j--) {
                patt += " *";
            }
        
        console.log(patt);
    }
}

getPatteern(n);`;
  code132: string = `
    * *       * *
   * * *     * * *
  * * * *   * * * *
 * * * * * * * * * *
  * * * * * * * * *
   * * * * * * * *
    * * * * * * *
     * * * * * *
      * * * * *
       * * * *
        * * *
         * *
          *
`;
  code133: string = `
 let n = 5;
for (let i = 0; i < n; i++) {
       let patt = "";
   
       for (let j = n; j > i; j--) {
               patt += " ";
           }
           
       for (let j = 0; j < i; j++) {
               patt += " *";
           }
       
       console.log(patt);
   }
   
for (let i = 0; i < n; i++) {
       let patt = "";
   
       for (let j = 0; j < i; j++) {
               patt += " ";
           }
           
       for (let j = n; j > i; j--) {
               patt += " *";
           }
       
       console.log(patt);
   }
`;
  code134: string = `
     *
    * *
   * * *
  * * * *
 * * * * *
  * * * *
   * * *
    * *
     * `;
  code135: string = ` 
let n = 5;
for (let i = 0; i < n; i++) {
       let patt = "";
   
       for (let j = 0; j < i; j++) {
               patt += " ";
           }
           
       for (let j = n; j > i; j--) {
               patt += " *";
           }
       
       console.log(patt);
   }
   
   for (let i = 1; i < n+1; i++) {
       let patt = "";
   
       for (let j = n; j > i; j--) {
               patt += " ";
           }
           
       for (let j = 0; j < i; j++) {
               patt += " *";
           }
       
       console.log(patt);
   }

`;
  code136: string = ` 
* * * * *
 * * * *
  * * *
   * *
    *
    *
   * *
  * * *
 * * * *
* * * * *`;
  code137: string = ` 
let n = 5;
for (let i = 0; i < n; i++) {
       let patt = "";
       for (let j = 0; j <= i; j++) {
               patt += "*";
       }
       for (let j = n; j >i; j--) {
               patt += "  ";
       }
       for (let j = 0; j <= i; j++) {
               patt += "*";
       }
       console.log(patt);
   }
   
   
   for (let i = 1; i < n; i++) {
       let patt = "";
       for (let j = n; j-1 >= i; j--) {
               patt += "*";
       }
       for (let j = 0; j<=i; j++) {
               patt += "  ";
       }
       for (let j = n; j-1 >= i; j--) {
               patt += "*";
       }
       console.log(patt);
   }


`;
  code138: string = `
*          *
**        **
***      ***
****    ****
*****  *****
****    ****
***      ***
**        **
*          *`;
  code139: string = `
let n = 5;
function getFibonacciSq(n){
    if(n>=0){
    let arr = [0,1];
    for(let i = 2; i<=n; i++){
        let next = arr[i-1] + arr[i-2];
         if(n<next){
            break;
        }
        arr.push(next);
     }
     return n>0?arr:[0];
    }
}

let series = getFibonacciSq(n);
console.log(series);`;
  code140: string = `[ 0, 1, 1, 2, 3, 5 ]`;
  code141: string = `
let n = 10;
function getPowersofSq(n){
    if(n>=1){
    let arr = [];
    for(let i = 0; i<=n; i++){
        let next = 2**i;
         if(n<next){
            break;
        }
        arr.push(next);
     }
     return arr;
    }
}

let series = getPowersofSq(n);
console.log(series);`;
  code142: string = `[ 1, 2, 4, 8 ]`;
  code143: string = `
let n = 55;
function getTriangular(n){
    if(n>=1){
    let arr = [];
    for(let i = 1; i<=n; i++){
        let next = (i*(i+1))/2;
         if(n<next){
            break;
        }
        arr.push(next);
     }
     return arr;
    }
}

let series = getTriangular(n);
console.log(series);`;
  code144: string = `[1,  3, 6, 10, 15, 21, 28, 36, 45, 55]`;
  code145: string = `
function checkPrime(num) {
  if (num < 2) return false;
  for (i = 2; i < num; i++) { if (num % i === 0) return false; }
  return true;
}

function getPrime(num){
  let primeList = [];
  if(num>1){
  for(let i=0; i<=num; i++){
      if(checkPrime(i)){
          primeList.push(i);
      } 
    }   
  }
  return primeList;
}

let series = getPrime(30);
console.log(series);`;
  code146: string = `[2,  3,  5,  7, 11, 13, 17, 19, 23, 29]`;
  code147: string = `
let n = 100;
function getSquare(n){
    if(n>=1){
    let arr = [];
    for(let i = 1; i<=n; i++){
        let next = i*i;
         if(n<next){
            break;
        }
        arr.push(next);
     }
     return arr;
    }
}

let series = getSquare(n);
console.log(series);`;
  code148: string = `[1,  4,  9, 16,  25, 36, 49, 64, 81, 100]`;
  code188: string = `function reverseString(str) {
  let reversedStr = '';
  for (let i = str.length-1; i >= 0; i--) {
      reversedStr += str[i];
  }
  return reversedStr;
}

console.log(reverseString("Praveen")); 
// neevarP`;
  code189: string = `function PalindromeNum(num) {
  let numvalue = String(num);
  let reversedNum = '';
  for (let i = numvalue.length-1; i >= 0; i--) {
      reversedNum += numvalue[i];
  }
  if(numvalue===reversedNum){
      return +reversedNum;
  }else{
      return "Number is not Palindrome";
  }
}

console.log(PalindromeNum(123444321));
console.log(PalindromeNum(1234443210));
// 123444321
// Number is not Palindrome`;

}