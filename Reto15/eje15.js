function decorateTree(base) {
    let res = []
    let casos = ["B","P","R"]
    res.push(base)
    let fila = ""
    while(res.length !== base.split(" ").length){
    for(let i = 0; i<res[0].length-1; i+=2){
      if(res[0][i] === res[0][i+2]){
        fila+=res[0][i]
      }else{
        fila+=casos.filter(x => [res[0][i],res[0][i+2]].indexOf(x)===-1)[0]
      }
    }
    res.unshift(fila.split("").join(" "))
    fila =""
  }
    return res
  }
  
  decorateTree('B B')  