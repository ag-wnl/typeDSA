function binary_search(arr : number[], target : number) : boolean {
    
    let lo = 0;
    let hi = arr.length; 

    while(lo < hi) {
        const m = Math.floor(lo + (hi - lo) / 2);
        const mid_value = arr[m];

        if(mid_value == target) return true;
        else if(target > mid_value) lo = m + 1;
        else hi = m;
    }

    return false;
}

const ans = binary_search([1,2,32,41,52], 33);
console.log(ans);
