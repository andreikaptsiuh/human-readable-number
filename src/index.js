module.exports = function toReadable (number) {
    const num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
                'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
                'eighteen', 'nineteen'] 
    const numTee = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    if(num.length > number) return `${num[number]}`
    number = String(number)
    let answer = ''
    if(number.length === 2){
        answer += `${numTee[+number[0] - 2]}`
        if(+number[1] != 0) answer += ` ${num[+number[1]]}`
    }
    if(number.length === 3){
        answer += `${num[+number[0]]} hundred`
        if(+number[1] == 1) answer += ` ${num[+(number[1] + number[2])]}`
        else{
            if(+number[1] != 0) answer += ` ${numTee[+number[1] - 2]}`
            if(+number[2] > 0) answer += ` ${num[+number[2]]}`
        }
    }
    return answer
}
