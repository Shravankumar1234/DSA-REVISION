function runProgram(input){   
    input=input.trim().split("\n");
    var arr=input[0].trim().split(" ").map(Number)
    missing(arr);
}
function missing(arr){
    let n=arr.length+1;
    let total_sum=n*((n+1)/2)
    let sum=0;
    for(let i=0;i<n-1;i++){
        sum+=arr[i];
    }
    let res=total_sum-sum;
    console.log(res);
}
if (process.env.USERNAME === "shravan kumar") {
  runProgram(`4 5 1 3`);
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