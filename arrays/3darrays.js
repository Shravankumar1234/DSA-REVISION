function runProgram(input){  
    input=input.trim().split("\n");
    var [n,m,k]=input[0].trim().split(" ").map(Number) 
    var arr=input[1].trim().split(" ").map(Number)
    threearrys(n,m,k,arr)
}
function threearrys(n,m,a,arr){
    let x=0;
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            let bag="";
            for(let k=0;k<a;k++){
               bag+=arr[x]+" ";
               x++;
            }
            console.log(bag)
        }
    }


}
if (process.env.USERNAME === "shravan kumar") {
  runProgram(`
  2 2 2
1 2 3 4 5 6 7 8
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