# React Native FlatList Stale Data Issue

This repository demonstrates a common issue in React Native where the FlatList component fails to update correctly when dealing with frequently changing state and deeply nested data structures. The issue and a solution are provided.

## Problem

When using FlatList to display a list of items where the items' data changes frequently, the component may not render the latest state values correctly. This often leads to stale data being displayed to the user.  Deep nesting of data within the items can worsen this problem.

## Solution

The solution uses the `useMemo` hook to optimize the rendering process.  By memoizing the rendering of list items, we prevent unnecessary re-renders when only shallow parts of the state change. The key here is to provide a function to `useMemo` that returns a new array of items only when data changes.  Additionally, data normalization to avoid nested objects will improve performance.

## Setup

1. Clone this repository.
2. Run `npm install`
3. Run `npx react-native run-android` or `npx react-native run-ios`