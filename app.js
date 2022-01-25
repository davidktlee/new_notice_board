'use strict'
//모듈
const express = require('express')
const app = express()
// 라우팅
const home = require('./routes/home')
//앱 세팅
app.set('views', './views')
app.set('view engine', 'ejs')
//미들웨어
app.use('/', home)
// 내보내기
module.exports = app
