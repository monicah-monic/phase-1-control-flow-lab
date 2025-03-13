function scuberGreetingForFeet(sampleRide){
if(sampleRide<=400){
  return  'This one is on me!'
} else if(sampleRide>400 && sampleRide<2000){
return "That will be twenty bucks.";
}else if(sampleRide>2000 && sampleRide<2500){
  return "I will gladly take your thirty bucks.";
}else{
  return "No can do.";
}
}

function ternaryCheckCity(city){
  // return city=== 'NYC'? 'Ok, sounds good.': 'No go.';
    return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(generous){
  // Write your code here!
  switch(generous){
    case 'generous':
    return "Thank you so much."
    case 'not as generous':
      return 'Thank you.'
      default:
        return "Bye.";
  }
}