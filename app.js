//bro your Shooorrttttttttt 😂
// This is the main file for the calculator it contains all the functions for the calculator
// css sucks

const display = document.querySelector('#display');
var bool = true;
var rick = true;
var ans = 0;
var lm = true;

// This adds the input to the display
function appendToDisplay(value) {
    if (bool) {
        display.value ="";
        bool = false;
    }

    display.value += value;
}

// This function is called when a number or operator key is pressed

function calculate() {
    //this is a try catch block, it'll try the code and if it has errors it'll catch them and run the code in the catch block
    
    try{
        //this line of code will evaluate the expression in the display and set the value of the display to the result
    display.value = eval(display.value);
    ans = display.value;
    bool = true;
    
    }catch(err){
        displayError()
    }
    
}

// self explanatory

function ricky() {
    if(rick){
        display.value = "Never gonna give you up";
        const song = new Audio('./song/rolls.mp3');
        song.play();
        rick = false;
        window.setTimeout(function(){
            display.value = "0";
            song.pause();
            rick = true;
        }, 30000);
        
        return;
    }
}


// This function clears the display completely its for the button AC

function clearDisplay() {
    display.value = "0";
    bool = true;
    lm = true;
}

// This function clears the last character from the display one at a time its for the button C

function del() {
    if(!bool){
        if(display.value.length == 1){
            display.value = display.value.slice(0, -1);
            display.value = "0";
            bool = true;
            lm = true;
            return;
        }
        display.value = display.value.slice(0, -1);
        return;
    }
    
}

// This function is called when the answer key is pressed it'll append the answer from the previous calculation to the display

function answer() {
    if(ans == 0){
        return;
    }
    else if(lm) {
        appendToDisplay(ans)
        lm = false;
    }
    
}

// This function is called whenever there is an error in the code it'll display "Error" on the display

function displayError() {
    display.value = "Error";
};