import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'*',
    cretentials: true,
};
app.use(cors(corsOptions));

const port = 3000;
app.listen(port,() => {
    console.log("App is listening on port 3000");
})

