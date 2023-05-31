function fibonacci() {
    //This is Carson's fibonacci method
    let array = [0, 1];
    for (i = 0; i < 8; i++) {
        let a = array.pop();
        let b = array.pop();
        array.push(b, a, a+b);
    }
    console.log(array);
}
// fibonacci();