
import { userLogin } from 'user/api'
import {useState} from "react"

const Signup = () =>{

  const [inputs, setInputs] = useState({})
  const {email, nickname, password} = inputs;

  const onChange = e => {
    e.preventDefault()
    const {value, name} = e.target
    setInputs({...inputs, [name]: value})
  }

  const onClick = e => {
    e.preventDefault()
    const request = {email, nickname, password}
    alert(`사용자 이름: ${JSON.stringify(request)}`)
    userLogin(request)
    .then((res)=>{
      console.log(`Response is ${res}`)
      localStorage.setItem('token',JSON.stringify(res.config.data))
    })  
    .catch((err)=>{  
      console.log(err)
      alert('아이디와 비밀번호를 다시 입력해주세요')
    }) 
  }
 
  return (
    <table style={{ width: "30%", height: "30%", margin: "0 auto", border: "1px solid black"}}>
    <h2>회원가입</h2>
    
    <label for="email"><b>이메일</b></label>
    <input type ="text" name="email" onChange={onChange}/><br/>

    <label for="psw"><b>비밀번호</b></label>
    <input type ="text" name="password" onChange={onChange}/><br/>

    <label for="nickname"><b>닉네임</b></label>
    <input type ="text" name="nickname" onChange={onChange}/><br/>

    <label>
      <input type="checkbox" checked="checked" name="remember" 
      style={{marginbottom:"15px"}}/>
      <a href="#">이용약관 동의</a>
      <input type="checkbox" checked="checked" name="remember" 
      style={{marginbottom:"15px"}}/>
      <a href="#">개인정보 수집 및 이용 동의</a>
    </label>

    <div class="clearfix">
    <button onClick={onClick}> 가입하기 </button>
    <button type="button" class="cancelbtn">취소</button>
    </div>
    </table>
    )}

export default Signup
