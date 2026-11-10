class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let leftPointer = 0
        let rightPointer = numbers.length - 1
        let sum = numbers[leftPointer] + numbers[rightPointer]

        while (leftPointer < rightPointer) {
            if (sum > target) {
                rightPointer -= 1
            }

            if (sum < target) {
                leftPointer += 1
            }

            sum = numbers[leftPointer] + numbers[rightPointer]

            if (sum === target) {
                return [leftPointer + 1, rightPointer + 1]
            }
        }

    }
}
