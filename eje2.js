
function countHours(year, holidays) {
    let contador = 0
    holidays.map(dia => {
      let fecha = new Date(year+"/"+dia)
      if(fecha.getDay() >= 1 && fecha.getDay() <=5) contador++
    })
    return(contador*2)
  }