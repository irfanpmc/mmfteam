const fetch = require("node-fetch");
const cheerio = require("cheerio");
const delay = require("delay");
const readline = require("readline-sync");
const colors = require("../lib/colors");
const fs = require("async-file");
const fss = require("fs");

const moment = require("moment");
const rp = require("request-promise");

console.log("#####################");
console.log("Panggil w Amin Tamvan");
console.log("#####################");

console.log("");
console.log("");

const apikey = "SGB-d336c1cc1e";
const idApi = "x1bbuj6m1m";
const file = "result_grab.txt";

const DelaY = "1";

console.log("");
console.log("");

const functionVerification = (email, token) =>
  new Promise((resolve, reject) => {
    fetch(
      `https://${idApi}.execute-api.us-east-2.amazonaws.com/token/api/v1/email-verification?email=${email}&token=${token}`,
      {
        method: "POST",
        headers: { "x-api-key": `${apikey}` }
      }
    )
      .then(res => res.text())
      .then(text => {
        resolve(text);
      })
      .catch(err =>
        console.log(
          "[" +
            " " +
            moment().format("HH:mm:ss") +
            " " +
            "]" +
            " " +
            "Ada masalah sssSssstt..." +
            err
        )
      );
  });

const functionGetLocation = domain =>
  new Promise((resolve, reject) => {
    fetch(
      `https://${idApi}.execute-api.us-east-2.amazonaws.com/token/api/v1/get-location?url=${domain}`,
      {
        method: "POST",
        headers: { "x-api-key": `${apikey}` }
      }
    )
      .then(res => res.text())
      .then(text => {
        resolve(text);
      })
      .catch(err =>
        console.log(
          "[" +
            " " +
            moment().format("HH:mm:ss") +
            " " +
            "]" +
            " " +
            "Ada masalah sssSssstt..." +
            err
        )
      );
  });

(async () => {
  console.log(
    "[" + " " + moment().format("HH:mm:ss") + " " + "]" + " " + "MEMULAI ...."
  );
  try {
    await fss.readFile(file, async function(err, data) {
      if (err) throw err;
      const array = data
        .toString()
        .replace(/\r\n|\r|\n/g, " ")
        .split(" ");

      for (let ury in array) {
        if (array[ury].length < 100) {
          const getLocation = await functionGetLocation(array[ury]);

          const regex = await new RegExp(/(?:code)\=([\S\s]*?)\&/);
          const regexEm = await new RegExp(/[.\w]+@[\w\-]{3,}(.\w{2,})+/);
          const resGex = await regex.exec(getLocation);
          const resGexEm = await regexEm.exec(getLocation);
          const em = getLocation.split("email=")[1].replace(/\s*"\s*/g, "");
          const emm = em.replace(/\+/g, "%2b");

          if (resGexEm !== null) {
            await delay(DelaY);
            const veryf = await functionVerification(emm, resGex[1]);
            console.log(veryf);
          }
        } else {
          const decodeURL = await decodeURIComponent(array[ury]);

          const regex = await new RegExp(/\?(?:code)\=([\S\s]*?)\&/);
          const regexEm = await new RegExp(
            /([\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4})/
          );
          const resGex = await regex.exec(decodeURL);
          const resGexEm = await regexEm.exec(decodeURL);

          await delay(DelaY);
          const veryf = await functionVerification(
            resGexEm[0].replace(/\+/g, "%2b"),
            resGex[1]
          );
          console.log(veryf);
        }
      }
    });
  } catch (e) {
    console.log(e);
  }
})();

