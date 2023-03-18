import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';

function Edit() {

  const [id,setId]=useState('')
  const [empname,setEmpname]=useState('')
  const [age,setAge]=useState('')
  const [designation,setDesignation]=useState('')
  const [salary,setsalary]=useState(0)

  useEffect(()=>{
    setId(localStorage.getItem("ID"));
    setEmpname(localStorage.getItem("NAME"));
    setAge(localStorage.getItem("AGE"));
    setDesignation(localStorage.getItem("DESIGNATION"));
    setsalary(JSON.parse(localStorage.getItem("SALARY")));

  },[])
  
  return (
    <>
    <h1 className='text-center m-5'>Update Employee Detailes</h1>
    <p className='p-4'>An employee management system is a distributed system developed to maintain the employee details and the company work. Thanks to the technology which offers us a plethora of solutions which makes the work easier and faster.
    </p>
    <Row>
      <Col md={4}>
      <img style={{width:"600px",height:"550px"}} src='https://th.bing.com/th/id/R.2ebd62f3f6a21c1325b9c366d17996d7?rik=DqGO3RXyKPN8Qw&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon%2fstaff-icon-png-65.png&ehk=r85d%2bcjtS%2bKr2%2fASH21wvf%2fMgg3ZiB9FI%2b7W3gvxr48%3d&risl=&pid=ImgRaw&r=0'/>
      </Col>
      <Col md={5}>
      <Form className='border border-4 p-5'>
      <Form.Group className="mb-3">
        <h3 className='text-center'>Update Your Detailes</h3>
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="text" placeholder="Enter ypur name" value={empname} onChange={(e)=>setEmpname(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control type="Number" placeholder="Enter your age"  value={age}  onChange={(e)=>setAge(e.target.value)} required/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter your designation" value={designation}  onChange={(e)=>setDesignation(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter your salary" value={salary}  onChange={(e)=>setsalary(e.target.value)} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I Agree" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </Col>
    </Row>


    </>
  )
}

export default Edit