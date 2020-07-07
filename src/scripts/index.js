require("dotenv").config()
const fs = require("fs")
fs.writeFileSync(
  "./.env",
  `GATSBY_GRAPHQL_API=${process.env.GATSBY_GRAPHQL_API}\nGATSBY_UPLOAD_URL=${process.env.GATSBY_GRAPHQL_API}\n`
)
fs.writeFileSync(
  "./src/config/index.js",
  `export default {
  cloud_name: "${process.env.GATSBY_CLOUD_NAME}",
  upload_preset: "${process.env.GATSBY_UPLOAD_PRESET}",
}`
)
