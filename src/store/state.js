const state = {
  login: localStorage.getItem('login') === '' || localStorage.getItem('login') === null ? '0' : localStorage.getItem('login')
}

export default state
