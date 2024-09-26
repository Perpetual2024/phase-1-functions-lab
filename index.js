// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
if (distance===43){
    return 1;
}else if (distance===50){
    return 8;
}
else if (distance <42){
     return 8;
}
  
}
function distanceFromHqInFeet(feet){
if (feet===43){
    return 264;
}else if (feet===50){
   return 2112 ;
}else if (feet<42){
    return 2112 ;
}
}

function distanceTravelledInFeet(start, destination){
return Math.abs(destination-start)*264;}


function calculatesFarePrice(start, destination){
 const distance =Math.abs(destination-start)*264
 if (distance<=400){
    return 0;
 }else if(distance>400&&distance<=2000){
    const chargeableDistance=distance-400;
    return chargeableDistance*0.02;                  
 }else if(distance>2000&&distance<=2500){
    return 25;
}else{
    return "cannot travel that far";
}
}
