import axios from 'axios'

export const apiCall = async (url, method, body) => {
  try {
    return await axios({
      url: `${process.env.REACT_APP_API_BACK}${url}`,
      method: method,
      data: body,
      headers: {
        'Content-Type': 'application/json',
      // Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
      },
    })
  } catch (error) {
    if (error.message.includes('401')) {
      window.location.replace('/')
    }

    throw error
  }
}

export const apiCallLogin = async (url, method, body) => {
  try {
    return await axios({
      url: `${process.env.REACT_APP_API_BACK}${url}`,
      method: method,
      data: body,
      headers: {
        'Content-Type': 'application/json',
      //  Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
      },
    })
  } catch (error) {
    if (error.message.includes('401')) {
      return {
        data : {
          status : false
        }
      }
    }

    throw error
  }
}
