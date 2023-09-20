// import mongoose from "mongoose";
// import bodyParser from "body-parser";

// export default class Server {
//   alreadyDone = false;
//   constructor() {
//     this.setConfigurations();
//   }

//   setConfigurations() {
//     this.connectMongoDb();
//     this.configureBodyParser();
//   }

//   connectMongoDb() {
//     console.log(process.env.MONGO_DB_URL, " URL");
//     if (this.alreadyDone) {
//       return;
//     }
//     this.alreadyDone = true;

//     mongoose
//       .connect(
//         process.env.MONGO_DB_URL ||
//           "mongodb+srv://dbUser:dbUser@cluster1.ltxiedh.mongodb.net/",
//         {
//           useNewUrlParser: true,
//           useUnifiedTopology: true,
//           dbName: "Tech_2x",
//         }
//       )
//       .then(() => {
//         console.log("connected to database");
//       });
//   }

//   configureBodyParser() {
//     this.app.use(bodyParser.urlencoded({ extended: true }));
//   }

//   // error404Handler() {
//   //   this.app.use((req, res) => {
//   //     res.status(404).json({
//   //       message: "Not Found",
//   //       status_code: 404,
//   //     });
//   //   });
//   // }

//   // handleErrors() {
//   //   this.app.use((error, req, res, next) => {
//   //     const errorStatus = req.errorStatus || 500;
//   //     res.status(errorStatus).json({
//   //       message: error.message || "Something Went Wrong. Please Try Again",
//   //       status_code: errorStatus,
//   //     });
//   //   });
//   // }
// }
