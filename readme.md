callback
promise
async await


จัดการทำงานแบบ Asynchrounous จะมีหลายรูปแบบ
CallBack
Promise
Async & Await

CallBack -> Promise -> Async & Await

callback
function ที่จะถูกใช้งานเมื่ออีก function ทำงานเสร็จ

callback Hell
ซ้อนกันไปเรื่อยๆ แก้ปัญหา โดยใช้ Promise

Promise
ให้รอหระว่างที่ผลลัพธ์ยังไม่เกิดขึ้น
Promise(function(resolve,reject){

})
peding -> เป็นสถานะเริ่มต้น
ถ้าทำงานสำเร็จ resolve
ถ้าล้มเหลวเป็น reject

then(), catch(), finally()
then() resolve
catch() reject err
finally() all last