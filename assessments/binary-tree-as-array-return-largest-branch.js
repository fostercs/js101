// Given a binary tree represented as an array, write a function that calculates the sum of the left branch and the sum of the right branch, and returns the largest branch.
// If the left branch is larger, return 'Left'
// If the right branch is larger, return 'Right'
// If they are equal, return 0
// If the tree has 0 nodes, return 0
// -1 is a non-existent node


const solution = (arr) => {
    // Type your solution here

    function findBranchSum (arr, branch) {
        let emptyRes = '';
        let branchSum = 0;
        let startingIndex = 1; // We know we will ignore the root, and that we count from left to right.
        if (branch = 'Left') {
            startingIndex = 1; // Set startingIndex;
        } else if (branch = 'Right') {
            startingIndex = 2; // Right branch count start index.
        } else {
        return emptyRes;
        }

        // Remove non-existant nodes
        for (let i = 0; i < arr.length; i++) {
            arrayIndexValue = arr[i];
            if (arrayIndexValue == -1) {
                let index = arr.indexOf(arr[i]);
                arr.splice(index, 1);
            }
        }

        console.log("arr after removing -1", arr)

        for (let i = startingIndex; i < arr.length; i +=2) {
            branchSum += arr[i];
        }
//         return branchSum;
//         console.log(arr);
        console.log("branch sum", branchSum, " on branch ", branch);
        return branchSum;
    };


    function branchAddr (arr, branch) {
        if (branch = 'Left') {
            let branchName = 'Left';
            findBranchSum(arr, branchName);
        } else if (branch = 'Right') {
            let branchName = 'Right';
            findBranchSum(arr, branchName);
        } else
        return 0;
    }

    let leftBranchRes = "Left";
    let rightBranchRes = "Right";

    let leftBranchGrandSum = branchAddr(arr, rightBranchRes);
    let rightBranchGrandSum = branchAddr(arr, leftBranchRes);

    console.log("branch sums ", leftBranchGrandSum, rightBranchGrandSum);

    if (rightBranchGrandSum > leftBranchGrandSum) {
        return branch;
    } else  if (rightBranchGrandSum < leftBranchGrandSum) {
    return leftBranchRes;
    }
};
