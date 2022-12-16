import { Route, Routes } from "react-router-dom"
import {Login, Navigation} from 'user'


const Home = () => {
  return (<>
  <table style={{ width: "1200px", height: "550px", margin: "0 auto", border: "1px solid black"}}>
      <thead>
          <tr columns="4" >
              <td style={{ width: "100%", border: "1px solid black"}}>
                  <Navigation/>
              </td>
          </tr>
      </thead>
      <tbody>
      <tr style={{ width: "20%",height: "80%",  border: "1px solid black"}}>
          <td style={{ width: "100%", border: "1px solid black"}}>
          <Routes>
              <Route path="/login" element={<Login/>}></Route>
          </Routes>
          </td>
      </tr>
      <tr>
      </tr>
      <tr style={{ width: "100%", height: "20%", border: "1px solid black"}}>
          <td style={{ width: "100%", border: "1px solid black"}}>
          </td>
      </tr>
      </tbody>
  </table>
  </>)
}
export default Home