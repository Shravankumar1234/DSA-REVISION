function runProgram(input){
    input=input.trim().split("\n");
    let n=+input[0].trim();
    let arr=input[1].trim().split(" ").map(Number);
    maxoccur(n,arr);
}
function maxoccur(n,arr){
   let max=-Infinity;
   let s;
   for(let i=0;i<n;i++){
    let count=0;
    for(let j=i;j<n;j++){
        if(arr[i]==arr[j]){
            count++;
        }
        if(count>max){
        max=count;
        s=arr[i]
   }
    }
   }
    console.log(s) 
}
if (process.env.USERNAME === "shravan kumar") {
  runProgram(`
   5
 0 2 0 6 9
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