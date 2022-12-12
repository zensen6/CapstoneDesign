import axios from "axios";

async function SendNodejs({ text }) {
  axios
    .post("api/emotion", text)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((e) => {
      console.error(e);
      return e;
    });
}

export default SendNodejs;
