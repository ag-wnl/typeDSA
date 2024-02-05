// searching for a needle in a haystack : O(N)

function linearSearch(haystack : number[], needle : number) {
    for(let i=0; i<haystack.length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}

const ans = linearSearch([1,2,3,4,5], 1);
console.log(ans);
