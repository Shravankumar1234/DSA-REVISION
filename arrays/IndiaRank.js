function runProgram(input){   
    input=input.trim().split("\n");
    var N=+input[0].trim();
    let line=1;
    let arr=[];
    for(let i=0;i<N;i++){
        arr.push(input[line++].trim())
    }
    india(N,arr);
}
function india(N,arr){
    let x;
    for(let i=0;i<N;i++){
        if(arr[i]=="India"){
            x=i+1;
        }
    }
    console.log(x)
}
if (process.env.USERNAME === "shravan kumar") {
  runProgram(`
  5
Russia
USA
Japan
China
India
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