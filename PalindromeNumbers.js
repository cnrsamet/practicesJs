function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}


let input = [1,2];
const isPalindrome = function(head) {
    if (!head || !head.next) return true;
    
};

console.log(isPalindrome(input));