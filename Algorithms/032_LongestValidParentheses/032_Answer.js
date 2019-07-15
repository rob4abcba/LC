/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    console.log("s = ", s);
    if (!s || !s.length) { return 0; }

    /* We will store the position of every invalid parenthesis.
       Once we have that, the solution is simply the longest
       subarray between two invalid parentheses */
    const invalids = new Set();

    /* We stack the opening parentheses as we find them,
       and pop them we meet the corresponding closing
       parenthesis. Note that a closing ) always matches the
       latest opening ( one, hence the choice of a stack */
    const stack = [];

    for (let i=0; i<s.length; i++) {
        console.log("i = ", i);
        console.log("s[i] = ", s[i]);
        if (s[i] === '(') {
            stack.push(i);
            console.log("stack.push(",i,")");
        } else {
            // If we are closing an opening parenthesis, pop it out
            if (stack.length) {
                stack.pop();
                console.log("stack.pop()");
            } else {
                /* Otherwise there is nothing to close,
                   hence this parenthesis is invalid */
                invalids.add(i);
                console.log("invalids.add(",i,")");
            }
        }
    }

    /* Any remaining opening parenthesis that has not been closed is
       automatically invalid */
    while (stack.length) {
        invalids.add(stack.pop());
    }
    
    // Here we just count how many valid in between every invalid
    let max = 0, count = 0;
    for (let i=0; i<=s.length; i++) {
        if (i < s.length && !invalids.has(i)) {
            count++;
        } else {
            max = Math.max(max, count);
            count = 0;
        }
    }
    return max;
};

s = ')()()(';
longestValidParentheses(s);
console.log(s);
console.log(longestValidParentheses(s));
