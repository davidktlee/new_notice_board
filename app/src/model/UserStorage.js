'use strict'

class userStorage {
  static #users = {
    id: ['lee', 'kim', 'park'],
    psword: ['123', '1234', '12345'],
    name: ['이', '김', '박'],
  }
  static getUsers(...fields) {
    const users = this.#users
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field]
      }
      return newUsers
    }, {})

    return newUsers
  }
}

module.exports = userStorage
