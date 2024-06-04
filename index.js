// Given a binary tree represented as an array, write a function that calculates the sum of the left branch and the sum of the right branch, and returns the largest branch.
// If the left branch is larger, return 'Left'
// If the right branch is larger, return 'Right'
// If they are equal, return 0
// If the tree has 0 nodes, return 0
// -1 is a non-existent node

let arr = [3, 6, 2, 9, -1, 10]; // Left

const solution = (arr) => {
    // Type your solution here
    let res = "Left";
    console.log(arr, res);
    function filterArr(arr) {
        console.log("filtered array", arr);
    }
    filterArr(arr);

    return arr;
};

solution(arr);

return arr;
