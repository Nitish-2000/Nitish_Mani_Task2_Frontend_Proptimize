import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {toast} from 'react-toastify';
import AXiosConfig from '../Axios/AxiosConfig'



function Create() {
    const createNewUser = async (values)=>{
      let firstName = values.firstName
      let lastName = values.lastName
      let email = values.email
      let password = values.password
        try{
       let res = await AXiosConfig.post('/users',{
       firstName,
       lastName,
       email,
       password})

        if(res.status==200){
            toast.success("User Created successfull")
        }
        }
        catch(error){
             toast.error(error.message)
        }
    }

    const SignupSchema = Yup.object().shape({
         firstName:Yup.string().required("First Name is required"),
         lastName:Yup.string().required("Last Name is required"),
         email:Yup.string().email('Invalid email').required('Email is Required'),
         password:Yup.string().min(10,"Password should be more than 10 char").required('Required'),
    })
    
  return (
    <div className="container-fluid">
  <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Create User</h1>
                        {/* <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a> */}
                    </div>
                    <div className="row">
<Formik
             initialValues={{
                firstName:"",
                lastName:"",
                email:"",
                password:""}}
                validationSchema={SignupSchema}
                onSubmit={(Values)=>{
                    createNewUser(Values)
                }} >
                {({errors,touched,handleBlur,handleSubmit,handleChange})=>(
                    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" >
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" name="firstName" placeholder="Enter First Name" onBlur={handleBlur} onChange={handleChange} />
      {errors.firstName && touched.firstName? <div style={{color:'red'}}>{errors.firstName}</div>:null}
    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" name="lastName" placeholder="Enter Last Name" onBlur={handleBlur} onChange={handleChange}/>
      {errors.lastName && touched.lastName? <div style={{color:'red'}}>{errors.lastName}</div>:null}
    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" name="email" placeholder="Enter Email" onBlur={handleBlur} onChange={handleChange}/>
      {errors.email && touched.email? <div style={{color:'red'}}>{errors.email}</div>:null}
    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" name="password" placeholder="Enter Password" onBlur={handleBlur} onChange={handleChange}/>
      {errors.password && touched.password? <div style={{color:'red'}}>{errors.password}</div>:null}
    </Form.Group>
    <Button variant="primary" type='submit'>
                Submit
              </Button>
  </Form>
                )}
    
</Formik>
    
  </div>
  </div>
  )
}

export default Create;

