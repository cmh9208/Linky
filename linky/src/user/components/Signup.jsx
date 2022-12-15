
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

  // return (
  // <>
  //   {/* <form action="/action_page.php" method="post">
  //   <div class="imgcontainer">
  //   <img src={aaaa} alt="Avatar" class="avatar"/>
  //   </div>
  //  <div class="container" style={{backgroundcolor:'#f1f1f1'}}>
  //   <button type="button" class="cancelbtn">Cancel</button>
  //   <span class="psw">Forgot <a href="#">password?</a></span>
  //   </div> 
  //   </form> */}

 
  // EMAIL: <input type ="text" name="email" onChange={onChange}/><br/>
  // NICKNAME: <input type ="text" name="nickname" onChange={onChange}/><br/>
  // PASSWORD: <input type ="text" name="password" onChange={onChange}/><br/>
  // <button onClick={onClick}> 로그인 </button>
  // </>)}
  return (<>

    

  <form action="action_page.php" style={{border:'1px solid #ccc'}}> 
  {/* <form action="action_page.php"> */}
  <div class="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    

    <label for="email"><b>Email</b></label>
    <input type ="text" name="email" onChange={onChange}/><br/>

    <label for="psw"><b>Password</b></label>
    <input type ="text" name="password" onChange={onChange}/><br/>

    <label for="nickname"><b>Nickname</b></label>
    <input type ="text" name="nickname" onChange={onChange}/><br/>

    <label>
      <input type="checkbox" checked="checked" name="remember" style={{marginbottom:"15px"}}/> Remember me
      {/* <input type="checkbox" checked="checked" name="remember"/> Remember me */}
    </label>

    <p>By creating an account you agree to our <a href="#" >Terms & Privacy</a>.</p>

    <div class="clearfix">
    <button onClick={onClick}> Sign up </button>
    <button type="button" class="cancelbtn">Cancel</button>
    </div>
      
      
  </div>
</form>
{/* EMAIL: <input type ="text" name="email" onChange={onChange}/><br/>
  NICKNAME: <input type ="text" name="nickname" onChange={onChange}/><br/>
  PASSWORD: <input type ="text" name="password" onChange={onChange}/><br/> */}
  {/* <button onClick={onClick}> 가입 </button> */}
</>)}


export default Signup
