const fetch = require("node-fetch");
const cheerio = require("cheerio");
const delay = require("delay");
const readline = require("readline-sync");
const { URLSearchParams } = require("url");
const colors = require("../lib/colors");
const moment = require("moment");
const ua = require("useragent-generator");
const fs = require("fs");
const fss = require("async-file");
const HttpsProxyAgent = require("https-proxy-agent");
const UsernameGenerator = require("username-generator");

console.log("#####################");
console.log("Panggil w Amin Tamvan");
console.log("#####################");

console.log("");
console.log("");

const apikey = readline.question("Masukan Sgb Code : ");
const Reff = readline.question("Masukan Kode Referal : ");
const file = readline.question("Masukan file berisi list proxy : ");

console.log("");
console.log("");

const functionCheckProxy = (ip, port) =>
  new Promise((resolve, reject) => {
    const params = new URLSearchParams();
    params.append("country_detec", 0);
    params.append("item[]", ip);
    params.append("item[]", port);

    fetch(`https://proxy6.net/checker/check`, {
      method: "post",
      body: params,
      headers: {
        Accept: "*/*",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Cookie:
          "PHPSESSID=0o17rc54rvgpsfg10mfdf8r517; lng=en; ref_url=https%3A%2F%2Fl.facebook.com%2F; _ym_uid=1555183789581562516; _ym_d=1555183789; _ym_wasSynced=%7B%22time%22%3A1555183790973%2C%22params%22%3A%7B%22eu%22%3A0%7D%2C%22bkParams%22%3A%7B%7D%7D; _ym_isad=2",

        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest"
      }
    })
      .then(res => res.text())
      .then(te => resolve(te))
      .catch(err => reject(err));
  });

const functionRegisterBigtok = email =>
  new Promise((resolve, reject) => {
    // const email = `${emol}@${domain}`;
    fetch(
      `https://${idApi}.execute-api.us-east-2.amazonaws.com/token/api/v1/register?email=${email}&Reff=${Reff}`,
      {
        method: "post",
        headers: { "x-api-key": `${apikey}` }
      }
    )
      .then(res => res.text())
      .then(te => resolve(te))
      .catch(err => reject(err));
  });

const functionRegister = (unem, proxy) =>
  new Promise((resolve, reject) => {
    const con = {
      username: unem,
      domain: "topmail.com",
      password: "Coegsekali1"
    };
    fetch(`https://www.topmail.com/accounts/users`, {
      method: "post",
      body: JSON.stringify(con),
      agent: new HttpsProxyAgent("http://" + proxy),
      headers: {
        Accept: "application/json, text/javascript, */*; q=0.01",
        "Content-Type": "application/json",
        Cookie:
          "connect.sid=s%3AQPoz-XmKLb-qidWl0nc7Apy6HfQYV4b9.ZrqdZ0wA2JY6HtZIpttHgQKzbps9dNxQTfGtTKBYuuQ; _ga=GA1.2.1908865400.1555142983; _gid=GA1.2.1213876548.1555142983; crisp-client%2Fsession%2F-KFP7ts21LTwDLv2z1s5=session_a6554b66-b393-4a7c-b754-c0f22431620c",
        Host: "www.topmail.com",
        Origin: "https://www.topmail.com",
        Referer: "https://www.topmail.com/signup",
        "If-None-Match": 'W/"447f-3qDKQvCqM4nCxpy9vg4UBX9vc3c-gzip"',
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest"
      }
    })
      .then(res => res.text())
      .then(te => {
        fetch(`https://www.topmail.com/verification?`, {
          method: "get",
          agent: new HttpsProxyAgent("http://" + proxy),
          headers: {
            Accept: "application/json, text/javascript, */*; q=0.01",
            "Content-Type": "application/json",
            Cookie:
              "connect.sid=s%3AQPoz-XmKLb-qidWl0nc7Apy6HfQYV4b9.ZrqdZ0wA2JY6HtZIpttHgQKzbps9dNxQTfGtTKBYuuQ; _ga=GA1.2.1908865400.1555142983; _gid=GA1.2.1213876548.1555142983; crisp-client%2Fsession%2F-KFP7ts21LTwDLv2z1s5=session_a6554b66-b393-4a7c-b754-c0f22431620c",
            Referer: "https://www.topmail.com/signup",
            "If-None-Match": 'W/"447f-3qDKQvCqM4nCxpy9vg4UBX9vc3c-gzip"',
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36",
            "X-Requested-With": "XMLHttpRequest"
          }
        })
          .then(res => res.text())
          .then(te => {
            fetch(`https://www.topmail.com/confirmation`, {
              method: "get",
              agent: new HttpsProxyAgent("http://" + proxy),
              headers: {
                Accept: "application/json, text/javascript, */*; q=0.01",
                "Content-Type": "application/json",
                Cookie:
                  "connect.sid=s%3AQPoz-XmKLb-qidWl0nc7Apy6HfQYV4b9.ZrqdZ0wA2JY6HtZIpttHgQKzbps9dNxQTfGtTKBYuuQ; _ga=GA1.2.1908865400.1555142983; _gid=GA1.2.1213876548.1555142983; crisp-client%2Fsession%2F-KFP7ts21LTwDLv2z1s5=session_a6554b66-b393-4a7c-b754-c0f22431620c",
                Referer: "https://www.topmail.com/signup",
                "If-None-Match": 'W/"447f-3qDKQvCqM4nCxpy9vg4UBX9vc3c-gzip"',
                "User-Agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36",
                "X-Requested-With": "XMLHttpRequest"
              }
            })
              .then(res => res.text())
              .then(te => {
                const $ = cheerio.load(te);
                const src = $("h3").text();
                resolve(src);
              })
              .catch(err => reject(err));
          })
          .catch(err => reject(err));
      })
      .catch(err => reject(err));
  });

