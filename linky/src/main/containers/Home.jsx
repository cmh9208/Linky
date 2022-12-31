import { Tutorial, Talk } from "linky"
import { Main, Navigation } from "main"
import { Mbti } from "mbti"
import { Route, Routes } from "react-router-dom"
import { Login, SignUp } from "users"

const Home = () => {
  return (<>
  <table style={{ width: "100%", height: "700px", textAlign: "center", margin: "0 auto", border: "1px solid black"}}>
      <thead>
          <tr columns="4" >
              <td style={{ width: "100%", height: "10%", border: "1px solid black"}}>
                  <Navigation/>
              </td>
          </tr>
      </thead>
      <tbody >
          <td style={{ width: "100%", textAlign: "center", margin: "0 auto"}}>
          <Routes >
              <Route path="/home" element={<Main/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/signup" element={<SignUp/>}></Route>
              <Route path="/tutorial" element={<Tutorial/>}></Route>
              <Route path="/mbti" element={<Mbti/>}></Route>
              <Route path="/talk" element={<Talk/>}></Route>
          </Routes>
          
          
          </td>
   
      <tr style={{ width: "100%", height: "10%", textAlign: "center", margin: "0 auto", }}>
          <td style={{ width: "100%", border: "1px solid black"}}>
            이용약관 | 개인정보처리방침 | 책임의 한계와 법적고지 | 회원정보 고객센터
          </td>
      </tr>
      </tbody>
  </table>
  </>)
}
export default Home