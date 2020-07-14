//let me confirm my understanding.  What you're asking me to do is write a function that takes an array and returns the sum of all integers in it, correct?

//Will the array have mixed data types or only integers?

//First thing I'd do is declare and assign any variables, in this case we'd need an empty string for output. 

//If the array is all integers, I'm thinking my approach would be to use the reduce() function, to perform an add operation on every item in the  array and return the end result sum.

//Another way to approach it would be to use a for loop, assign a variable to be the output, and iterate through the array, adding each number to the output then returning the new output.

//If the array has mixed data types, I'd either push the integers into a new array first, then use reduce() or a for-loop, OR just use an if then statement which evaluates if the element is an integer, add it to the output.

//II.  MEAN

//To create a function mean, that takes in an array of integers and returns the mean or average for all integers...

//First I'd calculate the sum as described above.  Then I'd divide the sum by the length of the array return that to a variable 'mean.'  

//II.  MODE
//To create a function that takes in an array and returns the number that is repeated more than any other...
//clarify: can there be more than one mode? What happens if you have more than one integer repeated the same number of times?

//I can see a few ways to do this.  The one I think I'd prefer is by using the array.foreach method to create a hash or object with number and occurrence count as key value pairs. I'd iterate through the array and increment the count for each every time a duplicate is found.  Then I'd compare each of the occurence counts with a for loop, and return the pair with the highest count to a mode variable.    