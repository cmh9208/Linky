import {useState} from "react"
import { Link } from "react-router-dom"
import { Route, Routes } from "react-router-dom"


const Mbti = () => {
    return (
        <>
        <h1>MBTI 성향검사</h1>
        MBTI 검사를 통해 당신에게 어울리는 캐릭터가 생성됩니다.
        <br/>
        <br/>
        질문 1 : 나는 다양한 활동을 선호하는 편이다.
        <br/>
        <br/>
        <button>그렇다</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <button>아니다</button>
        <br/>
        <br/>
        질문 2 : 나는 말을 많이하는 편이다. 
        <br/>
        <br/>
        <button>그렇다</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <button>아니다</button>
        <br/>
        <br/>
        질문 3 : 나는 말 중간에 끼어드는 편이다.
        <br/>
        <br/>
        <button>그렇다</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <button>아니다</button>
        <br/>
        <br/>
        질문 4 : 나는 감정을 솔직하게 표현하는 편이다.
        <br/>
        <br/>
        <button>그렇다</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <button>아니다</button>
        <br/>
        <br/>
        질문 5 : 나는 실내에 있기를 좋아한다. 
        <br/>
        <br/>
        <button>그렇다</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <button>아니다</button>
        <br/>
        <br/>
        질문 6 : 나는 말을 끝까지 잘 듣는 편이다. 
        <br/>
        <br/>
        <button>그렇다</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <button>아니다</button>
        <br/>
        <br/>
        질문 7 : 나는 소수의 친한 친구를 사귀는편이다. 
        <br/>
        <br/>
        <button>그렇다</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <button>아니다</button>
        <br/>
        <br/>
        질문 8 : 나는 혼자 있어도 싫지 않은 편이다.
        <br/>
        <br/>
        <button>그렇다</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <button>아니다</button>
        <br/>
        <br/>
        질문 9 : 나는 조용한 취미를 즐기는 편이다. 
        <br/>
        <br/>
        <button>그렇다</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <button>아니다</button>
        <br/>
        <br/>
        질문 10 : 나는 원칙대로 하는 편이다. 
        <br/>
        <br/>
        <button>그렇다</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <button>아니다</button>
        <br/>
        <br/>
        질문 11 : 나는 일 위주로 하는 편이다. 
        <br/>
        <br/>
        <button>그렇다</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <button>아니다</button>
        <br/>
        <br/>
        질문 12 : 나는 냉철한 이성으로 판단하는 편이다. 
        <br/>
        <br/>
        <button>그렇다</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <button>아니다</button>
        <br/>
        <br/>
        질문 13 : 나는 따질 것은 따지는 편이다. 
        <br/>
        <br/>
        <button>그렇다</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <button>아니다</button>
        <br/>
        <br/>
        질문 14 : 나는 결과를 중요하게 여기는 편이다.
        <br/>
        <br/>
        <button>그렇다</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <button>아니다</button>
        <br/>
        <br/>
        질문 15 : 나는 상대방 입장을 고려하는 편이다. 
        <br/>
        <br/>
        <button>그렇다</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <button>아니다</button>
        <br/>
        <br/>
        질문 16 : 나는 상황에 따라 조정하는 편이다. 
        <br/>
        <br/>
        <button>그렇다</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <button>아니다</button>
        <br/>
        <br/>
        질문 17 : 나는 마음이 따스하다는 말을 듣는 편이다. 
        <br/>
        <br/>
        <button>그렇다</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <button>아니다</button>
        <br/>
        <br/>
        질문 18 : 나는 여유를 가지는 편이다. 
        <br/>
        <br/>
        <button>그렇다</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <button>아니다</button>
        <br/>
        <br/>
        <button>결과보기</button>
        <br/>
        <br/>
        시작하기를 누르면 캐릭터가 생성되고 대화가 시작됩니다.
        <br/>
        <br/>
        <button><Link to="/talk">시작하기</Link></button>
        <br/>
        <br/>
        
        </>
        )
    }
  
  export default Mbti

