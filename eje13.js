function getFilesToBackup(lastBackup, changes) {
    return [...new Set(changes.filter(x => x[1]>lastBackup).map(x => x[0]).sort((a,b)=>a-b))]
    // return [...new Set(changes.filter(x => x[1]>lastBackup).map(x => x[0]).sort())]
    console.log(changes)
  }
  
  getFilesToBackup(1546300800, [
    [ 3, 1546301100 ],
    [ 2, 1546300800 ],
    [ 1, 1546300800 ],
    [ 1, 1546300900 ],
    [ 1, 1546301000 ]
  ])  
  
// En este caso encontramos que es mejor hacer un sort utilizando parametros (a,b).
// Ya que el sort basico sort(), tiende a tener fallos de orden en arrays que contengan objetos 