let n = 3
console.log("nhập n")
function giaithua(n) {
    let x = 1
    for (let i = 1; i <= n; i++) {
      x *= i;
    }
    console.log(x)
  }

giaithua(n)

let x = 5
function vetamgiac(x){
  let kq = ""
  let a = x
  let b = 0
  for(let i = 0; i < x; i++) {
    for (let j = 0; j < a; j++){
      kq = kq + "  "
    }
    kq = kq + "*"
    if (i < x-1){
      for (let k = 0; k < b; k++){
        kq = kq + "    "
      }
      if (i != 0){
        kq = kq + "*"
      }
    }
    else{
      for (let i = 0; i < b*4; i++){
        kq = kq + "*"
      }
    }
    console.log(kq)
    kq = ""
    a--
    b++
  }
}
vetamgiac(x)








