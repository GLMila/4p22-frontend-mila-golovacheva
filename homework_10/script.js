const url = 'https://reqres.in/api/users?per_page=12'

const renderResult = (resultData) => {

  console.log('Пункт №1:')
  resultData.data.forEach((user) =>{
      console.log(user.last_name)
  })

  console.log('Пункт №2:')
  const filteredUsers = resultData.data.forEach((user) => {
    const isStartsWithLetterF = user.last_name.startsWith('F')

    if (isStartsWithLetterF) {
       console.log(user);
    }
 
  })
  
  console.log('Пункт №3:')
  const text = 'Наша база содержит данные следующих пользователей: '
  const result = resultData.data.reduce((accumulator,user,index) => {
    accumulator += user.first_name +' ' + user.last_name
    
    if (index<resultData.data.length-1)
      accumulator += ', '

    return accumulator
  }, text)
  console.log(result)

  console.log ('Пункт №4:')


  if (resultData.data.length>0)
  {
     Object.keys(resultData.data[0]).forEach((keyName) => {
        console.log(keyName)
      })
  }
}

fetch(url)
  .then((response) => response.json())
  .then((responseData) => renderResult(responseData))