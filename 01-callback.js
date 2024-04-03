// callback

function calculate(x,y) {
    return x+y
}
// settimeout
function calculate2(x,y) {
    setTimeout(() => {
        console.log('กำลังคำนวณ...');
        return x+y
    },2000)
}
// callback
function calculate3(x,y,callback) {
    console.log('เริ่มต้นคำนวณ...');
    setTimeout(() => {
        let sum = x+y
        callback(sum)
    },2000)
}

function display(result) {
    console.log(`ผลบวกมีค่า = ${result}`);
}

// function ปกติ
// const sum = calculate(100,50)
// display(sum)

// const sum2 = calculate2(100,50)
// display(sum2)

// function callback
calculate3(100,50,display)

// callback ลดรูป เอา function display มารวม
calculate3(100,50,function(result) {
    console.log(`ผลบวกมีค่า = ${result}`);
})