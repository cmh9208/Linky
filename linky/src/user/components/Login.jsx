
import {useState} from "react"
import { userLogin } from 'user/api'
 
const Login = () => {

  const [inputs, setInputs] = useState({})
  const {email, password} = inputs;

  const onChange = e => {
    e.preventDefault()
    const {value, name} = e.target
    setInputs({...inputs, [name]: value})
  }

  const onClick = e => {
    e.preventDefault()

    
    const request = {email, password}
    alert(`사용자 이름: ${JSON.stringify(request)}`)
    userLogin(request)
    .then((res)=>{
      alert(`Response is ${res.config.data}`)
      console.log(`Response is ${res.config.data}`)
      localStorage.setItem('token',JSON.stringify(res.config.data))
    })  
    .catch((err)=>{  
      console.log(err)
      alert('아이디와 비밀번호를 다시 입력해주세요')
    }) 


  }

  return (
  <table style={{ width: "30%", height: "30%", margin: "0 auto", border: "1px solid black"}}>
  <h2>로그인</h2>
  이메일: <input type ="text" name="email" onChange={onChange}/><br/>
  비밀번호: <input type ="text" name="password" onChange={onChange}/><br/>
  비밀번호 재확인: <input type ="text" name="password" onChange={onChange}/><br/>
  <label>
    <input type="checkbox" checked="checked" name="remember" style={{marginbottom:"15px"}}/> 이메일 기억
    <input type="checkbox" checked="checked" name="remember" style={{marginbottom:"15px"}}/> 로그인 상태 유지<br/>
  </label>
  <button onClick={onClick}> 로그인 하기 </button><br/>
  <button onClick={onClick}> 아이디 찾기 </button>
  <button onClick={onClick}> 비밀번호 찾기 </button>
  </table>
  )}

export default Login