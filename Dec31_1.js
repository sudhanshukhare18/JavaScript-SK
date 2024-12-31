function digs(n) {
    let sum=0;
    while(n!=0){
        let r =n%10;
        sum=parseInt(sum+r);
        n=n/10;
    }
    console.log(sum)
}
digs(1234)