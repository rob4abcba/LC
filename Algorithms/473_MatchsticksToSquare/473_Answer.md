# Solution

**Intuition**
Suppose we have 1,1,1,1,2,2,2,2,3,3,3,3 as our set of matchsticks. In this case a square of side 66 can be formed and we have 4 matchsticks each of 1, 2 and 3 and so we can have each square side formed by 3 + 2 + 1 = 6.


We can clearly see in the diagram above that the 3 matchsticks of sizes 1, 2 and 3 combine to give one side of our resulting square.

This problem boils down to splitting an array of integers into 44 subsets where all of these subsets are:

mutually exclusive i.e. no specific element of the array is shared by any two of these subsets, and
have the same sum which is equal to the side of our square.
We know that we will have 44 different subsets. The sum of elements of these subsets would be \frac{1}{4}\sum_{}^{} arr 
4
1
​	
 ∑ 
​	
 arr. If the sum if not divisible by 44, that implies that 44 subsets of equal value are not possible and we don't need to do any further processing on this.

The only question that remains now for us to solve is:

what subset a particular element belongs to?

If we are able to figure that out, then there's nothing else left to do. But, since we can't say which of the 44 subsets would contain a particular element, we try out all the options. 


## Approach 1: Depth First Search
It is possible that a matchstick can be a part of any of the 4 sides of the resulting square, but which one of these choices leads to an actual square is something we don't know.

This means that for every matchstick in our given array, we have 44 different options each representing the side of the square or subset that this matchstick can be a part of.

We try out all of them and keep on doing this recursively until we exhaust all of the possibilities or until we find an arrangement of our matchsticks such that they form the square.

## Algorithm

As discussed previously, we will follow a recursive, depth first approach to solve this problem. So, we have a function that takes the current matchstick index we are to process and also the number of sides of the square that are completely formed till now.

If all of the matchsticks have been used up and 4 sides have been completely formed, that implies our square is completely formed. This is the base case for the recursion.

For the current matchstick we have 4 different options. This matchstick at indexindex can be a part of any of the sides of the square. We try out the 4 options by recursing on them.

If any of these recursive calls returns TrueTrue, then we return from there, else we return FalseFalse
