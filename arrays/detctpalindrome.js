function runProgram(input){   
    input=input.trim().split("\n");
    var tc=+input[0].trim();
    var line=1;
    for(let i=0;i<tc;i++){
        var n=+input[line++].trim();
        var str=input[line++].trim();
        detect(n,str);
    }
}
function detect(n,arr){
    let obj={};
    let count=0;
    for(let i=0;i<n;i++){
        if(obj[arr[i]]==null){
            obj[arr[i]]=1;
        }
        else{
             obj[arr[i]]+=1;
        }
    }
    for(key in obj){
        if(obj[key]%2!==0){
            count++;
        }
    }
    if(count<=1){
        console.log("Possible")
    }
    else{
        console.log("Not Possible")
    }
}
if (process.env.USERNAME === "shravan kumar") {
  runProgram(`
  2
6
aabbcc
5
aabcd
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