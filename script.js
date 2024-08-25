let a = document.querySelector("#src")
 let b = a.src;

//  var v = 0
//  for (const c of b) {
//     console.log(c,v);
//     v++;
//  }


let c = ''
for(let i=22;i<b.length;i++){
    c += b[i]
}
console.log(c);

let h1 = document.querySelector("#h1").innerHTML = c;