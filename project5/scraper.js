const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;

const getHtml = async () => {
  try {
    return await axios.get("https://www.yna.co.kr/sports/all");
  } catch (error) {
    console.error(error);
  }
};

getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("div.list-type038 ul").children("li");

    $bodyList.each(function (i, elem) {
      ulList[i] = {
        title: $(this).find('li div.news-con p.lead').text().replace("\n", ""),
      };
    });

    CreateFile()
    const data = ulList.filter(n => n.title);
    return data;
  })
  .then(res => log(res));


function CreateFile() {

  var fs = require('fs');
  var fileContent = "Hello World!";
  var filepath = "mynewfile.txt";
  fs.writeFile(filepath, fileContent, (err) => {
    if (err) throw err;
    console.log("The file was succesfully saved!");
  });

}