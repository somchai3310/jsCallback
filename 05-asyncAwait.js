// Async/Await
// async function
// Await Promise

const connect = true;

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

// Async/Await
async function start() {
  console.log(await downloading(url1));
  console.log(await downloading(url2));
  console.log(await downloading(url3));
  console.log(await downloading(url4));
}

start();
