class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const indexHash: Record<number, number> = {}

        for (let i = 0; i < nums.length; i++) {
            let curr = nums[i]
            let diff = target - curr

            if (indexHash[diff] !== undefined) {
                return [indexHash[diff], i]
            }

            indexHash[nums[i]] = i
        }
    }



}


/**
 * 
 * {
 *   3: 0,
 *   4: 1,
 *   5: 2,
 *   6: 3
 * }
 * 
 * target - cur = 7 - 4 = 3
 */