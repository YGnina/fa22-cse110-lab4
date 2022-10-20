1. It prints "3", which is the value of i. Because in the for loop condition, i would be inplement until it's not less than the length of prices. Since there are 3 elements in prices, and the length would be 3, when the for loop ends, i would be 3 too.
2. It prints "150", which is the discounted price of the last value in prices. Because in the for loop, discountedPrice is calculated with each element in prices. When the loop ends, it should be the last one.
3. It prints "150", which is the final price of the last value in prices. Because in the for loop, finalPrice is calculated with each element in prices. When the loop ends, it should be the last one.
4. It would return [50, 100, 150], which is the value of discounted. Beacuse in the for loop, discounted stores the values of every finalPrice.
5. Error, because it defines i with let inside the for loop condition which cannot be accessed outside the loop.
6. Error, because it defines discountedPrice with let inside the for loop condition which cannot be accessed outside the loop.
7. It prints "150", which is the final price of the last value in prices and finalPrice is declared outside the loop.
8. It would return [50, 100, 150], which is the value of discounted and discounted is declared outside the loop. Beacuse in the for loop, discounted stores the values of every finalPrice.
9.  Error, because it defines i with let inside the for loop condition which cannot be accessed outside the loop.
10.  It prints "3", which is the length of prices.
11.  It would return [50, 100, 150], which is the value of discounted and discounted is declared outside the loop. Beacuse in the for loop, discounted stores the values of every finalPrice.

12.
  - A. student.name

  - B. student['Grad Year']

  - C. student.greeting()

  - D. student['Favorite Teacher'].name

  - E. student.courseLoad[0]
 
 13.
  - A. '32', because 2 maps to its exact string representation
  - B. 1, beacause '3' is converted to a number
  - C. 3, because null maps to 0
  - D. '3null', becuase null is converted to a string
  - E. 4, because true maps to 1
  - F. 0, becasue false and null map to 0
  - G. '3undefined', becuase undefined is converted to a string
  - H. NaN, because undefined cannot map to a number and the conversion failed
  
 14.
  - A. true, because '2' is converted to a number and it's greater than 1
  - B. false, because '2' and '12' are treated as strings and alphabetically 2 is greater than 1
  - C. true, because '2' is converted to a number and it's equal to 2
  - D. false, because '2' and 2 have different data types
  - E. false, because true maps to 1 and 1 is not equal to 2
  - F. true, because Boolean convert 2 as true, which has an equal value and type as true.
 
 15.
 == only compares the value while === compares both value and type.
 
 
 17.
 The result should be [2,4,6]. 
 In this modifyArray function, it takes [1,2,3] as the array parameter and doSomething as the function parameter. It goes throught each element in array, doSomething, push it back to a new assigned array and return it. Because doSomething doubles the value of given parameter, the result should be doubled.
