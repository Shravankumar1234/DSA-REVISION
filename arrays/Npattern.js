function runProgram(input){
    input=input.trim().split("\n");
   let n=+input[0].trim();
   let arr=[];
   let line=1
   for(let i=0;i<n;i++){
    arr.push(input[line++].trim().split(" ").map(Number))
   }
   npattren(n,arr);
}
function  npattren(n,arr){
    let bag="";
    for(let i=arr.length-1;i>=0;i--){
        bag+=arr[i][0]+" ";
    }
    for( i=1;i<arr.length;i++){
        bag+=arr[i][i]+" ";
    }
    for( i=arr.length-2;i>=0;i--){
        bag+=arr[i][arr.length-1]+" ";
    }
    console.log(bag)
}
 
if (process.env.USERNAME === "shravan kumar") {
  runProgram(`
  3
  1 2 3
  4 5 6
  7 8 9
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