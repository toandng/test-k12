function printChristmasTree(n, character) {
    if (typeof n !== 'number' || n <= 0 || n >= 100 || typeof character !== 'string' ) {
        return 'Invalid';
    }
    let tree = '';
    for (let i = 0; i < n; i++) {
        const spaces = ' '.repeat(n - i - 1);
        const chars = character.repeat(2 * i + 1);
        tree += spaces + chars + spaces + '\n';
    }
    const trunkSpaces = ' '.repeat(n - 1);
    tree += trunkSpaces + character + trunkSpaces + '\n';
    return tree;
}
console.log(printChristmasTree(5,"*"));

