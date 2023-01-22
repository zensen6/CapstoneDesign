import React, { useState, useEffect } from "react";
import axios from "axios";

//백엔드에서 데이터 갖고 오는 함수
const AxiosData = () => {
  const [error, setError] = useState(null);
  const [origin, setOrigin] = useState(null);
  useEffect(() => {
    const fetchFeels = async () => {
      try {
        setOrigin(null);
        //프록시 설정으로 인해서 뒤의 부분만 axios에 적어준다
        const response = await axios.get("/list");
        setOrigin(response.data);
      } catch (e) {
        setError(e);
      }
    };
    fetchFeels();
  }, []);
  console.log(origin);
  if (error) return <div>error is ...</div>;
  if (!origin) return <div>fuck</div>;
  return (
    <ul>
      {origin.feelings.map((origins) => (
        <li key={origins.id}>
          {origins.name} {origins.feel}
        </li>
      ))}
    </ul>
  );
};

export default AxiosData;
