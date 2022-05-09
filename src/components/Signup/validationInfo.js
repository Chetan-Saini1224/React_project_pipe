export default function validateInfo(values)
{
let errors ={}

if(!values.username.trim())
{
    errors.username = "Username Required"
}

if(!values.password)
{
    errors.password = 'Password is required'
}
else if(values.password.length < 6)
{
    errors.password = "password needs to be 6 Characters or more"
}

if(!values.password2)
{
    errors.password2 = 'Password is required'
}
else if(values.password != values.password)
{
    errors.password2="Passwords do not match"   
}
return errors;
}