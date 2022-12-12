import axios from "axios";

const information =
  "정보: 직업 심리상담사, 말투 친절함\n정보를 바탕으로 질문에 답하세요.\nQ:";

function AIChat({ question, text }) {
  return postData({
    prompt: information + question + "\nA:" + text + "\nQ:",
    max_tokens: 100,
    temperature: 0.9,
    top_p: 0.95,
    n: 1,
  })
    .then((e) => {
      let sentences = e.data.generations[0].text.split("\n");
      console.log(e);
      console.log(sentences);
      return sentences;
    })
    .catch(() => {
      return "죄송합니다. 잠시 후 다시 시도해주세요.";
    });
}

let REST_API_KEY = "69d1babac0c9e862fea8b3574fae7bb8";
async function postData({ prompt, max_tokens, temperature, top_p, n }) {
  console.log("prompt", prompt);
  try {
    const res = await axios.post(
      "api/SingleText",
      {
        prompt,
        max_tokens,
        temperature,
        top_p,
        n,
      },
      {
        headers: {
          Authorization: `KakaoAK ${REST_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    return res;
  } catch (e) {
    console.log(e);
    return "";
  }
}

export default AIChat;
