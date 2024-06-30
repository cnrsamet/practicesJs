let input = "   fly me   to   the moon  ";

var lengthOfLastWord = function(s) {
    value = s.trim();
    const valueArray = s.split(" ");
    for(i = valueArray.length - 1; i >= 0; i--){
        if(valueArray[i] !== ""){
            return valueArray[i].length;
        }
    }
};

console.log(lengthOfLastWord(input));