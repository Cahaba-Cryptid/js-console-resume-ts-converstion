let myName = 'Hayden Frank';

let i: any = 0

let interests = ['Literature', 'Dungeons', 'Video games', 'Coffee'];

let displayPosition = (jobDetail: string) => {
    console.log('* ' + jobDetail);
}

let displaySkills = (skills: string, cool: boolean) => {
    if (cool) {
        console.log('* BAM: ' + skills);
    } else {
        console.log('* ' + skills);
    }
}

let displayInterests = () => {
    console.log("\nMy interests:");
    for (i of interests) {
        console.log(`* ${i}`);
    }
}

console.log(`* Name: ${myName.toUpperCase()}`)

console.log('* Career: Full Stack Developer... Currently unemployed.');

console.log('* Mini-bio: Nerd who likes books and D&D. Not a whole lot else.');

displayInterests();

console.log('\nMost Recent Position Held:');

displayPosition('General Manager');

displayPosition('Revelator: Sweet Jons');

displayPosition('Manage a small team of people to effectivly run a cafe, provide excellent customer service, and produce high quality food and coffee.')

console.log('\nMy mad skillzzzz:');

displaySkills('Barista', false);

displaySkills('Dungeon Mastering', true);

displaySkills('Bo staff', true);

displaySkills('Cat petting', true);

displaySkills('Power sleeping', true);

