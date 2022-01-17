//String Templates
let main = function(){
    let name = "Upinder"
    let myString = "Welcome to the course " + name;
    let easyString = `Welcome to 'exciting' and "boring" course, ${name} 
and it even 
            SUPPORTS mutliline`; //NOTE: whitespaces are not trimmed/ignored
    console.log(myString);
    console.log(easyString);
    
};
main();
