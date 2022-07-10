function sum(...args) {
    let total =0;
    for (let i = 0; i< args.length;i++){
        total+= args[i];
        console.log("0 ) "+total);
    }
    console.log(args.indexOf(1));
    return total;
}
console.log(sum(1,2,3))