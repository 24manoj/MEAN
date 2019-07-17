var arg=process.argv[2];
if(arg>=31 | arg<=0){
    console.log("Power out of range");
}
else{
for(var i=0;i<arg;i++){
    console.log("2^ "+i+"  --->"+Math.pow(2,i));
}

}

