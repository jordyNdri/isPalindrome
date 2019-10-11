const word = 'ada';
function isPalindrome(word)
{
    let final = '';
    word.split("").forEach(elt => {
        final = elt + final;
    });
    if (final === word) return true;
    return false;
}
// var word = readline()
console.log(isPalindrome(word))
