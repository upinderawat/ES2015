let displayColorsArray = function(colors){
    for(let c in colors){
        console.log(colors[c] +" ");
    }
}
let displayColorsEllipses = function(...colors){
    for(let c in colors){
        console.log(c +" ");
    }
}
let colors = ["red", "blue", "green"];

displayColorsArray(colors);
displayColorsEllipses(...colors);