function runProgram(input){
    input=input.trim().split("\n");
    var [n,m]=input[0].trim().split(" ").map(Number);
    let line=1;
    let arr=[];
    for(let i=0;i<n;i++){
        arr.push(input[line++].trim().split(" ").map(Number));
    }
    spiral(n,m,arr);
}
function spiral(n,m,arr){
    let top=0;
    let bottom=n-1;
    let left=0;
    let right=m-1;
    let bag="";
    let count=0;
    while(count<n*m){
 for(let i=top;i<=bottom&&count<n*m;i++){
        bag+=arr[i][left]+" ";
        count++;
    }
    left++;
    for(i=left;i<=right&&count<n*m;i++){
        bag+=arr[bottom][i]+" ";
         count++;
    }
    bottom--;
    for(i=bottom;i>=top&&count<n*m;i--){
        bag+=arr[i][right]+" ";
         count++;
    }
    right--;
     for(i=right;i>=left&&count<n*m;i--){
        bag+=arr[top][i]+" ";
         count++;
    }
   top++;
    }
   
    console.log(bag)
}
if (process.env.USERNAME === "shravan kumar") {
  runProgram(`
  4 3
1 10 9
2 11 8
3 12 7
4 5 6 
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