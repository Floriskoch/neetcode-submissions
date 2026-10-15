class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // canonical keys and values
        const map: Record<string, string[]> = {}

        // loop through strings
        for (let i = 0; i < strs.length; i++) {
            const word = strs[i]
            const canonicalWord = word.split('').sort().join()

            if (!map[canonicalWord]) {
                map[canonicalWord] = [word]
            } else {
                map[canonicalWord].push(word)
            }
        }

        return Object.values(map)
    }
}
