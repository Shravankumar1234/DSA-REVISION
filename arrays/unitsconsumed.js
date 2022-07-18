function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0];
    units(N);    
}
function units(N){
  var rem=N-80;
  let units=0
  if(rem>650){
    units+=150;
    rem-=650;
    units+=rem/10;
  
  }
  else if(rem<=650&&rem>150){
    units+=50;
    rem-=150
    units+=rem/5;
  }
  else if(rem<=150){
     units+=rem/3
     
  }
    console.log(units)
}
if (process.env.USERNAME === "shravan kumar") {
  runProgram(`930`);
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