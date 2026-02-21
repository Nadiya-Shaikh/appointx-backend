import dns from "dns";

dns.setDefaultResultOrder("ipv4first");


// Or try this alternative:

dns.setServers(['8.8.8.8', '1.1.1.1']); // Use Google/Cloudflare DNS

import 'dotenv/config'

import dotenv from "dotenv";
dotenv.config();

import express from "express"
import cors from 'cors'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import adminRouter from "./routes/adminRoute.js"




// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()



// middlewares
app.use(express.json())
// app.use(cors())
// Allow Vercel frontend
// app.use(cors({
//   origin: ['https://appointx-user.vercel.app', 'http://localhost:5173'],
//   credentials: true
// }));

app.use(cors({
  origin: [
    "https://appointx-user.vercel.app",
    "https://appointx-admin.vercel.app",  
    "http://localhost:5173"
  ],
  credentials: true
}));




// api endpoints
app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)

app.get("/", (req, res) => {
  res.send("API Working")
});
console.log(process.env.MONGODB_URI);

app.listen(port, () => console.log(`Server started on PORT:${port}`))