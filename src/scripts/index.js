const fs = require("fs")
fs.writeFileSync(
  "./.env",
  `CLOUDINARY_URL=${process.env.CLOUDINARY_URL}\n
  GATSBY_GRAPHQL_API=${process.env.GATSBY_GRAPHQL_API}\n
  GATSBY_UPLOAD_PRESET=${process.env.GATSBY_UPLOAD_PRESET}\n
  GATSBY_CLOUD_NAME=${process.env.GATSBY_CLOUD_NAME}\n`
)
