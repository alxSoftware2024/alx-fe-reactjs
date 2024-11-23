import React from 'react'
import {Field, Formik,Form} from 'formik'
const initialValues={
    username:'',
    email:'',
    password:'',
    
};
function RegistrationForm() {
    const onSubmit= (values,action)=>{
        console.log(values);
        action.resetForm();}
  return (
<Formik initialValues={initialValues}  onSubmit={onSubmit}>
<Form>
    <label>Name:</label>
    <Field type='text'  name='username'/>
    <br/>
    <label>Email:</label>
    <Field type='email'  name='email'/>
    <br/>
    <label>Password:</label>
    <Field type='password'  name='password'/>
</Form>
    </Formik>


    )
}

export default RegistrationForm