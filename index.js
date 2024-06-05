// Given a binary tree represented as an array, write a function that calculates the sum of the left branch and the sum of the right branch, and returns the largest branch.
// If the left branch is larger, return 'Left'
// If the right branch is larger, return 'Right'
// If they are equal, return 0
// If the tree has 0 nodes, return 0
// -1 is a non-existent node

let arr = [3, 6, 2, 9, -1, 10]; // Left

const solution = (arr) => {
    // Type your solution here

    // console.log(arr);

    function filterArr(arr) {
        // rm root node
        arr.shift();
        // rm non-existant node
        let index = arr.findIndex(el => el == -1);
        arr.splice(index, 1);
        console.log("filtered array", arr);
    }

    function leftBranchSum(arr) {
        let startingIndex = 0;
        for (let i = startingIndex; i < arr.length; i+=2) {
            let sum =+ arr[i];
            return sum;
        }
    }

    function rightBranchSum(arr) {
        let startingIndex = 1;
        for (let i = startingIndex; i < arr.length; i+=2) {
            let sum =+ arr[i];
            return sum;
        }
    }

    filterArr(arr);

    // console.log(arr);

    let leftSum = leftBranchSum(arr);
    let rightSum = rightBranchSum(arr);

    // console.log(leftSum);
    // console.log(rightSum);

    function calcLrgstBranch(leftSum, rightSum) {
        let res = 'null';
        console.log(leftSum, rightSum, res);
        if (leftSum > rightSum) {
            let res = 'Left';
        } else if (leftSum < rightSum) {
            let res = 'Right';
        } else if (leftSum = rightSum){
            return 0;
        }
        return res;
        console.log(res);
    }
    calcLrgstBranch(leftSum, rightSum);

};

solution(arr);
