class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false

        const map: Record<string, number> = {}

        for (let char of s) {
            if (map[char] === undefined) {
                map[char] = 1
            } else {
                map[char] += 1
            }
        }

        for (let char of t) {
            if (map[char] === undefined || map[char] <= 0) {
                return false
            } else {
                map[char] -= 1
            }
        }

        return true
    }
}
