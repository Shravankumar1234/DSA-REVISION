function runProgram(input){ 
    input=input.trim().split("\n");
    var tc=+input[0].trim();
    var line=1;
    for(let i=0;i<tc;i++){
        var [n,k]=input[line++].trim().split(" ").map(Number);
        var arr=input[line++].trim().split(" ").map(Number);
        sum(n,k,arr);
    }  
}
function  sum(n,k,arr){
    let left=0;
    let right=n-1;
    let count=0;
    while(left<right){
        let sum=arr[left]+arr[right];
        if(sum==k){
          console.log(left,right);
            count++;
            break;
        }
        else if(sum>k){
            right--;
        }
        else{
            left++;
        }
    }
   if(count==0){
    console.log("-1","-1")
   }
}
if (process.env.USERNAME === "shravan kumar") {
  runProgram(`
  3
4 9
2 7 11 15
5 10
1 2 3 5 5
2 100
48 49
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