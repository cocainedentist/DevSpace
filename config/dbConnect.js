const mongoose = require("mongoose");
// const dns = require("node:dns");
// 학교/공유기 DNS에서 Atlas 주소를 못 찾을 때 아래 주석 해제
// dns.setServers(["8.8.8.8", "1.1.1.1"]);

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT);
    console.log("DB connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConnect;
