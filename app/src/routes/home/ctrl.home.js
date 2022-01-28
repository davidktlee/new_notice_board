'use strict'
//index ejs 파일 응답
const hello = (req, res) => {
  res.render('../views/home/index')
}
//login ejs 파일 응답
const login = (req, res) => {
  res.render('home/login')
}

module.exports = {
  hello,
  login,
}
