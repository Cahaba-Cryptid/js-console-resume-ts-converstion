"use strict";
var myName = 'Hayden Frank';
var i = 0;
var interests = ['Literature', 'Dungeons', 'Video games', 'Coffee'];
var displayPosition = function (jobDetail) {
    console.log('* ' + jobDetail);
};
var displaySkills = function (skills, cool) {
    if (cool) {
        console.log('* BAM: ' + skills);
    }
    else {
        console.log('* ' + skills);
    }
};
var displayInterests = function () {
    console.log("\nMy interests:");
    for (var _i = 0, interests_1 = interests; _i < interests_1.length; _i++) {
        i = interests_1[_i];
        console.log("* " + i);
    }
};
console.log("* Name: " + myName.toUpperCase());
console.log('* Career: Full Stack Developer... Currently unemployed.');
console.log('* Mini-bio: Nerd who likes books and D&D. Not a whole lot else.');
displayInterests();
console.log('\nMost Recent Position Held:');
displayPosition('General Manager');
displayPosition('Revelator: Sweet Jons');
displayPosition('Manage a small team of people to effectivly run a cafe, provide excellent customer service, and produce high quality food and coffee.');
console.log('\nMy mad skillzzzz:');
displaySkills('Barista', false);
displaySkills('Dungeon Mastering', true);
displaySkills('Bo staff', true);
displaySkills('Cat petting', true);
displaySkills('Power sleeping', true);
