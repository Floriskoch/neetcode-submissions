class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        // if odd then cannot be valid
        if (s.length % 2 == 1) {
            return false
        }

        const charMap = new Map<string, string>()
        charMap.set('(', ')')
        charMap.set('{', '}')
        charMap.set('[', ']')

        const stack: string[] = []

        for (let i = 0; i < s.length; i++) {
            let char = s[i]
            if (charMap.has(char)) {
                stack.push(charMap.get(char)!)
            } else {
                if (stack.pop() !== char) {
                    return false
                }
            }
        }

        return stack.length === 0
    }
}