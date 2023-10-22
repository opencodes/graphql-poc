const config = {
  USER: process.env.DB_USER || "opencodes",
  PASSWORD: process.env.DB_PASS || "6db0Sgj0sWYtMAHO",
  DB: process.env.DB_NAME || "poc",
};
export const environment = {
  jwtSecretKey: process.env.JWT_KEY || "secretkey",
  production: false,
  clusterUrl: `mongodb+srv://${config.USER}:${config.PASSWORD}@mongocluster.twitm.mongodb.net/${config.DB}?retryWrites=true&w=majority`,
};
