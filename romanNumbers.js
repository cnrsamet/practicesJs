var romanToInt = function(s) {
    let romanNumbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    total = 0;
    for (let i = 0; i < s.length; i++) {
        let firstValue = romanNumbers[s[i]];
        let otherValue = romanNumbers[s[i+1]];

        if (firstValue < otherValue) {
            total -= firstValue; // total'dan çıkar
        } else {
            total += firstValue; // total'a ekle
        }       
    }
    return total;
};

console.log(romanToInt("XX"));