

const Youtube = require('youtube-node');
var youtube = new Youtube();
youtube.setKey(process.env.YOUTUBE);
const request = require("request");

function response(res:any, text:any){
	const options = {
		uri: "http://3.34.107.27:8080/NIA",
		method: 'POST',
		form:{
			'content' : text
		}
	}

	return new Promise(function(resolve, reject){
		request.post(options, function callback(err: any, httpResponse : any, body : any) {
			if(err){
				console.log("err");
				console.log(err);
				reject(err);
			}else{

				var PARSED = JSON.parse(body);
				var word = PARSED['emotion'];
				if(word === "기쁨"){
					word = "즐거운 노래";
				}else if(word === "슬픔" || word === "불안"){
					word += "을 극복";
				}else if(word === "상처"){
					word += "를 치유";
				}else if(word === "당황"){
					word += " 대처";
				}
				var limit = 10;  // 출력 갯수
				youtube.addParam('order', 'rating'); // 평점 순으로 정렬
				youtube.addParam('type', 'video');   // 타입 지정
				//// 검색 옵션 끝
				youtube.search(word, limit, function (err:any, result:any) { // 검색 실행
					if (err) { console.log(err); return; } // 에러일 경우 에러공지하고 빠져나감

					//console.log(JSON.stringify(result, null, 2)); // 받아온 전체 리스트 출력

					var items = result["items"]; // 결과 중 items 항목만 가져옴
					for (var i in items) { 
						var it = items[i];
						var title = it["snippet"]["title"];
						var video_id = it["id"]["videoId"];
						var url = "https://www.youtube.com/watch?v=" + video_id;
					}
					let res_: any = {
						"emotion" : PARSED,
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
export default response;