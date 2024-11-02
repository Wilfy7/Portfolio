import express from "express";
import * as functions from "firebase-functions";
import morgan from "morgan";
import cors from "cors";
import chalk from "chalk";
import devApp from "./config/index.config";
import connectDB from "./config/connectDB";
import blogRouter from "./routes/blogPostRouter";



const app = express();

const port = devApp.dev.port;

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(cors());

//Routes
app.use("/api/v1", blogRouter)

app.listen(port, () => {
    console.log(chalk.yellowBright(`Server is running on port http://localhost:${port}`)
    ) 
});

//Connect the database
connectDB();



export const Portfolio = functions.https.onRequest(app);