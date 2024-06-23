/**
 * @param {string} s
 * @return {boolean}
 */
//tolowercase  stringi bütün harflerini küçüğe çevir
//replace string içerisinde bulunan non-alphanumeric(harf olmayan) kaldır. 

let input = ("Ey Edip, Adana'da pide ye.");

isPalindrome = function(s) {
    let pureString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let count = 0;
    for(i = 0; i < pureString.length / 2; i++){
        if(pureString[i] === pureString[pureString.length - 1 -count]){
        }else{
            return false;
        }
        count ++;
    }
    return true;
};

console.log(isPalindrome(input));
