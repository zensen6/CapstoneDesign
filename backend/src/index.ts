import express from 'express';
import morgan from 'morgan';
import path from "path";
import User from './schema/User';
import cors from "cors";
import 'dotenv/config'
import './db.ts';
import response from "./api/youtube";

const request = require("request");
var rp = require('request-promise');
const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));



let corsOptions = {
	origin: 'http://localhost:5001',      // 출처 허용 옵션
	credential: true, // 사용자 인증이 필요한 리소스(쿠키 등) 접근
}
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, "../../frontend/build")));


app.post("/api/emotion", async (req,res)=>{
	let text = Object.keys(req.body);
	var done = false;
	let resp = await response(res,text[0]);
	return resp;
});

app.get('/', async (req, res) => {
	const userlist = await User.find({});
	console.log(userlist);
	res.header("Access-Control-Allow-Origin", "*");
	return res.send('1');
});

app.get("*", (req,res) => {
	res.sendFile(path.join(__dirname, "../../frontend/build/index.html"))
})


const PORT = 5001;
app.listen(PORT, () => {
	console.log(`server iss running on http://localhost:${PORT}`);
});

// ts-node-dev: nodemon + ts-node
// ts-node: node xxx 할때 단순히 ts파일 node하는 거라 보면된다.

// npm install express cors mongoose morgan dotenv
// yarn add -D express typescript ts-node nodemon @types/node @types/express ts-node-dev
