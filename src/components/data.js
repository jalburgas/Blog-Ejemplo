import sql from 'mssql'

export const sqlConfig = {
  user: 'sa',
  password: '12345',
  database: 'NOMINA',
  server: 'localhost',
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

export const getConnection = async () => {
  try {
    const mssqlpool = await sql.connect(sqlConfig)
    return mssqlpool
  } catch (err) {
    console.error(err)
  }
}

export { sql }