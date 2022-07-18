function runProgram(input){   
    input=input.trim().split("\n");
    var day=input[0].trim()
    var n=+input[1].trim();
    week(day,n);
}
function week(day,n){
   var arr=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
   let a=n%7;
   let b;
   for(let i=0;i<n;i++){
      if(arr[i]==day){
        if(i+a>6){
            i=i-7;
        }
        b=arr[i+a];
        console.log(b);
        // break;
      }
   }
}
if (process.env.USERNAME === "shravan kumar") {
  runProgram(`
  Wednesday
   8
  `);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}