import express from "express"
import * as functions from "firebase-functions"
import morgan from "morgan";
import cors from "cors";
import blogRouter from "./routes/blogPostRouter";


const app = express();


//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(cors());

//Routes
app.use("/api/v1", blogRouter );


app.get("/", (req: express.Request, res: express.Response):any => {
    try {
        return res.status(200).json({
            message: "Wilfred's Portfolio"
        })
    } catch (error) {
      return res.status(500).json({
        message: "Server Error"
      }) 
    }
});


//Handle unknown routes
app.use((req: express.Request, res: express.Response):any => {
    return res.status(400).json({
    message: "Page not found"
  });
});

export const Portfolio = functions.https.onRequest(app);