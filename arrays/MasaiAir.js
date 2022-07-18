function runProgram(input){ 
    input=input.trim().split("\n");
    var n=+input[0].trim();
    var arr1=input[1].trim().split(" ").map(Number)  
    var arr2=input[2].trim().split(" ").map(Number)
    masai(n,arr1,arr2)

}
function masai(n,arr1,arr2){
    for(let i=0;i<n;i++){
        if(arr1[i]<=15&&arr2[i]<=7){
             console.log('Borading')
        }
        else{
            console.log("Stop");
        }
}
           
        }
if (process.env.USERNAME === "shravan kumar") {
  runProgram(`
  4
12 14 15 6
8 5 7 4
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