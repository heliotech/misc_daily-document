// today_yesterday.js

const today = new Date();
console.log("today = %s = %d", today, today);

const year = today.getFullYear();
const month = today.getMonth();
const weekday = today.getDay();  // it is a weekday nr!
const day = today.getDate();
console.log(`year = ${year}, month = ${month}, day = ${day}`);

const today_day = new Date(year, month, day);
console.log(`today_day = ${today_day}`);

const one_day_millis = 24*60*60*1000;
const yesterday_millis = today_day.getTime() - one_day_millis;
const yesterday = new Date(yesterday_millis);
console.log(`yesterday = ${yesterday}`);

const dayNames = {
	0: "Sunday",
	1: "Monday",
	2: "Tuesday",
	3: "Wednesday",
	4: "Thursday",
	5: "Friday",
	6: "Saturday"
};

const anarray = [1, 2, 3];

console.log(`dayNames: ${JSON.stringify(dayNames)}`);
console.log(`dayNames[0]: ${dayNames[0]}`);
console.log(`Today is: ${dayNames[weekday]}`);

console.log("typeof(one_day_millis):", typeof(one_day_millis));
console.log("typeof(anarray):", typeof(anarray));
console.log("typeof(dayNames):", typeof(dayNames));
const obj = {1: "one", 2: "two"};
console.log(Object.entries(obj));
console.log("typeof(Object.entries(obj)):", typeof(Object.entries(obj)));
for (const [key, value] of Object.entries(obj)) {
	console.log(key, ":", value);
};
// console.log(dayNames.keys());