function selectSleigh(distance, sleighs) {
    let res = Math.max(...sleighs.map(x => (x.consumption*distance)).filter(y => y<=20))
    if(res<0)return null
    return sleighs.filter(x=> x.consumption === res/distance).map(x => x.name)[0]
  }
  selectSleigh(30,  [
    { name: "Dasher", consumption: 0.3 },
    { name: "Dancer", consumption: 0.5 },
    { name: "Rudolph", consumption: 0.7 },
    { name: "Midu", consumption: 1 }
  ]) 
  selectSleigh(10, [
    { name: 'Pedrosillano', consumption: 1 },
    { name: 'SamarJaffal', consumption: 2 },
    { name: 'marcospage', consumption: 3 }
  ])
  selectSleigh(50, [
    { name: 'Pedrosillano', consumption: 1 },
    { name: 'SamarJaffal', consumption: 2 },
    { name: 'marcospage', consumption: 3 }
  ])
  