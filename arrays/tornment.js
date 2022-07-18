function runProgram(input){   
    input=input.trim().split("\n");
    var n=+input[0];
    var line=1;
    var mat=[];
    for(let i=0;i<n;i++){
        mat.push(input[line++].trim().split(" "));
    }
    tornment(n,mat);
}
function  tornment(n,arr){
    let max=-Infinity;
    let x;
    let obj={};
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]==null){
            obj[arr[i]]=1;
        }
        else{
              obj[arr[i]]+=1;
        }
    }
    for(key in obj){
        if(obj[key]>max){
            max=obj[key];
            x=key;
        }
    }
    console.log(x);
}
if (process.env.USERNAME === "shravan kumar") {
  runProgram(`
  5
A
ABA
ABA
A
A
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