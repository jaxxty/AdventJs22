function checkJump(heights) {
    let res = []
    let p1 = (heights.slice(0,heights.indexOf(Math.max(...heights))))
    let p2 = (heights.slice(heights.indexOf(Math.max(...heights))+1))
    res.push(p1,p2)
    let hu = heights.splice(-res[1].length).join("")
    let ru = res[1].sort().reverse().join("")
    let rs = res[0].join("")
    let hs = heights.splice(0,res[0].length).sort().join("")
    
    if(res[0].length===0||res[1].length===0)return false
    if(rs===hs&&hu===ru){
      return true
  }
      return false
  }
  
  checkJump([1, 1000, 900, 800])
  