///////////////
// reading and writing to a file using synchronous
// const fs = require("fs");
// const read = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(read);

// const write = `This is what we know about avacado: ${read} \nCreated on ${Date.now()} `;
// fs.writeFileSync("./txt/new.txt", write);

///////////////
// reading and writing to a file using Asynchronous acepting a callback
// const fs = require("fs");

// setTimeout(() => {
//   fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//     console.log(data);
//   });
// }, 2000);

// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   if (err) return console.log("error");
//   console.log(data);
//   fs.readFile("./txt/input.txt", "utf-8", (err, data1) => {
//     if (err) return console.log(`error found: ${err}`);
//     console.log(data1);
//     fs.writeFile("./txt/final.txt", `${data} \n${data1}`, "utf-8", (err) => {
//       if (err) return console.log(`error found: ${err}`);
//       console.log("new file has been added");
//     });
//   });
// });
// console.log("started reading a file");

////creating a server /////
// const http = require("http");
// const url = require("url");

// const server = http.createServer((req, res) => {

//   res.end("this is new server");
// });
// server.listen(8000, "127.0.0.1", () => {
//   console.log("listning to port 8000");
// });

////routing////
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("this is overview");
  } else if (pathName === "/product") {
    res.end("this is product page ");
  } else {
    res.writeHead(404, {
      "content-type": "text.html",
    });
    res.end("<h1>page not found</h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listning to port 8000");
});
