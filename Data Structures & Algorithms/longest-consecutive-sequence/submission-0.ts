class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numberSet = new Set<number>(nums)
        let globalSequence = 0

        for (let num of numberSet) {
            if (!numberSet.has(num - 1)) {
                let localNum = num
                let localSequence = 0

                while (numberSet.has(localNum)) {
                    localSequence += 1
                    localNum += 1
                }

                if (localSequence > globalSequence) {
                    globalSequence = localSequence
                }
            }
        }

        return globalSequence
    }
}
