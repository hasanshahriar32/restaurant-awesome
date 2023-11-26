const dotenv = require("dotenv");
const path = require("path");

//location
dotenv.config({ path: path.join(process.cwd(), ".env") });

export const Environments = {
  backendUrl: process.env.BACKEND_URL,
};
