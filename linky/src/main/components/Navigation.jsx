import { Link } from "react-router-dom"
const Navigation = () => <nav>
    <ul>
        <><Link to="/home">메인홈</Link></>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <><Link to="/tutorial">튜토리얼</Link></>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <><Link to="/mbti">링키 시작하기</Link></>
        {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <><Link to="/talk">링키와 대화</Link></> */}
    </ul>
</nav>
export default Navigation