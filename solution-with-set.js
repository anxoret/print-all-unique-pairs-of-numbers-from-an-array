function searchPairs(array, N) {

    let arrayOfPairs = [];
    let arrayOfUniqueNumbers = [];
    
    new Set(array).forEach(number => {
        arrayOfUniqueNumbers.push(number);
    });;

    for (let current = 0; current < arrayOfUniqueNumbers.length; current++) {

        for (let next = current + 1; next < arrayOfUniqueNumbers.length; next++) {
            if (arrayOfUniqueNumbers[current] + arrayOfUniqueNumbers[next] == N) {

                arrayOfPairs.push([arrayOfUniqueNumbers[current], arrayOfUniqueNumbers[next]]);
            }
        }

    }

    return arrayOfPairs;

};

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
const k = 5;

console.log(searchPairs(arr, k));

//OUT: >> [[1, 4], [2, 3]]