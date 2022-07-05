const express = require('express')
const userRouter = require('./routes/user.routes')
const messageRouter = require('./routes/post.routes')
const cors = require("cors");

const PORT = process.env.PORT || 8080

const app = express()

const corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

app.use(express.json())

app.use('/api', userRouter)
app.use('/api', messageRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))


