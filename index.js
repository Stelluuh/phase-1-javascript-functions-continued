function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(par2 = "*"){
    return function(par1 = "special"){
        return `You are ${par2}${par1}${par2}!`
    }
}

