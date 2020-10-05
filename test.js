// What I thought of:
// 1. Splitting each sentence and storing them seperately for both users.
//      Machine transcription: machineSpeaker1 and machineSpeaker2
//      Human Transcription: humanSpeaker1 and humanSpeaker2
// 2. Using sentence splitting logic considering transcription is correct.
// 3. Comparing machine and human transcription to each user.
// 4. Calculating the difference.

var machineSpeaker1 = [
    'You are the most amazing person on Mars. I think I will never find someone like you again.',
    'I know a great coffee shop near by. Tomorrow at 2?'
];
var machineSpeaker2 = [
    'well that\'s true, but you\'re not so bad either.',
    'We should hang sometime.',
    'Sound good?'
];

var humanSpeaker1 = [
    'You are the most amazing person on earth.',
    'I think I will never find someone like you again.',
];
var humanSpeaker2 = [
    'Well, that\'s true. But you\'re not so bad either.',
    'We should hang out sometime. I know a great coffee shop nearby. Tomorrow at 2?',
    'Sound good?'
];

// Using sentence splitting logic and considering transcription is correct, we get: 

var machineSpeaker1 = [
    'You are the most amazing person on Mars.',
    'I think I will never find someone like you again.',
    'I know a great coffee shop near by.',
    'Tomorrow at 2?'
];
var machineSpeaker2 = [
    'well that\'s true, but you\'re not so bad either.',
    'We should hang out sometime.',
    'Sound good?'
];

var humanSpeaker1 = [
    'You are the most amazing person on Mars.',
    'I think I will never find someone like you again.',
];
var humanSpeaker2 = [
    'well that\'s true, but you\'re not so bad either.',
    'We should hang out sometime.',
    'I know a great coffee shop nearby.', 
    'Tomorrow at 2?',
    'Sound good?'
];

//Comparision

var total = machineSpeaker1.length + machineSpeaker2.length
// or var total = humanSpeaker1.length + humanSpeaker2.length
console.log(total); // 7 sentences in total
var rightSpeaker1 = 0;

for(var i=0; i<humanSpeaker1.length; i++) {
    for(var j=0; j<machineSpeaker1.length; j++) {
        if (humanSpeaker1[i] === machineSpeaker1[j]) {
            rightSpeaker1++;
            console.log(humanSpeaker1[i]);
        }
    }
}
console.log(rightSpeaker1) //2
var wrong1=(machineSpeaker1.length+humanSpeaker1.length) - rightSpeaker1*2;
console.log(wrong1); //2

var rightSpeaker2 = 0;
for(var i=0; i<humanSpeaker2.length; i++) {
    for(var j=0; j<machineSpeaker2.length; j++) {
        if (humanSpeaker2[i] === machineSpeaker2[j]) {
            rightSpeaker2++;
            console.log(humanSpeaker2[i])
        }
    }
}
console.log(rightSpeaker2) //3
var wrong2=(machineSpeaker2.length+humanSpeaker2.length) - rightSpeaker2*2;
console.log(wrong2); //2


//Result
var error = 1 - (total-(wrong1+wrong2)/2)/total;
console.log(error) //0.2857 = 28.57% error in speaker recognition


// Exception/Limitations:
// I considered transcriptions to be exact
// Paragraph partition not considered as an error
