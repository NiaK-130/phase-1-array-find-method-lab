

// let winningyear = record.find(function(array){
//     return array.result === "W"
// })

// console.log(winningyear.year)



// const record = [
//     {year: "2018", result: "L"},

//     {year: "2017", result: "W"},

//     {year: "2016", result: "N/A"}
   
//   ] 
//   let resultant = record.find(superbowlWin);
//   console.log(resultant)

//   function superbowlWin(recordList){
//       const win = recordList.find(record => {
//           if (record.result === "W"){
//               console.log(record.year);
//           }
//       });
//     }

    //let resultant = record.find(superbowlWin);
    //console.log(resultant)
  
    // function superbowlWin(recordList){

    //     let win = recordList.find(recordList => recordList.result {
    //         if (record.result === "W"){
    //             return record.year;
    //         } else {
    //             return undefined;
    //         }
    //     });
    //   }
  
 
 
    function superbowlWin(array) {
        let win = array.find(array => array.result === "W");
        if (win){
            return win.year
        } else {
            return undefined
        }
    } 
  



// function superbowlWin(array) {
//     return array.find(array => array.result === "W");
//     return win.year   
//    } 
    
    


//       if (record.result === "W"){
//         return record.year 
          
//       } 
// }





// function totalWin(wins){
//     for (let outcome of wins){
//         outcome.result
//     }
// }


// superbowlWin(totalWin)







    // for (key in array){
    //     if (key.result === 'W'){
    //         return key.year
    //     }
    // }


    // for (key in record){
    //     if (key.result === 'W'){
    //         return key.year
    //     }
    // }