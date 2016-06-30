# Tests Needed

## Behavior
  - test functions

## Render
  - test all components are rendering correctly

## State
  - test increment action
  - test firebase writing/reading
  - test API call

### BGG API call
  1. Send a request to the BGG API, retrieve a bunch of collection and game data. 

  2. Transform the xml data into a single array of objects, each containing just the data we need.

  3. Write the transformed object to the correct user account in Firebase.

# Steps to TDD

  - (Think), Red, Green, Refactor
