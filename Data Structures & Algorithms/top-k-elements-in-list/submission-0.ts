class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // frequency map { 1: 3, 2: 6, 3: 1}
        const frequencyMap: Record<number, number> = {}

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i]

            if (frequencyMap[num] !== undefined) {
                frequencyMap[num] += 1
            } else {
                frequencyMap[num] = 1
            }
        }

        // get values and sort them, take k number of items from the list
        const mapKeys = Object.keys(frequencyMap) as unknown as number[]
        const sortedKeys = mapKeys.sort((a,b) => frequencyMap[b] - frequencyMap[a])

        return sortedKeys.slice(0, k)
    }
}