const genEmail = length =>
  new Promise((resolve, reject) => {
    var text = "";
    var possible =
      "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    resolve(text);
  });

(async () => {
  await console.log(
    "[" + " " + moment().format("HH:mm:ss") + " " + "]" + " " + "Start"
  );
  await fs.readFile(file, async function(err, data) {
    if (err) throw err;
    const array = data
      .toString()
      .replace(/\r\n|\r|\n/g, " ")
      .split(" ");
    for (const i in array) {
      const checkProx = await functionCheckProxy(
        array[i].split(":")[0],
        array[i].split(":")[1]
      );
      await console.log(
        "[" +
          " " +
          moment().format("HH:mm:ss") +
          " " +
          "]" +
          " " +
          "=>" +
          " " +
          colors.FgGreen,
        "Checking Proxy :" + " " + array[i],
        colors.Reset
      );
      await delay(2000);
      if (checkProx.includes("color-success") === true) {
        const usernim = await genEmail(7);
        try {
          await delay(2000);
          await console.log(
            "[" +
              " " +
              moment().format("HH:mm:ss") +
              " " +
              "]" +
              " " +
              "=>" +
              " " +
              colors.FgGreen,
            "Proxy Hidup :" + " " + array[i],
            colors.Reset
          );
          await console.log(
            "[" +
              " " +
              moment().format("HH:mm:ss") +
              " " +
              "]" +
              " " +
              "=>" +
              " " +
              colors.FgGreen,
            "Try to Create Email!!",
            colors.Reset
          );
          await delay(10000);
          const createEmail = await functionRegister(usernim, array[i]);
          // const regexEm = await new RegExp(/[.\w]+@[\w\-]{3,}(.\w{2,})+/);
          // const resGexEm = await regexEm.exec(createEmail);
          if (createEmail.includes("activated") === true) {
            console.log(
              "[" +
                " " +
                moment().format("HH:mm:ss") +
                " " +
                "]" +
                " " +
                "=>" +
                " " +
                colors.FgGreen,
              "Sukses Created Email User :" + " " + `${usernim}`,
              colors.Reset
            );
            const em = `${usernim}` + "@topmail.com";
            const regist = await functionRegisterBigtok(em);
            await console.log(
              "[" +
                " " +
                moment().format("HH:mm:ss") +
                " " +
                "]" +
                " " +
                "=>" +
                " " +
                colors.FgGreen,
              "Try register to bigtoken",
              colors.Reset
            );
            await console.log(
              "[" +
                " " +
                moment().format("HH:mm:ss") +
                " " +
                "]" +
                " " +
                "=>" +
                " " +
                colors.FgGreen,
              "Message : " + " " + regist,
              colors.Reset
            );
            fs.appendFile("topaccount.txt", `${usernim}\n`, "utf-8");
            console.log("");
            console.log("");
          } else {
            console.log(
              "[" +
                " " +
                moment().format("HH:mm:ss") +
                " " +
                "]" +
                " " +
                "=>" +
                " " +
                colors.FgRed,
              "Failed Created :" + " " + `${usernim}` + "@topmail.com",
              colors.Reset
            );
            await console.log(
              "[" +
                " " +
                moment().format("HH:mm:ss") +
                " " +
                "]" +
                " " +
                "=>" +
                " " +
                colors.FgGreen,
              "Message : " + " " + createEmail,
              colors.Reset
            );
            console.log("");
            console.log("");
          }
        } catch (e) {
          console.log("");
          console.log("");
        }
      } else {
        await console.log(
          "[" +
            " " +
            moment().format("HH:mm:ss") +
            " " +
            "]" +
            " " +
            "=>" +
            " " +
            colors.FgRed,
          "Proxy Mati :" + " " + array[i],
          colors.Reset
        );
        console.log("");
        console.log("");
      }
    }
  });
})();
