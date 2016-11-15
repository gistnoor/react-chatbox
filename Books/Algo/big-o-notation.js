// normal function //
function findDigit(str) {
    for (var i = 0; i < str.length; i++) {
        if(/^\d$/.test(str[i])) {
            return i;
        }
    }
}

// formated function
function findDigit(str) {
    var min = 0, max = str.length - 1, currentIndex, currentCharacter;
    while (min < max) {
        currentIndex = Math.floor((min + max) / 2);
        currentCharacter = str[currentIndex];
        if (/^\d$/.test(currentCharacter)) {
            return currentIndex;
        } else if ( currentCharacter < "0" ) {
            min = currentIndex + 1;
        } else {
            max = currentIndex;
        }
    }
}

//Selection Sort 
// O(n2) -> Quadratic (Example : Selection Sort)
function selectionSort(a) {
    var i, j, tmp, imin;
    for (i = 0; i < a.length; i++) {
        imin = i;
        for (j = i + 1; j < a.length; j++) {
            if (a[j] < a[imin]) {
                imin = j;
            }
        }
        if (imin != i) {
            swap(a, i, imin);
        }
    }
}

Most common complexities
O(1) -> Constant
O(log(n)) -> Logarithmic
O(n) -> Linear
O(n2) -> Quadratic (Example : Selection Sort)
O(2n) -> Exponential (Rare in practice)

Combining Complexities
E.g-> Iterate through each character of each string in an array
O(n x m)
Fast Sorting
O(n log(n)) -> linearithmic or linear logarithmic


