import {useState} from "react"
import { userLogin } from 'user/api'
import { Link } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import {Login, Signup} from 'user'


const Main = () => {
    return (
    <>
    <h1>Linky</h1>
    <h3>링키</h3>
    <a>Psychotherapy chatbot friend for you</a><br/>
    <br/>
    team name : JMC
    <br/>
    <br/>
    <br/>

    <button><Link to="/login">로그인</Link></button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                 
    <button><Link to="/signup">회원가입</Link></button>

    

    </>)}
  
  export default Main

