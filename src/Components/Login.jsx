/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
  import AXiosConfig from '../Axios/AxiosConfig'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'

function Login() {
    let navigate = useNavigate()
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")

  let check = async(e)=>{
    e.preventDefault()
    let res =  await AXiosConfig.post('/users/login',{
        email, //mahi105@gmail.com
        password //123
    })
    if(res.status==200){
     toast.success("Login Successful")
     sessionStorage.setItem('token',res.data.token)
     navigate('/dashboard')
    }

  }
    
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" onClick ={check}  type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login