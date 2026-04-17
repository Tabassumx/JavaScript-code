
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(0);
    let end = result;
    let carry= 0;
    while(l1 !=null || l2 != null) {
        let sum = carry;

        if (l1 !=null) {
            sum += l1.val;
            l1 = l1.next;
        }
         if (l2 !=null) {
            sum += l2.val;
            l2 = l2.next;
         }

        carry = Math.floor(sum/10);
        sum = sum% 10;

        end.next= new ListNode(sum);
        end = end.next;
    }

     /*if (carry > 0)
    end.next = new ListNode(carry);*/ // correct  but runs slower
    
    if(carry== 1) end.next = new ListNode(1);
     return result.next;
};
//Step-by-Step Working of the Algorithm
/*
-> First  create a variable (result) and assign it a dummy ListNode (0)
    This will help us build the answer easily
-> Also create another pointer end to track the last node
-> Make a variable carry = 0
    This stores the extra value when sum > 9
-> make a loop 
    Use a while loop
         #while (l1 != null || l2 != null)
           *|| means OR gate   runs till both becomes false
      The loop stops only when both l1 and l2 become null

-> create a variable to start sum 
        #sum = carry
  -> take conditional statements -  if
    If l1 != null:
    Add l1.val to sum
    Move l1 = l1.next

    if l1 isnt null this will run 
    initially the pointer is at starting digit we should add the digit to the sum and make the pointer to move next 

-> same for l2 as l1 

-> update the carry which is initially set to 0 
      #carry = Math.floor(sum / 10)
        *Math.floor(sum / 10) gives the carry (tens digit) by removing the decimal part after division.
-> get last digit 
      #digit = sum % 10

-> add to result list
create a new node 
attach it to the result list using end.next
Then move the end pointer forward
--loop complets--
-> if there is still a carry left add it as a new node

-> return  result.next because the first node was just a dummy node (0)
*/

// in short working algorithm
/*
first create a dummy node(0) for result
take a variable carry for extra value 
run a loop until both lists become null
inside loop add values and carry
store last digit and move forward
keep updating carry
after loop  if carry exists  add it
return the result list
*/











