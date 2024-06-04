// Given a binary tree represented as an array, write a function that calculates the sum of the left branch and the sum of the right branch, and returns the largest branch.
// If the left branch is larger, return 'Left'
// If the right branch is larger, return 'Right'
// If they are equal, return 0
// If the tree has 0 nodes, return 0
// -1 is a non-existent node
const solution = (arr) => {
    // Type your solution here
    console.log(arr); // Inspect input
    let branch = '';

    function sumBranch(arr, branch) {
        let branchSum = 0;
        // ignore root node and start at first left node count
        let startingIndex = 1;
        // move index start to first right node count
        if ((branch = "right")) startingIndex = 2;

        for (let i = startingIndex; i < arr.length; i += 2) {
            if (arr[i] == -1) {
                return "";
            } else {
                branchSum += arr[i];
            }
        }
        return branchSum;
    }

    function leftBranchSum(arr) {
        let countStart = "left";
        let branchSum = sumBranch(arr, countStart);
        return branchSum;
    }

    function rightBranchSum(arr) {
        let countStart = "right";
        let branchSum = sumBranch(arr, countStart);
        return branchSum;
    }

    leftSum = leftBranchSum(arr);
    rightSum = rightBranchSum(arr);
    // Sum of branches is equal and asserts ""
    if ((leftSum == rightSum)) return "";
    // Left branch is largest sum and asserts "Left"
    if (leftSum > rightSum) return "Left";
    //  Right branch is largest sum and asserts "Right"
    if (rightSum > leftSum) return "Right";
    // Equal branches, empty tree, only root node asserts ""
    if (arr.length == 0 || arr.length == 1) return "";
};

// solution(arr);

module.exports = solution;