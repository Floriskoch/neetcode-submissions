class MinStack {
    private stack: number[][] = []

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        const newMin = this.stack.length === 0 
            ? val 
            : Math.min(val, this.stack[this.stack.length - 1][1])
        
        this.stack.push([val, newMin])
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1][0]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.stack[this.stack.length - 1][1]
    }
}
