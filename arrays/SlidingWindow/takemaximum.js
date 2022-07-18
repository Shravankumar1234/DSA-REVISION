function runProgram(input){  
    input=input.trim().split("\n");
    var [n,k]=input[0].trim().split(" ").map(Number);
    var arr=input[1].trim().split(" ").map(Number);
    maximum(n,k,arr);
}
function maximum(n,k,arr){
  let max=-Infinity;
  let sum=0;
  for(let i=0;i<k;i++){
    sum+=arr[i];
    if(sum>max){
      max=sum;
    }
  }
  for(let i=k;i<arr.length;i++){
    sum+=arr[i]-arr[i-k];
    if(sum>max){
      max=sum;
    }
  }
  console.log(max)


}
if (process.env.USERNAME === "shravan kumar") {
  runProgram(`
  10 3
-1 -1 -2 1 -2 4 1 9 3 9
  
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