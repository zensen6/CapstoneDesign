import React, { useState,useEffect } from 'react';
import MapContainer from "pages/Counsel/mapContainer";
import Button from "@mui/material/Button";
const { kakao } = window
function LandingPage() {
  var geocoder = new kakao.maps.services.Geocoder();
  const[Address, setAddress] = useState('')
  const [InputText, setInputText] = useState('')
  const [Place, setPlace] = useState('')
  const[check, setCheck] = useState(0) ; 
  const[state, setState] = useState({
    center: {
      lat: 37.5455,
      lng: 126.927,
    },
    errMsg: null,
    isLoading: true,
  }); 
//////////////////변수들 //////////////////////////

  const onChange = (e) => {
    // const placeAdded = (e.target.value).concat(' ', '심리상담소'); 
    const place = e.target.value ; 
    setInputText(place)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setPlace(InputText.concat(' ', '심리상담소'))
    setInputText('')
  }
//////////////기존의 함수들//////////////////
const findLatlng =()=>{
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
        }))
      },
      (err) => {
        setState((prev) => ({
          ...prev,
          errMsg: err.message,
          isLoading: false,
        }))
      }
    )
   
  } else {
    // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    setState((prev) => ({
     ...prev,
      errMsg: "geolocation을 사용할수 없어요..",
      isLoading: false,
    }))
  }
   return state ;
}
const latToAddress=(userState)=>{
  var coord = new kakao.maps.LatLng(userState.center.lat,userState.center.lng) ; 
  var callback = function(result, status){
    if(status===kakao.maps.services.Status.OK){
      setAddress(result[0].address.region_2depth_name); 
      console.log(Address) ; 
      
    }
  }
  geocoder.coord2Address(coord.getLng(),coord.getLat(),callback);
}

   async function getLat(){
     var userState = await findLatlng();//비동기로 실행하고 그 이후에 주소 반환하기 
     latToAddress(userState) ;
     setPlace(Address.concat('', '심리상담소'))
   }
  useEffect(()=>{
    getLat(); 
  },[check]); 
  



  /////////////////
  return (
    <>
      {/* //////////////기존의 지도 */}
      <form className="inputForm" onSubmit={handleSubmit}   
      style={{
        margin: "0px 0px 0px 0px",
      }}>
        <input placeholder="지역을 입력해주세요(ex: 신촌)" required onChange={onChange} value={InputText} 
         class="btn btn-secondary placeholder col-4 mt-3" 
         style={{
            cursor: "text",
            
         }}
        />
        <Button class="btn btn-primary mt-3" type="submit">검색</Button>
        <Button class="btn btn-primary mt-3" onClick={()=>{setCheck(check+1)}}>주변 상담소 찾기</Button>
      </form>

      <MapContainer searchPlace={Place} />
    </>
  )
}

export default LandingPage