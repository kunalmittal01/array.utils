# array.utils

**array.utils** is a lightweight and efficient utility library for performing common array operations. It includes methods for summing array elements, finding averages, removing duplicates, shuffling, flattening nested arrays, and more. Additionally, it provides utility functions for handling asynchronous operations like debouncing and throttling.

---

## Installation

To install the package, use:

```bash
npm install array.utils
```

## Features

## 1. Basic Array Operations

* getSum(arr)

Returns the sum of all elements in an array.

Example:

```javascript
arrayUtils.getSum([1, 2, 3, 4]); // Output: 10
```

* getAverage(arr)

Returns the average of the elements in an array.

Example:

```javascript
arrayUtils.getAverage([1, 2, 3, 4]); // Output: 2.5
```

 ## 2. Array Manipulation

* removeDuplicates(arr)

Removes duplicate elements from an array.

Example:

```javascript
arrayUtils.removeDuplicates([1, 2, 2, 3]); // Output: [1, 2, 3]
```
* intersect(arr1, arr2)

Returns the intersection of two arrays.

Example:

```javascript
arrayUtils.intersect([1, 2, 3], [2, 3, 4]); // Output: [2, 3]
```
* difference(arr1, arr2)

Returns the difference between two arrays.

Example:

```javascript
arrayUtils.difference([1, 2, 3], [3, 4]); // Output: [1, 2, 4]
```

* removeBy(arr, val)

Removes a specific value from an array.

Example:

```javascript
arrayUtils.removeBy([1, 2, 3], 2); // Output: [1, 3]
```

* shuffle(arr)

Randomly shuffles the elements of an array.

Example:

```javascript
arrayUtils.shuffle([1, 2, 3, 4]); // Output: [3, 1, 4, 2] (random order)
```

* flat(arr)

Flattens a nested array into a single array.

Example:

```javascript
arrayUtils.flat([1, [2, 3], [4, [5]]]); // Output: [1, 2, 3, 4, 5]
```

## 3. Asynchronous Function Utilities

* debounceAsync(fn, delay)

Creates a debounced version of the provided function. Executes the function only after a specified delay since the last call.

Example:

```javascript
const debouncedFn = arrayUtils.debounceAsync(async (x) => x * 2, 3000);
debouncedFn(5).then(console.log); // Logs 10 after 3 seconds
```

* throttleAsync(fn, delay)

Creates a throttled version of the provided function. Ensures the function is executed at most once every specified delay period.

Example:

```javascript
const throttledFn = arrayUtils.throttleAsync(async (x) => x * 2, 3000);
throttledFn(5).then(console.log); // Logs 10 after 3 seconds
```

## 4. API Reference

* getSum(arr)

Returns the sum of all elements in an array.

`Parameters`:
arr (Array): The array of numbers.

`Returns`:
(Number): The sum of the array elements.

* getAverage(arr)

Returns the average of the elements in an array.

`Parameters`:
arr (Array): The array of numbers.

`Returns`:
(Number): The average of the array elements. Returns 0 if the array is empty.

* removeDuplicates(arr)

Removes duplicate elements from an array.

`Parameters`:
arr (Array): The array of elements.

`Returns`:
(Array): A new array without duplicates.

* intersect(arr1, arr2)

Returns the intersection of two arrays.

`Parameters`:
arr1 (Array): The first array.
arr2 (Array): The second array.

`Returns`:
(Array): An array containing common elements from both arrays.

* difference(arr1, arr2)

Returns the difference between two arrays.

`Parameters`:
arr1 (Array): The first array.
arr2 (Array): The second array.

`Returns`:
(Array): An array containing elements that are unique to each array.

* removeBy(arr, val)

Removes a specific value from an array.

`Parameters`:
arr (Array): The array of elements.
val (Any): The value to be removed.

`Returns`:
(Array): A new array without the specified value.

* shuffle(arr)

Randomly shuffles the elements of an array.

`Parameters`:
arr (Array): The array to shuffle.

`Returns`:
(Array): A new array with shuffled elements.

* flat(arr)

Flattens a nested array into a single array.

`Parameters`:
arr (Array): The nested array.

`Returns`:
(Array): A flat array.

* debounceAsync(fn, delay)

Debounces an asynchronous function, ensuring it's called only after a delay since the last invocation.

`Parameters`:
fn (Function): The asynchronous function to debounce.
delay (Number): The debounce delay in milliseconds.

`Returns`:
(Function): A debounced version of the function.

* throttleAsync(fn, delay)

Throttles an asynchronous function, ensuring it's called at most once every specified delay.

`Parameters`:
fn (Function): The asynchronous function to throttle.
delay (Number): The throttle delay in milliseconds.

`Returns`:
(Function): A throttled version of the function.

# License

This library is licensed under the MIT License. Feel free to use and modify it in your projects © [Kunal Mittal].

