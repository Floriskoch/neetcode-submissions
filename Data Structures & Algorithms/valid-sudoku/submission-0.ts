class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rowMap = new Map<number, Set<string>>()
        const columnMap = new Map<number, Set<string>>()
        const boxMap = new Map<string, Set<string>>()

        // loop through rows
        for (let i = 0; i < board.length; i++) {
            const row = board[i]

            // loop through cells
            for (let j = 0; j < row.length; j++) {
                const cell = row[j]
                
                if (cell === '.') continue

                if (!rowMap.has(i)) {
                    rowMap.set(i, new Set())
                }
                const rowSet = rowMap.get(i)

                if (!columnMap.has(j)) {
                    columnMap.set(j, new Set())
                }
                const columnSet = columnMap.get(j)

                const boxMapKey = `${Math.floor(i/3)},${Math.floor(j/3)}`
                if (!boxMap.has(boxMapKey)) {
                    boxMap.set(boxMapKey, new Set())
                }
                const boxSet = boxMap.get(boxMapKey)

                if (rowSet.has(cell) || columnSet.has(cell) || boxSet.has(cell)) {
                    return false
                }

                rowSet.add(cell)
                columnSet.add(cell)
                boxSet.add(cell)
            }
        }

        return true
    }   
}
