# Problem 1
All code will be written in index.js. Be sure to run `npm install` before getting started. Open `index.html` to view your output.

Do not assume the data will always be in the exact format provided.  Commit your code between each step.

1. Update the `mutateArray` function to return `a` as a flattened array, so that each item is changed to
```
{
  'guest_type': 'crew',
  'first_name': 'Marco',
  'last_name': 'Burns',
  'room_no': 'A0073',
  'some_array': [
    7,
    2,
    4
  ]
},
```

2. Now update the `mutateArray` function so that the 'some_array' attribute in each item of the mutated array is changed to the sum of the array called 'some_total'
```
{
  'guest_type': 'crew',
  'first_name': 'Marco',
  'last_name': 'Burns',
  'room_no': 'A0073',
  'some_total': 13
},
```

3. Now update the `mutateArray` function so that the resulting array only includes objects with a guest_type of 'guest'.

4. Finally, update the `mutateArray` function so the resulting array is ordered alphabetically by last and first name.

The final result should look like this:
```
[
  {
    "guest_type": "guest",
    "first_name": "Jane",
    "last_name": "Doe",
    "room_no": "C73",
    "some_total": 18
  },
  {
    "guest_type": "guest",
    "first_name": "John",
    "last_name": "Doe",
    "room_no": "C73",
    "some_total": 18
  },
  {
    "guest_type": "guest",
    "first_name": "Albert",
    "last_name": "Einstein",
    "room_no": "B15",
    "some_total": 16
  },
  {
    "guest_type": "guest",
    "first_name": "Alan",
    "last_name": "Turing",
    "room_no": "B15",
    "some_total": 16
  }
]
```
