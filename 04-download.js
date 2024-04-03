// สร้าง Promise

const connect = true;
const url0 = "mus.dev/file0.json";
const url1 = "mus.dev/file1.json";
const url2 = "mus.dev/file2.json";
const url3 = "mus.dev/file3.json";
const url4 = "mus.dev/file4.json";

function downloading(url) {
  return new Promise(function (resolve, reject) {
    console.log("กำลังโหลด...");
    setTimeout(() => {
      if (connect) {
        resolve(`Load ${url} Done`);
      } else {
        reject("fail");
      }
    }, 1000);
  });
}

// downloading(url1)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(()=>{
//     console.log('จบการทำงาน');
//   })

//   หลายไฟล์
// Promise Hell เหมือน callback Hell
// downloading(url1).then(function (result) {
//   console.log(result);
//   downloading(url2).then(function (result) {
//     console.log(result);
//   })
// })

// Promise Then
downloading(url1).then(function(result){
    console.log(result);
    return downloading(url2)
}).then(function(result){
    console.log(result);
    return downloading(url3)
}).then(function(result){
    console.log(result);
})