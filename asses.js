// let food ="eating"
// console.log(food.reve)

// Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// Target = 23

function number(arr,target){
    
        let leftIndex =0;
         let rightindex= arr.length-1;
    
 
}
while(leftIndex<=rightindex){
        
        let middle = Math.floor((leftIndex+rightindex)/2);
        if(arr[middle] === target){
            return middle;

        
        }
        else if(arr[middle>target]){
            leftIndex =middle -1


        }
        else{
            return null
        }
       
    
    }

let num= [2,8,0,23,5,45,76];
 let target = 23;
console.log((num,target));

// Given years between 2000 and 2023, console all the leap years in the following sentence,
//  i.e "2020 is a leap year" if not "2001 is not a leap year"

let year =[2000,2023]
for(x in year)
if(x%2==0){
    console.log("2020 is a leap year")

}
else{
    console.log("2001 is not a leap year")
}
// 4 given a range of number from 0 to 100 , console



// 5
function data(array){
   let array=[12,87,45,75,23,64,74]
   for(x in array)
}






