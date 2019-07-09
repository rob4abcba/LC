/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Approach 1: Brute Force in JavaScript
var twoSumBruteForce = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return [i, j]
                }
        }
    } 
};

// Approach 2: Two-pass Hash Table in JavaScript
const twoSumTwoPass = function(nums, target) {
    const comp = {};
    for(let i=0; i<nums.length; i++){
        comp[target-nums[i]] = i
    }
    for(let i=0; i<nums.length; i++){
        if(comp[nums[i]]>=0 && comp[nums[i]] != i){
            return [ comp[nums[i] ] , i]
        }
    }
};

// Approach 3a: One-pass Hash Table in JavaScript
const twoSum = function(nums, target) {
    const map = {};
    for(let i=0; i<nums.length; i++){
        if(map[target - nums[i] ]>=0){
            return [ map[target - nums[i] ], i ]
        }
        map[nums[i]] = i
    }
};

// Approach 3b: One-pass Hash Table in JavaScript
const twoSumOnePass = function(nums, target) {
    const comp = {};
    for(let i=0; i<nums.length; i++){
        if(comp[nums[i] ]>=0){
            return [ comp[nums[i] ] , i]
        }
        comp[target-nums[i]] = i
    }
};
