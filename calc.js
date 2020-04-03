let array = [{principal: 2500, time:1.8},
        {principal:1000, time:5},
        {principal: 3000, time:1},
        {principal: 2000, time:3}]

function interestCalculator(arr) {
    arr.forEach(function(el , i, arr){
        if(el.principal >= 2500 && (el.time > 1 && el.time< 3 )){
            el.rate = 3;
        } else if(el.principal >= 2500 && (el.time >= 3)){
            el.rate = 4;
        } else if(el.principal < 2500 && (el.time <= 1 )){
            el.rate = 2
        } else {
            el.rate = 1
        }
        el.interest = (el.principal*el.rate*el.time)/100
    })
    console.log(arr)
    return arr
}

interestCalculator(array)
