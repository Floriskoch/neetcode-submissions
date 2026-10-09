class Solution {
    /**
     * @param {string}
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const stringArray = s.split('')
        
        let maxSubstring = 0
        let j = 0
        const seen = new Set<string>()

        for (let i = 0; i < s.length; i++) {
            let currentChar = stringArray[i]

            while (seen.has(currentChar)) {
                seen.delete(stringArray[j])
                j += 1
            }
            seen.add(currentChar)

            maxSubstring = Math.max(maxSubstring, i - j + 1)
        }

        return maxSubstring
    }
}