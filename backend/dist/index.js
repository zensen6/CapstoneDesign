"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const User_1 = __importDefault(require("./schema/User"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
require("./db.ts");
const request = require("request");
var rp = require('request-promise');
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.urlencoded({ extended: true }));
const Youtube = require('youtube-node');
var youtube = new Youtube();
youtube.setKey(process.env.YOUTUBE);
//console.log(process.env.YOUTUBE)
/*
let corsOptions = {
    origin: '*',      // 출처 허용 옵션
    credential: true, // 사용자 인증이 필요한 리소스(쿠키 등) 접근
}
*/
let corsOptions = {
    origin: 'http://localhost:5001',
    credential: true, // 사용자 인증이 필요한 리소스(쿠키 등) 접근
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.static(path_1.default.join(__dirname, "../../frontend/build")));
function response(res, text) {
    const options = {
        uri: "http://3.34.107.27:8080/NIA",
        method: 'POST',
        form: {
            'content': text
        }
    };
    /*
    rp(options)
    .then(function(response:any){
        console.log(response);
        return response;
    })
    .then((body:any) => {
        var PARSED = JSON.parse(body);
        var word = PARSED['emotion'];
        var limit = 10;  // 출력 갯수
        youtube.addParam('order', 'rating'); // 평점 순으로 정렬
        youtube.addParam('type', 'video');   // 타입 지정
        //// 검색 옵션 끝
        //분노, 슬픔, 불안, 상처, 당황, 기쁨 이요
        if(word === "기쁨"){
            word = "즐거운 노래";
        }else if(word === "슬픔" || word === "불안"){
            word += "을 극복";
        }else if(word === "상처"){
            word += "를 치유";
        }else if(word === "당황"){
            word += " 대처";
        }
        youtube.search(word, limit, function (err:any, result:any) { // 검색 실행
            if (err) { console.log(err); return; } // 에러일 경우 에러공지하고 빠져나감

            //console.log(JSON.stringify(result, null, 2)); // 받아온 전체 리스트 출력

            var items = result["items"]; // 결과 중 items 항목만 가져옴
            for (var i in items) {
                var it = items[i];
                var title = it["snippet"]["title"];
                var video_id = it["id"]["videoId"];
                var url = "https://www.youtube.com/watch?v=" + video_id;
                //console.log("제목 : " + title);
                //console.log("URL : " + url);
                //console.log("-----------");
            }
            let res: any = {
                "emotion" : PARSED,
                "youtube": items
            };
            console.log(res);
            return res;
        });
        return body;

        
    })
    .catch(function(err:any){
        console.log(err);
    });
    */
    return new Promise(function (resolve, reject) {
        request.post(options, function callback(err, httpResponse, body) {
            if (err) {
                console.log("err");
                console.log(err);
                reject(err);
            }
            else {
                //console.log(httpResponse);
                console.log(body);
                //resolve(body);
                //return res.send(body);
                var PARSED = JSON.parse(body);
                var word = PARSED['emotion'];
                //console.log(word);
                if (word === "기쁨") {
                    word = "즐거운 노래";
                }
                else if (word === "슬픔" || word === "불안") {
                    word += "을 극복";
                }
                else if (word === "상처") {
                    word += "를 치유";
                }
                else if (word === "당황") {
                    word += " 대처";
                }
                var limit = 10; // 출력 갯수
                youtube.addParam('order', 'rating'); // 평점 순으로 정렬
                youtube.addParam('type', 'video'); // 타입 지정
                //// 검색 옵션 끝
                youtube.search(word, limit, function (err, result) {
                    if (err) {
                        console.log(err);
                        return;
                    } // 에러일 경우 에러공지하고 빠져나감
                    //console.log(JSON.stringify(result, null, 2)); // 받아온 전체 리스트 출력
                    var items = result["items"]; // 결과 중 items 항목만 가져옴
                    for (var i in items) {
                        var it = items[i];
                        var title = it["snippet"]["title"];
                        var video_id = it["id"]["videoId"];
                        var url = "https://www.youtube.com/watch?v=" + video_id;
                        //console.log("제목 : " + title);
                        //console.log("URL : " + url);
                        //console.log("-----------");
                    }
                    let res_ = {
                        "emotion": PARSED,
                        "youtube": items
                    };
                    console.log(res_);
                    return res.send(res_);
                });
                return body;
            }
        });
    });
}
app.post("/api/emotion", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log(req.body);
    let text = Object.keys(req.body);
    console.log("이모션");
    console.log(text);
    //res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "X-Requested-With");
    //res.status(200).json({success: true})
    var done = false;
    let resp = yield response(res, text[0]);
    return resp;
    //var word = (resp as any)?.label; // 검색어 지정
    //console.log(word);
}));
/*
const response = await request.post(options, function callback(err: any, httpResponse : any, body : any) {
    if(err){
        console.log("err");
        console.log(err);
    }else{
        //console.log(httpResponse);
        done = true;
        console.log(body);
        return res.send(body);
    }
  });
  */
//if(done === false) return res.status(404).json({success: false})
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log("aaa");
    const userlist = yield User_1.default.find({});
    console.log(userlist);
    //res.set({'access-control-allow-origin':'http://localhost:5001'});
    //res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "*");
    return res.send('1');
}));
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../../frontend/build/index.html"));
});
const PORT = 5001;
app.listen(PORT, () => {
    console.log(`server iss running on http://localhost:${PORT}`);
});
// ts-node-dev: nodemon + ts-node
// ts-node: node xxx 할때 단순히 ts파일 node하는 거라 보면된다.
// npm install express cors mongoose morgan dotenv
// yarn add -D express typescript ts-node nodemon @types/node @types/express ts-node-dev
