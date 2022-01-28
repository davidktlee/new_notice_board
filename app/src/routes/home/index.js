'use strict'
//모듈
const express = require('express')
const router = express.Router()
//불러오기
const ctrl = require('./ctrl.home')
// 실행될 행동
router.get('/', ctrl.output.hello)
router.get('/login', ctrl.output.login)
router.post('/login', ctrl.process.login)

module.exports = router
