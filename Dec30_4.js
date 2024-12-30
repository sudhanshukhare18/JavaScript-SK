function cube(n) {
    return n*n*n
}
let b = console.log(cube(2));
for(let i=1;i<b;i++){
    for(let j=1;j<=i;j++){
        if(i==b||j==i||j==1){
            document.write("*")
        }
    }
    document.write("\n")
}
