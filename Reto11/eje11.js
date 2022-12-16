function getCompleted(part, total) {
  let cont = 1
  const p = (parseInt(part.slice(0,2))*3600+parseInt(part.slice(3,5))*60+parseInt(part.slice(6,)))
  const t = (parseInt(total.slice(0,2))*3600+parseInt(total.slice(3,5))*60+parseInt(total.slice(6,)))
  while((t/p*cont)%1!==0){
    cont++
  }
return cont+"/"+t/p*cont
}
getCompleted('02:20:20', '03:30:30')
getCompleted('02:00:00', '04:00:00')