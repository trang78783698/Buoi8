let formatmoney = (amount) => {
    if(amount < 0){
        return "0";
    }
       return new Intl.NumberFormat().format(amount);
};
console.log(formatmoney(-1));
console.log(formatmoney(0));
console.log(formatmoney(10));
console.log(formatmoney(1000));
console.log(formatmoney(10000));
console.log(formatmoney(1000000));
