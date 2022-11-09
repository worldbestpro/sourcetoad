var arr = [
  {
    'guest_type': 'crew',
    'first_name': 'Marco',
    'last_name': 'Burns',
    'guest_booking': {
        'room_no': 'A0073',
        'some_array': [7,2,4]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'John',
    'last_name': 'Doe',
    'guest_booking': {
        'room_no': 'C73',
        'some_array': [1,3,5,2,4,3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Jane',
    'last_name': 'Doe',
    'guest_booking': {
        'room_no': 'C73',
        'some_array': [1,3,5,2,4,3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Albert',
    'last_name': 'Einstein',
    'guest_booking': {
        'room_no': 'B15',
        'some_array': [2,5,6,3]
    },
  },
  {
    'guest_type': 'crew',
    'first_name': 'Jack',
    'last_name': 'Daniels',
    'guest_booking': {
        'room_no': 'B15',
        'some_array': [2,5,6,3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Alan',
    'last_name': 'Turing',
    'guest_booking': {
        'room_no': 'B15',
        'some_array': [2,5,6,3]
    },
  },
];

function converter(a, step) {
  return a.map(b =>
    Object.assign(
      {},
      ...function _flatten(o) {
        return [].concat(
          ...Object.keys(o).map(k => {
            switch (step) {
              case 1:
                return typeof o[k] === 'object' && !$.isArray(o[k]) ? _flatten(o[k]) : ({[k]: o[k]});
              case 2:
                return $.isArray(o[k]) ? ({[k]: o[k].reduce((a, b) => a + b, 0)}) : ({[k]: o[k]});
              default:
            }
          })
        );
      }(b)
    )
  );
}

function mutateArray(a) {
  a = converter(a, 1);
  a = converter(a, 2);
  a = a.filter(b => b.hasOwnProperty('guest_type') && b.guest_type === 'guest');
  a.sort(function (a, b) {
    sa = a.last_name.toUpperCase() + a.first_name.toUpperCase();
    sb = b.last_name.toUpperCase() + a.first_name.toUpperCase();
    return sa < sb ? -1 : sa > sb ? 1 : 0;
  })
  return a;
}

$(document).ready(function() {
  $('#originalArray').html(JSON.stringify(arr, null, 2));
  $('#resultsArray').html(JSON.stringify(mutateArray(arr), null, 2));
});
