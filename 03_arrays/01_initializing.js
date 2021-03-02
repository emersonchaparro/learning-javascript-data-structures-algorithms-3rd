let daysOfWeek0 = new Array(); // {1}
daysOfWeek0 = new Array(7); // {2}
daysOfWeek0 = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday',
'Thursday', 'Friday', 'Saturday'); // {3}

//Best practice:
let daysOfWeek_A = [];
let daysOfWeek_B = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
'Friday', 'Saturday'];

console.log(daysOfWeek_B.length);