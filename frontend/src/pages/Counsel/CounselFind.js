import { Map, MapMarker } from "react-kakao-maps-sdk";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import useGeolocation from "../../services/useGeolocation";
import { json } from "react-router-dom";
import axios from "axios";
function Appmap() {
  const [check, setCheck] = useState(0);
  const [state, setState] = useState({
    center: {
      lat: 37.5525,
      lng: 126.927,
    },
    errMsg: null,
    isLoading: true,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
      console.log(state.center);
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
  }, [check]);

  //스크립트 파일 읽어오기
  const new_script = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.addEventListener("load", () => {
        resolve();
      });
      script.addEventListener("error", (e) => {
        reject(e);
      });
      document.head.appendChild(script);
    });
  };
  useEffect(() => {
    //카카오맵 스크립트 읽어오기

    const my_script = new_script(
      "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=45718c240a0f483e77408b48dd737ce1"
    );

    my_script.then(() => {
      console.log("script loaded!!!");
      const kakao = window["kakao"];
      kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(state.center.lat, state.center.lng), //좌표설정
          level: 3,
        };
        const map = new kakao.maps.Map(mapContainer, options); //맵생성
        //마커설정
        const markerPosition = new kakao.maps.LatLng(
          state.center.lat,
          state.center.lng
        );
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
      console.log("map made!");
    });
  }, [check]);

  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <div>
        <button onClick={setCheck}>new</button>
      </div>
      <div id="map" className="map"></div>
      <Footer />
    </div>
  );
}

export default Appmap;
