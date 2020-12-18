module.exports = {
  mysqlDatabaseUrl: process.env.MYSQL_DATABASE_URL || process.env.JAWSDB_URL || process.env.CLEARDB_DATABASE_URL,
  postgreDatabaseUrl: process.env.POSTGRES_DATABASE_URL || process.env.POSTGRES_URL
}
