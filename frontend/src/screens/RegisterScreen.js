import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import Loader from "../components/Loader"
import Message from "../components/Message"
import FormContainer from "../components/FormContainer"
import { register } from '../actions/userActions'

const RegisterScreen = () => {

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmPassword, setConfirmPassword ] = useState('')
  const [ message, setMessage ] = useState('')

  const dispatch = useDispatch()

  let navigate = useNavigate();

  const userRegister = useSelector(state => state.userRegister)

  const {error, loading, userInfo} = userRegister

  useEffect(() => {
      if (userInfo) {
        navigate(-1)  //go back to previous page if we are logged in already
      }
  }, [navigate, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()

    if(password !== confirmPassword){
      setMessage('Passwords does not match')
    } else {
      dispatch(register(name, email, password))
    }

    
  }

  return (
    <FormContainer> 
      <h1>Sign In</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}

      <Form onSubmit={submitHandler}>

        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type='name'
            placeholder='Enter Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          >
          </Form.Control>
        </Form.Group>
        <br></br>
        <Form.Group controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
          </Form.Control>
        </Form.Group>
        <br></br>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          >
          </Form.Control>
        </Form.Group>
        <br></br>        

        <Form.Group controlId='passwordConfirm'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            required
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          >
          </Form.Control>
        </Form.Group>
        <br></br>        


        <Button type='submit' variant='primary'>
          Register  
        </Button>

        
      </Form>

      <Row className='py-3'>
        <Col>
          Have an Account? &nbsp; 
          <Link to={'/login'}>
            Login
          </Link>
        </Col>
      </Row>

    </FormContainer>
  )

}

export default RegisterScreen