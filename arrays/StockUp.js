function runProgram(input){  
    input=input.trim().split("\n");
    var n=+input[0].trim();
    var arr=input[1].trim().split(" ").map(Number) 
    let price=[5*110,2*120,2*42,3*53,2*40,5*32,2*126]
    stock(n,arr,price);
}
function stock(n,arr,price){
  let sum=0;
  for(let i=0;i<arr.length;i++){
   if(arr[i]==1){
      sum+=arr[i]*price[i];
   }
  }
  console.log(sum*n)

    
}
if (process.env.USERNAME === "shravan kumar") {
  runProgram(`
  4
0 1 1 1 0 0 1
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