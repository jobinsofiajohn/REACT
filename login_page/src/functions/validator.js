function validator(){
  const name = document.getElementById('name')
  const email = document.getElementById('email')
  const phone = document.getElementById('phone')
  const pwd = document.getElementById('pwd')
  const op = document.getElementById('op')
  
  const emailCheck = !email.value.includes('@') || !email.value.includes('.')
  const phoneCheck = phone.value.length < 10 || !/\d/.test(phone.value)
  const pwdCheck = pwd.value.length < 6
  const nameCheck = /\d/.test(name.value) || name.value.length < 3

  const errors=[]

  if(emailCheck) errors.push('Email')
  if(phoneCheck) errors.push('Phone')
  if(pwdCheck) errors.push('Password')
  if(nameCheck) errors.push('Name')

  for(let i=0; i<errors.length; i++){
    setTimeout(() => op.innerHTML = errors[i] + ' is invalid',
    i*1000)
  }
  if(emailCheck && phoneCheck && pwdCheck && nameCheck){
  setTimeout(() => op.innerHTML = 'Everything is invalid', errors.length*1000)
  }
  else{
      setTimeout(() => {
          op.innerHTML = errors.join(', ') + ' are invalid'
      },errors.length*1000)
    }
  }


export { validator }