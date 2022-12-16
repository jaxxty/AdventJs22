// Primer codigo 10pts
function getGiftsToRefill(a1, a2, a3) {
  let arr = []
  let array = [...arguments]
  let res = []
  array.map(x => {
    Array.from(new Set(x)).forEach(y => arr.push(y))
  })
  let cont = 0
  for(let i = 0; i<arr.length; i++){
    let pos = arr.indexOf(arr[i])
    while (pos != -1) {
      cont++
      pos = arr.indexOf(arr[i], pos + 1);
    }
    if(cont===1){
      res.push(arr[i])
    }
    cont = 0
  }
  return res
 
}

// Segundo codigo mejorado 120pts
function getGiftsToRefill(a1, a2, a3) {
    return [...new Set(a1.concat(a2).concat(a3))].filter(i => a1.includes(i) + a2.includes(i) + a3.includes(i) === 1 );
  }

getGiftsToRefill( ['bici', 'coche', 'bici', 'bici'], ['coche', 'bici', 'muñeca', 'coche'],  ['bici', 'pc', 'pc'])