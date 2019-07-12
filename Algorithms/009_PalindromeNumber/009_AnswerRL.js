/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    // Edge cases: 
    // If x is negative, then cannot be a palindrome since negative sign is only at one end.
    // If x has zero at end and x is not the single digit 0, then it cannot be a palindrome
    // since integers never have leading zeros.
    let reverted = 0;
    //console.log("reverted = " + reverted);
    //console.log("x = " + x);
    if (x < 0 || ((x%10 == 0) && (x !== 0))) {
      //console.log("x = " + x);
      return false;
    }
    while (x > reverted) {
        reverted = reverted*10 + x%10;
        //console.log("while loop: reverted = " + reverted);
        x = parseInt(x/10);
        //console.log("while loop: x = " + x);
    }
    // Exit loop when x drops below reverted.
    // If x started with an odd number of digits, 
    // then the RHS reverted will have an extra digit more than the
    // LHS truncated by the end of the while loop execution.
    // Simply divide the RHS reverted by 10 to discard that last odd middle digit 
    // in order to compare to the LHS truncated to determine palindrome in odd digits case.
    return ((x == reverted) || (x == parseInt(reverted/10)));
};
