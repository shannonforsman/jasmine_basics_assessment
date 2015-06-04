
var letterGrader = function(num) {

    var grade;

    if (num === 100 ){
      return "A+";
    }

    if (num < 60) {
      return "F";
    }

    else if (num < 70) {
      grade = "D";
    }

    else if (num < 80) {
      grade = "C";
    }

    else if (num < 90) {
      grade = "B";
    }

    else if (num < 100) {
      grade = "A";
    }


    if ( num.toString()[1] > 7 && num.toString()[1] < 10) {
      return grade + "+";
    }

    if ( num.toString()[1] >= 0 && num.toString()[1] < 3) {
      return grade + "-";
    }

    return grade;


}



var average = function(arr){
 var sum =  arr.reduce(function(a,b){
   return a + b;
  }, 0);

 var ave = sum/arr.length;
 return ave;
}



var median = function(arr){

  arr.sort();

  if (arr.length === 1) {
    return arr[0]
  }
  if (arr.length % 2 === 0) {
    var index = arr.length/2
    return (arr[index - 1] + arr[index]) / 2;
  }
  else {
    var index = Math.floor(arr.length/2)
    return arr[index];
  }

}


var mode = function(arr) {

    var obj = {};
    var greatest = 0;
    var findMode;
    var modeArray = [];

    arr.forEach(function(elem, index){
       if (obj[elem] === undefined ) {
           obj[elem] = 1;
       }
       else {

       obj[elem] ++
       if (greatest <= obj[elem]) {

           greatest = obj[elem]
           findMode = elem
       }
     }
   });

   for ( p in obj ){
       if (obj[p] === greatest) {
           modeArray.push(parseInt(p));
       }
   }
    return modeArray.sort();
}



module.exports = {
  letterGrader: letterGrader,
  average: average,
  median: median,
  mode: mode
}
