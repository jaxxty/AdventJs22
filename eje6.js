function createCube(size) {
    let espacios = size
    let cuerpoSuperior = ""
    for(let i = 0; i<size; i++){
      espacios--
      cuerpoSuperior += " ".repeat(espacios)+"/"+"\\/".repeat(i)+"\\_".repeat(size)+"\\\n"
    }
    for(let i = size; i>0; i--){
      cuerpoSuperior += " ".repeat(size-i)+"\\"+"/\\".repeat(i-1)+"/"+"_/".repeat(size)+"\n"
    }
    return (cuerpoSuperior.slice(0,-1))
  }
  
  createCube(2)