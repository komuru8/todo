//expressをインポート
const express = require("express");
//アプリとして使う
const app = express();
//exportしたものをどこで管理するのか指定
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
//.envのファイルを読み込み
require('dotenv').config();
//expressでjson形式でデータを送ると宣言
app.use(express.json());
//publicで静的ページを読み込むと宣言
app.use(express.static("./public"));

//ローカルサーバーを立ち上げ
const PORT =5000;

//ルーティング設計
app.use("/api/v1/tasks", taskRoute);

//データベースと接続
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        //問題なく立ち上がったらメッセージを表示
    app.listen(PORT, console.log("サーバーが起動しました"));
    }catch (err){
        console.log(err);
    }
};

start();