const {
    getElves,
    getGreatestCaloriesSum,
    getGreatestCaloriesSumOfTopThree,
} = require('./')

const input = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`

test('getElves', () => {
    expect(getElves(input)).toEqual([
        [1000, 2000, 3000],
        [4000],
        [5000, 6000],
        [7000, 8000, 9000],
        [10000],
    ])
})

test('getGreatestCaloriesSum', () => {
    expect(getGreatestCaloriesSum(input)).toEqual(24000)
})

test('getGreatestCaloriesSumOfTopThree', () => {
    expect(getGreatestCaloriesSumOfTopThree(input)).toEqual(45000)
})