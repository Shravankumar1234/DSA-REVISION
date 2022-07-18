function runProgram(input){  
    input=input.trim().split("\n");
    var [n,k]=input[0].trim().split(" ").map(Number);
    var arr=input[1].trim().split(" ").map(Number);
    maximum(n,k,arr);
}
function maximum(n,k,arr){
 let quescount=0;
 let skipcount=0
 for(let i=0;i<n;i++){
    if(arr[i]<=k&&skipcount<=1){
        quescount++;
    }
    else{
        skipcount++;
    }
 }
 console.log(quescount)



}
if (process.env.USERNAME === "shravan kumar") {
  runProgram(`
 7 6
4 3 7 6 7 2 2
  
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