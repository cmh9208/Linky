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
        질문 1 : 블라블라??
        <br/>
        <br/>
        <button>그렇다</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <button>아니다</button>
        <br/>
        <br/>
        <br/>
        질문 2 : 블라블라??
        <br/>
        <br/>
        <button>그렇다</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <button>아니다</button>
        <br/>
        <br/>
        <br/>
        질문 3 : 블라블라??
        <br/>
        <br/>
        <button>그렇다</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <button>아니다</button>
        <br/>
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

