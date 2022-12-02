const { getData, sum } = require('../utils')

const data = getData(__dirname)

function getElves(input) {
    return input.trim().split('\n\n').map(str => str.split('\n').map(Number))
}

function getGreatestCaloriesSum(input) {
    return Math.max(...getElves(input).map(sum))
}

function getGreatestCaloriesSumOfTopThree(input) {
    const sums = getElves(input).map(sum).sort((a, b) => b - a)

    return sum(sums.slice(0,3))
}
module.exports = {
    getElves,
    getGreatestCaloriesSum,
    getGreatestCaloriesSumOfTopThree,
}

const firstAnswer = getGreatestCaloriesSum(data)
console.log(firstAnswer)

const secondAnswer = getGreatestCaloriesSumOfTopThree(data)
console.log(secondAnswer)