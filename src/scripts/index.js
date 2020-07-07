const fs = require("fs")
fs.writeFileSync(
  "./.env",
  `CLOUDINARY_URL=${process.env.CLOUDINARY_URL}\nGATSBY_GRAPHQL_API=${process.env.GATSBY_GRAPHQL_API}\nGATSBY_UPLOAD_PRESET=${process.env.GATSBY_UPLOAD_PRESET}\nGATSBY_CLOUD_NAME=${process.env.GATSBY_CLOUD_NAME}\n`
)
