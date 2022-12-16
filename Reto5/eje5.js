function getMaxGifts(giftsCities, maxGifts, maxCities) {
    let maxGiftsValid = 0
    const cityLength = giftsCities.length
        giftsCities.map( () => {
            let cityCount = 0
            let acc = 0
            for(let i = 0; i < cityLength; i++) {
                if(cityCount === maxCities) break
                if(acc + giftsCities[i] <= maxGifts) {
                    acc += giftsCities[i]
                    cityCount++
                }
            }
            if(acc > maxGiftsValid) maxGiftsValid = acc
            giftsCities.push(giftsCities[0])
            giftsCities.shift()
            console.log(giftsCities)
        })
    return maxGiftsValid
}



getMaxGifts([12, 3, 11, 5, 7], 20, 3) 