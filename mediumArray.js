// 1. Container with most water. 

// Statement : You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
// Input: height = [1,1]
// Output: 1

// Approach ->>>>> Two pointer approach 
const maxArea = (nums) => {
    let left = 0;
    let right = nums.length - 1;
    let maxArea = 0;

    while (left < right) {
        // Calculate the area formed by lines at left and right
        let currentArea = Math.min(nums[left], nums[right]) * (right - left);
        maxArea = Math.max(maxArea, currentArea);

        // Move the pointer pointing to the smaller height
        if (nums[left] < nums[right]) {
            left++
        } else {
            right--
        }
    }
    return maxArea
}

// 2. Combination Sum 

// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
// frequency of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

// Example 1:
// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.

// Example 2:
// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]

// Example 3:
// Input: candidates = [2], target = 1
// Output: []

const combinationSum = (candidates, target) => {
    let result = [];

    const backtrack = (remainingSum, combination, startIndex) => {
        if (remainingSum === 0) {
            result.push([...combination]);
            return;
        }

        if (remainingSum < 0) return;

        for (let i = startIndex; i < candidates.length; i++) {
            combination.push(candidates[i]);
            backtrack(remainingSum - candidates[i], combination, i);
            combination.pop()
        }
    }
    backtrack(target, [], 0);
    return result
}

// 119. Pascal's Triangle II

// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]
 

// Constraints:

// 0 <= rowIndex <= 33
 

// Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?

var getRow = function(rowIndex) {
    let row = [1];  // Initialize the first element as 1
   for (let i = 1; i <= rowIndex; i++) {
       row[i] = 1;  // Set the last element of each row to 1
       // Update elements from the end to avoid overwriting values needed for the next computation
       for (let j = i - 1; j > 0; j--) {
           row[j] = row[j] + row[j - 1];  // Update current element based on the sum of two above
       }
   }
   return row;
};