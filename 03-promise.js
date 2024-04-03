let connect = true;
const downloading = new Promise(function (resolve, reject) {
  if (connect) {
    resolve("Download Done");
  } else {
    reject("Download Fail");
  }
});
const downloadingTime = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (connect) {
      resolve("Download Done");
    } else {
      reject("Download Fail");
    }
  }, 3000);
});

const downloadingThen = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (connect) {
      resolve("Download Done");
    } else {
      reject("Download Fail");
    }
  }, 3000);
})
// ลดรูป
  .then((result) => {
    console.log("xoxo");
  })
  .catch((result) => {});
// downloadingThen.then(result => {
//     console.log('xoxo');
// })
// downloadingThen.catch(result => {

// })

console.log(downloading);
console.log(downloadingTime);
console.log(downloadingThen);
