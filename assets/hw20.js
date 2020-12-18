// 1 task
let temperature = [-48, -46, 48, 27, -20, -35, 43, 4, 9, 10, 41, -46, -4, 0, -38, -49, 25, -46, -48, -23, -25, -22, 12, 38, 19, -20, 26, 4, 19, 23, 26, -41, 4, -13, -9, -11, -7, 38, 27, 41, 14, -35, -38, -44, -44, -22, -24, 29, -32, 41, 7, -25, 3, 27, -45, 10, 48, 8, -34, -49, 17, -16, 41, -11, -50, -6, -34, 20, 14, -18, 39, -28, -33, -27, -48, 40, -37, -44, 0, 46, 36, -34, -50, 8, -3, 26, 40, 10, -36, 24];

let frost = 0;
for (let i = 0; i < temperature.length; i++) {
    if(( temperature [i] >= 0) && (temperature [i+1] < 0)) {
        frost = frost + 1;
    }
}
console.log(`Coldest Days: ${frost}`);

let duration = 0;
let days = 1;

for (let i = 0; i < temperature.length; i++) {
    days = days +1;
    duration.push(days);
}else {
    days = 1;
    }

let maxTem = duration[0];
for (let i = 0; i < duration.length; i++) {
    if(duration[i] > maxTem) {
        maxTem = duration[i];
    }
}

console.log(`Duration of frost: ${duration}`);


// 2 task
let bitcoin = [10, 18, 33, 7, 31, 3, 40, 8, 22, 29, 7, 8, 28, 9, 23, 18, 25];

let profit = [];
let MaxProfit = 0;

for (i = 0; i <= bitcoin.length; i++){
    for ( n = i; n <= bitcoin.length; n++) {
        profit = bitcoin[n] - bitcoin[i];
        if(MaxProfit < profit) {
        MaxProfit = profit;
        }
    }
}

console.log(`Maximum profit: ${MaxProfit}`);

