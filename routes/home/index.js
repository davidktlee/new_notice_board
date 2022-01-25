'use strict'
//모듈
const express = require('express')
const router = express.Router()
//불러오기
const ctrl = require('./ctrl.home')
// 실행될 행동
router.get('/', ctrl.hello)
router.get('/login', ctrl.login)

module.exports = router
