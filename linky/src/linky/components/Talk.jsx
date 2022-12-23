import {useState} from "react"
import linky_img from "linky/components/linky_img.png"

const Talk = () => {

  return (
  <>
  <h1 style={{color: "hotpink"}}>링키와의 대화</h1>
  <br/>
  <br/>
  <img src={linky_img} width={300} height={270}></img>
  <br/>
  <br/>
  <br/>
  <input type ="text" name="대화 입력창" onChange={""}/>
  <button> 말걸기 </button>
  <br/>
  <br/>
  <button> 현재 나의 우울 지수는? </button>
  <br/>
  <br/>
  <br/>
  </>)}

export default Talk