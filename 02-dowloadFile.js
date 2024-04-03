// program download file
const url1 = "mus.dev/car.json";
const url2 = "mus.dev/file2.json";
const url3 = "mus.dev/file3.json";

function downloading(url, callback) {
  console.log(`กำลังโหลดไฟล์จาก ${url}`);
  setTimeout(() => {
    callback(url);
  }, 1000);
}

function complate(result) {
  console.log(`Download ${result} Done!`);
}

// downloading(url1, complate);
// downloading(url1, function (result) {
//   console.log(`Download ${result} Done!`);
// });

// โหดลหลายไฟล์
// callback Hell
downloading(url1, function (result) {
  console.log(`Download ${result} Done!`);
  downloading(url2, function (result) {
    console.log(`Download ${result} Done!`);
    downloading(url3, function (result) {
      console.log(`Download ${result} Done!`);
    });
  });
});
