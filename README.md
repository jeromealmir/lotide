# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jeromealmir/lotide`

**Require it:**

`const _ = require('@jeromealmir/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: function that compares two arrays and log a message if they are a perfect match
* `assertEqual`: function that compares two primitive values and log a message if they are a perfect match
* `assertObjectsEqual`: function that compares two objects and log a message if they are a perfect match
* `countLetters`: function that returns a list and count of each letters of a string
* `countOnly`: function that counts the specified subset of an items
* `eqArrays`: function that compares two arrays and return true if they are a perfect match
* `eqObjects`: function that compares two objects and return true if they are a perfect match
* `findKey`: function that returns the first key that meets the criteria specified by a callback
* `findKeyByValue`: function that returns the key that matches the search value
* `flatten`: function that combines an array of arrays into a single-level array
* `head`: function that returns only the first element of the array
* `letterPositions`: function that returns the index of all letters of a string
* `map`: function that returns a new array populated with modified elements by a callback 
* `middle`: function that returns the middle most element of the array
* `tail`: function that returns everything except the first element (head) of the array
* `takeUntil`: function that returns a slice of the array based on the criteria specified by a callback
* `without`: function that removes an item from an array