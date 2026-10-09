class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let a = 0
        let b = s.length - 1

        while (a < b) {

            while (a < b && !isAlphaNumeric(s[a])) {
                a++;
            }

            while (a < b && !isAlphaNumeric(s[b])) {
                b--;
            }

            if (s[a].toLowerCase() !== s[b].toLowerCase()) {
                return false
            }

            a++
            b--
        }

        return true
    }
    
}

function isAlphaNumeric(ch: string): boolean {
    return /^[a-z0-9]$/i.test(ch);
}
