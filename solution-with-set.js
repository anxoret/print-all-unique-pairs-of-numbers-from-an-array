function searchPairs(array, N) {

    let arrayOfPairs = [];
    let arrayOfUniqueNumbers = [];
    
    new Set(array).forEach(number => {
        arrayOfUniqueNumbers.push(number);
    });;

    for (let currentElement = 0; currentElement < arrayOfUniqueNumbers.length; currentElement++) {

        for (let nextElement = currentElement + 1; nextElement < arrayOfUniqueNumbers.length; nextElement++) {
            if (arrayOfUniqueNumbers[currentElement] + arrayOfUniqueNumbers[nextElement] == N) {

                arrayOfPairs.push([arrayOfUniqueNumbers[currentElement], arrayOfUniqueNumbers[nextElement]]);
            }
        }

    }

    return arrayOfPairs;

};

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
const k = 5;

console.log(searchPairs(arr, k));

//OUT: >> [[1, 4], [2, 3]]