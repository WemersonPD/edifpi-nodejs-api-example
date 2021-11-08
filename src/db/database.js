module.exports = {
  development: {
    username: "pguser",
    password: "pgpassword",
    database: "edifpi",
    host: "localhost",
    dialect: "postgres",
    port: "5432",
    timezone: '-03:00'
  },
  test: {
    username: "",
    password: "",
    database: "",
    host: "",
    dialect: "postgres",
    port: "5432"
  },
  production: {
    username: "",
    password: "",
    database: "",
    host: "",
    dialect: "postgres",
    port: "5432"
  }
}

