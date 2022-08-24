console.log('Hi this is callbacks')

/*
    JavaScript Callbacks
*/

function filter(anArr){
    let output = [];
    for (let element of anArr){
        if (element % 2 === 0){ // this is the logic that determines if element is kept
            output.push(element);
        };
    };
    return output;
};

let numbers = [5, 10, 15, 20, 25, 30];
console.log(filter(numbers));


function filterWithCallback(anArr, callbackFn){
    let output = [];
    for (let element of anArr){
        if (callbackFn(element)){ // this is the logic that determines if element is kept
            output.push(element);
        };
    };
    return output;

};

function isOdd(num){
    return num % 2 === 1;
};

console.log(filterWithCallback(numbers, isOdd)); // here we are inserting isOdd fn in place of the if stmt...

console.log(filterWithCallback(numbers, num => num >= 20)); // this to show you can put a fn as input and that fn will get called in 

// isOdd and the arrow fns are considered callback fns (bc they are passed into another fn as an arg to be executed later)
// filterWithCallback is considered a higher-order fn (bc it accepts a fn as an arg)




// Async example

function first(){
    console.log('First started...')
    setTimeout(() => console.log('First'), 2000);
};

function second(){
    console.log('Second');
};

// first();
// second(); // this prints first, and first prints later bc that's how JS works, it stacks calls to top. python does not, it executes line by line in order



// -------------------
// console.log(myName);
// var myName = 'Brian';
// console.log(myName); 



// real world example

//  create a fn that will rake in a song name, donwlad the song, and then play the song

// function downloadSong(songName){
//     console.log(`Downloading ${songName}`)
//     setTimeout(() => {
//         console.log('Finished downloading')
//         return songName
//     }, 3000)
// };

// function playSong(songName){
//     let song = dowloadSong(songName);
//     console.log(`${song} is playing`);
// }

// playSong('Wonderwall') // this does not work bc 'song' is not defined (since it takes time to run downloadSong fn w setTimeout())



// fix the issue w callbacks
// CALLBACK IS AN ARG TO ANOTHER FN...SO THE CALLBACK FN CAN SIT AND WAIT TO BE EXECUTED LATER

function downloadSong(songName, downloadTime, callback){
    console.log(`Downloading ${songName}...`)
    setTimeout(() => {
        // script to downlad the song
        console.log(`Finished downloading ${songName}`)
        // execute the callback once finished downloading
        callback(songName);
    }, downloadTime)
}

function playSong(song){
    console.log(`${song} is playing...`)
}

downloadSong('Wonderwall', 1000, playSong);

downloadSong('Let It Be', 500, playSong);



// send to a friend
downloadSong('Let It Be', 500, song => console.log(`Sending ${song} to friend`))




// handling errors

function downloadSong2(songName, callbackSuccess, callbackFail){
    console.log(`Searching for ${songName} in our database...`)
    setTimeout(() => {
        // simulate a valid song choice
        if (songName.length > 3){
            callbackSuccess(songName)
        } else {
            callbackFail(songName)
        }
    }, 1500)
}

let songChoice = "Stairway to Heaven"

downloadSong2( // calling the fn...
    songChoice,
    s => console.log(`${s} has successfully downloaded and is now playing.`),
    s => console.log(`${s} is not a valid song choice.`),
)