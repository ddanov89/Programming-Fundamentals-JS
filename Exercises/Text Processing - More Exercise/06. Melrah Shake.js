function merlahShake(input) {
 
    let text = input.shift();
    let pattern = input.shift();
 
    while (pattern.length > 0) {
 
        let firstMatch = text.indexOf(pattern);
        let lastMatch = text.lastIndexOf(pattern);
 
        if ((firstMatch > -1 && lastMatch > -1) && firstMatch !== lastMatch) {
 
            text = text.split('');
            text.splice(firstMatch, pattern.length);
            text = text.join('');
            lastMatch = text.lastIndexOf(pattern);
            text = text.split('')
            text.splice(lastMatch, pattern.length)
            let removeFromPatt = pattern[Math.floor(pattern.length / 2)]
            pattern = pattern.replace(removeFromPatt, '');
            text = text.join('')
 
            console.log('Shaked it.');
        } else {
            break;
        }
    }
    console.log('No shake.');
    console.log(text);
}
merlahShake(['astalavista baby', 'sta']);
merlahShake(['##mtm!!mm.mm*mtm.#', 'mtm']);
