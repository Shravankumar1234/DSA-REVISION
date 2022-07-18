function runProgram(input){
    input=input.trim().split("\n");
    let [n,m]=input[0].trim().split(" ").map(Number)
    let arr=[];
    let line=1;
    for(let i=0;i<n;i++){
       arr.push(input[line++].trim().split(" ").map(Number))
    }
    binary(n,m,arr)
  
}
function binary(n,m,arr){
    for(i=0;i<n;i++){
        let bag="";
        for(let j=0;j<m;j++){
         if(arr[i][j]==0){
            arr[i][j]=1;
            bag+=arr[i][j]+" ";
         }
         else{
            arr[i][j]=0
            bag+=arr[i][j]+" "
         }
        }
        console.log(bag)
    }

}

 
if (process.env.USERNAME === "shravan kumar") {
  runProgram(`
    3 2
    1 0
    0 1
    1 1
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