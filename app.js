// callback

// แบบปกติ
console.log("เริ่มต้น load");
console.log("กำลัง download");
console.log("Done");

// asynchronous
// ทำเสร็จก่อนไปก่อน
console.log("เริ่มต้น load");
setTimeout(() => {
  console.log("กำลัง download");
}, 3000);
console.log("Done");
