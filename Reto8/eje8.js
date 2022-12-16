function checkPart(part) {
    let res = false
    if(part.split("").reverse().join("") === part){return true};
    for(let i = 1; i<=part.length; i++){
      let nueva = part.slice(0,i-1)+part.slice(i,part.length)
        if(nueva.split("").reverse().join("") === nueva){
          res = true
        }
    }
    return res
  }
  
  checkPart("midieim");
  
  
  