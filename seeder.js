const connection = require('./server')

const createAdminTable = `
  CREATE TABLE admin (
    email VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW()
  )
`

connection.query(createAdminTable, (err, result) => {
  if (err) throw err
  console.log(result)
})

const createAdmin = `
  INSERT INTO admin (email, first_name, last_name)
  VALUES ('jason@test.com', '123456')
`

connection.query(createAdmin, (err, result) => {
  if (err) throw err
  console.log(result)
})

const createUsersTable = `
  CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW()
  )
`

connection.query(createUsersTable, (err, result) => {
  if (err) throw err
  console.log(result)
})