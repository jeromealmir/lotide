# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jeromealmir/lotide-jeromealmir`

**Require it:**

`const _ = require('@jeromealmir/lotide-jeromealmir');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: function that compares two arrays and log a message if they are equal
* `assertEqual`: function that compares two primitive values and log a message if they are equal
* `head`: function that returns only the first element of the array
* `eqArrays`: function that compares two arrays and return a boolean if they are equal
* `middle`: function that returns the middle most element of the array
* `tail`: function that returns everything except the first element (head) of the array