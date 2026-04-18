/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let right = 0;
    let left = 0; 
    let max = 0;
    let container = new Set();

    while (right < s.length) {
        if (!container.has(s[right]) ) {
           container.add(s[right]);
           right++;

           let windowsize = right-left;
    
           if (windowsize > max) {
            max = windowsize;
           }
        } else {
            container.delete(s[left]);
            left++ ;

        }
    }

   return max; 
};

//Step-by-Step Working of the Algorithm
/*
-> First create two pointers
    left = 0  
    right = 0 

-> Create a variable max = 0
    this stores the maximum length of substring

-> Create a Set (container)
    this stores unique characters in current window

-> start a loop
    #while (right < s.length)
        * loop runs until right pointer reaches end of string

-> check condition
    If current character is NOT in set:
        #!container.has(s[right])

    -> add character to set
    -> move right pointer forward

    -> calculate window size
        #windowsize = right - left

    -> update max if needed
        if windowsize > max
            max = windowsize

-> else (character is already present)
    -> remove character at left pointer
        #container.delete(s[left])

    -> move left pointer forward
        #left++

    -> this shrinks the window until duplicate is removed

--loop completes--

-> return max
    this is the length of longest substring without repeating characters

*/












