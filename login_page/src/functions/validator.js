function validator()

{
  const name = document.getElementById('name')
  const email = document.getElementById('email')
  const phone = document.getElementById('phone')
  const pwd = document.getElementById('pwd')
  const op = document.getElementById('op')

  name.classList.remove('invalid-input')
  email.classList.remove('invalid-input')
  phone.classList.remove('invalid-input')
  pwd.classList.remove('invalid-input')
  op.classList.remove('valid')
  
  const emailCheck = !(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value))
  const phoneCheck = phone.value.length < 10 || !/\d/.test(phone.value)
  const pwdCheck = pwd.value.length < 6
  const nameCheck = /\d/.test(name.value) || name.value.length < 3

  const errors=[]

  if (emailCheck) 
  {
    errors.push('Email');
    email.classList.add('invalid-input');
  }
  if (phoneCheck) 
  {
    errors.push('Phone');
    phone.classList.add('invalid-input');
  }
  if (pwdCheck) 
  {
    errors.push('Password');
    pwd.classList.add('invalid-input');
  }
  if (nameCheck) 
  {
    errors.push('Name');
    name.classList.add('invalid-input');
  }

  for(let i=0; i<errors.length; i++)
  {

    setTimeout(() => op.innerHTML = errors[i] + ' is invalid',
    i*1000)
  }
  if(emailCheck && phoneCheck && pwdCheck && nameCheck)
  {
  setTimeout(() => op.innerHTML = 'Everything is invalid', errors.length*1000)
  }
  else if(errors.length === 0)
  {
      op.classList.add('valid');
      setTimeout(() => {
          op.innerHTML = 'Everything is valid'
      },errors.length*1000)
  }
  else
  {
      setTimeout(() => {
          op.innerHTML = errors.join(', ') + ' ' + (errors.length === 1 ? 'is' : 'are') + ' invalid'
      },errors.length*1000)
  } 
  
}


export { validator }
