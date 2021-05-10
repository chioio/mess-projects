import axios from 'axios'

export const signIn = ({ username, password }) => {
  const data = {
    username,
    password
  }
  return axios.request({
    url: '/user/sign-in',
    param: data,
    method: 'get'
  })
}
