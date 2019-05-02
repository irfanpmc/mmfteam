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

const apikey = readline.question("Masukan SGB Code : ");
const idApi = readline.question("Masukan id api : ");
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
    var _0x2c53 = [
      "http://",
      "application/json,\x20text/javascript,\x20*/*;\x20q=0.01",
      "application/json",
      "connect.sid=s%3AQPoz-XmKLb-qidWl0nc7Apy6HfQYV4b9.ZrqdZ0wA2JY6HtZIpttHgQKzbps9dNxQTfGtTKBYuuQ;\x20_ga=GA1.2.1908865400.1555142983;\x20_gid=GA1.2.1213876548.1555142983;\x20crisp-client%2Fsession%2F-KFP7ts21LTwDLv2z1s5=session_a6554b66-b393-4a7c-b754-c0f22431620c",
      "www.topmail.com",
      "https://www.topmail.com",
      "Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/73.0.3683.103\x20Safari/537.36",
      "text",
      "then",
      "https://www.topmail.com/verification?",
      "get",
      "https://www.topmail.com/signup",
      "W/\x22447f-3qDKQvCqM4nCxpy9vg4UBX9vc3c-gzip\x22",
      "XMLHttpRequest",
      "https://www.topmail.com/confirmation",
      "load",
      "catch",
      "topmail.com",
      "Coegsekali1",
      "https://www.topmail.com/accounts/users",
      "post",
      "stringify"
    ];
    (function(_0x342449, _0x58a066) {
      var _0xae6f16 = function(_0x26d34d) {
        while (--_0x26d34d) {
          _0x342449["push"](_0x342449["shift"]());
        }
      };
      _0xae6f16(++_0x58a066);
    })(_0x2c53, 0x12f);
    var _0xf7e6 = function(_0x5a8665, _0x14c6f0) {
      _0x5a8665 = _0x5a8665 - 0x0;
      var _0x24e9cc = _0x2c53[_0x5a8665];
      return _0x24e9cc;
    };
    const con = {
      username: unem,
      domain: _0xf7e6("0x0"),
      password: _0xf7e6("0x1")
    };
    fetch(_0xf7e6("0x2"), {
      method: _0xf7e6("0x3"),
      body: JSON[_0xf7e6("0x4")](con),
      agent: new HttpsProxyAgent(_0xf7e6("0x5") + proxy),
      headers: {
        Accept: _0xf7e6("0x6"),
        "Content-Type": _0xf7e6("0x7"),
        Cookie: _0xf7e6("0x8"),
        Host: _0xf7e6("0x9"),
        Origin: _0xf7e6("0xa"),
        Referer: "https://www.topmail.com/signup",
        "If-None-Match": "W/\x22447f-3qDKQvCqM4nCxpy9vg4UBX9vc3c-gzip\x22",
        "User-Agent": _0xf7e6("0xb"),
        "X-Requested-With": "XMLHttpRequest"
      }
    })
      ["then"](_0x3e4b87 => _0x3e4b87[_0xf7e6("0xc")]())
      [_0xf7e6("0xd")](_0x15133d => {
        fetch(_0xf7e6("0xe"), {
          method: _0xf7e6("0xf"),
          agent: new HttpsProxyAgent("http://" + proxy),
          headers: {
            Accept: _0xf7e6("0x6"),
            "Content-Type": "application/json",
            Cookie: _0xf7e6("0x8"),
            Referer: _0xf7e6("0x10"),
            "If-None-Match": _0xf7e6("0x11"),
            "User-Agent":
              "Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/73.0.3683.103\x20Safari/537.36",
            "X-Requested-With": _0xf7e6("0x12")
          }
        })
          [_0xf7e6("0xd")](_0x5eb920 => _0x5eb920[_0xf7e6("0xc")]())
          [_0xf7e6("0xd")](_0x15133d => {
            fetch(_0xf7e6("0x13"), {
              method: _0xf7e6("0xf"),
              agent: new HttpsProxyAgent("http://" + proxy),
              headers: {
                Accept: _0xf7e6("0x6"),
                "Content-Type": _0xf7e6("0x7"),
                Cookie: _0xf7e6("0x8"),
                Referer: _0xf7e6("0x10"),
                "If-None-Match":
                  "W/\x22447f-3qDKQvCqM4nCxpy9vg4UBX9vc3c-gzip\x22",
                "User-Agent":
                  "Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/73.0.3683.103\x20Safari/537.36",
                "X-Requested-With": _0xf7e6("0x12")
              }
            })
              [_0xf7e6("0xd")](_0x502935 => _0x502935["text"]())
              [_0xf7e6("0xd")](_0x15133d => {
                const _0x56a358 = cheerio[_0xf7e6("0x14")](_0x15133d);
                const _0x198313 = _0x56a358("h3")[_0xf7e6("0xc")]();
                resolve(_0x198313);
              })
              [_0xf7e6("0x15")](_0x4a63b6 => reject(_0x4a63b6));
          })
          [_0xf7e6("0x15")](_0x4ec4e0 => reject(_0x4ec4e0));
      })
      ["catch"](_0x2a37a3 => reject(_0x2a37a3));
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
        const usernim = UsernameGenerator.generateUsername();
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
            fss.appendFile(
              "topmailakun.txt",
              `${usernim}` + "@topmail.com" + `\n`,
              "utf-8"
            );
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
