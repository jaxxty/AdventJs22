function wrapping(gifts) {
    let final = []
    gifts.map(gift => {
      let cover = "*".repeat(gift.length+2)
      final.push(cover+"\n*"+gift+"*\n"+cover)
    })
    return final
  }
  