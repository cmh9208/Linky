
import axios from 'axios'
const server = `http://localhost:8000`
export const userLogin = req => axios.post(`${server}/blog/auth/login`, req)