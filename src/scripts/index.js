require("dotenv").config()
const fs = require("fs")
fs.writeFileSync(
  "./.test",
  `GATSBY_GRAPHQL_API=${process.env.GATSBY_GRAPHQL_API}\nGATSBY_UPLOAD_URL=${process.env.GATSBY_GRAPHQL_API}\n`
)
