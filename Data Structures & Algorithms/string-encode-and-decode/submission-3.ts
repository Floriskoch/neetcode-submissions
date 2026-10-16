class Solution {
    private delimiter = '#'

    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encodedString = ''

        for (let str of strs) {
            encodedString += `${str.length}${this.delimiter}${str}`
        }

        return encodedString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const decodedStrings = []
        let i = 0
        
        while (i < str.length) {
            let delimiterIndex = i

            while (str[delimiterIndex] !== this.delimiter) {
                delimiterIndex++
            }

            const stringLength = Number(str.slice(i, delimiterIndex))
            const startIndex = delimiterIndex + 1
            const endIndex = startIndex + stringLength

            decodedStrings.push(str.slice(startIndex, endIndex))

            i = endIndex
        }

        return decodedStrings
    }
}
