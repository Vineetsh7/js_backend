import dotenv from 'dotenv'
import connectDB from "./db/index.js"
import { app } from './app.js'
dotenv.config({
    path: './env'
})
const port = process.env.PORT || 3000
connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server started on port : ${port}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB connection failed !!!", error)
    })


/*
import express from "express"
const app = express()

    (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("error", () => {
                console.log("ERROR: ", error)
                throw error
            })
            app.listen(process.env.PORT, () => {
                console.log(`App is listening on ${process.env.PORT}`);
            });
        } catch (error) {
            console.error("ERROR: ", error)
            throw error

        }
    })()
*/