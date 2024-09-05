function getTicket(n) {
    let arr = new Array(n);
    for(let i=0; i<n; i++) {
        arr[i]= Math.floor(Math.random()*10);
    }
    return arr;
}

function sum(arr) {
    let sum=0;
    arr.forEach(item => sum=sum+item);
    return sum;
}

export {getTicket, sum};