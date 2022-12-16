// Primer intento del ejercicio, aplicando logica simple y muchas iteracioes 10pts
function countTime(leds) {
    let res = false
    let contador = 0
    while(leds.includes(0)){
      for(let i = 0; i < leds.length-1;i++){
        if(leds[i]===1&&leds[i+1]===0){
          if(i+1==leds.length-1){
            leds[i+1]=1
            continue
          }
          leds[i+1]=1
          res = true
          i=i+1
        }
        if(leds[leds.length-1]===1&& leds[0]===0){
          leds[0]=1
          res = true
        }
        if(new Set(leds).size === 1){break}
      }
    if(res = true)contador++
      res = false
  }
      return contador*7
  }

// Segunda intento 200pts
function countTime(leds) {
let arr = leds.join("").split(1);
arr[0] += arr.pop();

return (Math.max(...arr.map(x=> x.length))*7)
}
countTime([0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0])
  
  
  