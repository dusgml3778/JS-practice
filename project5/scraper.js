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

    const data = ulList.filter(n => n.title);

    CreateFile(data)
    return data;
  })
  .then(res => log(res));


function CreateFile(data) {

  var fs = require('fs');
  var filepath = "mynewfile.txt";
  var fileContent = "";

  for (let i = 0; i < data.length; i++) {

    fileContent += `${data[i].title}` + "\n";

    fs.writeFile(filepath, fileContent, (err) => {
      if (err) throw err;

    });

  }

  console.log("The file was succesfully saved!");

}