function fizzbuzz(number) {
        let finalResult = ''

        if(number % 3 === 0) {
            finalResult = 'Fizz'
        }
    
        if(number % 5 === 0) {
            finalResult += 'Buzz'
        }

        if(!finalResult) {
            finalResult = number
        }
        
        return number === 0 ? number : finalResult

}

module.exports = fizzbuzz