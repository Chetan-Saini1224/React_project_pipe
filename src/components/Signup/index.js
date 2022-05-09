import useForm from './useForm'
import React from 'react'
import validate from './validationInfo'

const Signup = () => {

  const {handleChange,values,handleSubmit,errors} = useForm(validate);
      
  return (
    <div className='form-content-right' onSubmit={handleSubmit}>
        <form className='form'>
            <h1>Get started with us today! Create your
            account by filling out the information below.</h1>
            <div className='form-inputs'>
                <label htmlFor='username' className='form-label'>
                 Username  
                </label>
                <input  id="username"
                  value={values.username}
                  onChange={handleChange}   
                  type="text"
                  name="username"
                  className='form-input'
                  placeholder='Enter your username' />
            </div>
            {errors.username && <p>{errors.username}</p>}   
            <div className='form-inputs'>
                <label htmlFor='email' className='form-label'>
                 Email  
                </label>
                <input id="email" 
                 value={values.email}
                 onChange={handleChange} 
                 type="text" 
                 name="email" 
                 className='form-input' 
                 placeholder='Enter your email' />  
            </div>
             
            <div className='form-inputs'>
                <label htmlFor='password' className='form-label'>
                 Password  
                </label>
                <input id="password"
                 value={values.password}
                 onChange={handleChange}
                 type="password"
                 name="password"
                 className='form-input'
                 placeholder='Enter your password' />  
            </div>
            {errors.password && <p>{errors.password}</p>}
            <div className='form-inputs'>
                <label htmlFor='password2' className='form-label'>
                Confirm Password  
                </label>
                <input id="password2"
                 value={values.password2}
                 onChange={handleChange}
                 type="password"
                 name="password2"
                 className='form-input'
                 placeholder='Confirm Password' />  
            </div>
            {errors.password2 && <p>{errors.password2}</p>}
             <button className='form-input-btn' type='submit'>Sign up</button>  
             <span className='form-input-login'>
                 Already have an account? Login <a href="/signin" >here</a>
             </span>

        </form>
    </div>
  )
}

export default Signup