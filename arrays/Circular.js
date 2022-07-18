function runProgram(input){  
    input=input.trim().split("\n");
    var n=+input[0];
    var arr=[];
    var line=1;
    for(let i=0;i<n;i++){
        arr.push(input[line++].trim().split(" ").map(Number))
    } 
    circular(n,arr);
}
function circular(n,arr){
   let top=0;
   let bottom=arr.length-1;
   let left=0;
   let right=arr.length-1;
   let bag="";
   for(let i=bottom;i>=top;i--){
    bag+=arr[i][left]+" ";
   }
   left++;
   for(let i=left;i<=right;i++){
    bag+=arr[top][i]+" ";
   }
   top++;
   for(let i=top;i<=bottom;i++){
    bag+=arr[i][right]+" ";
   }
   right--;
   for(let i=right;i>=left;i--){
    bag+=arr[bottom][i]+" ";
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