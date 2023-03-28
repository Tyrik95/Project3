const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')
const app = express();
require('dotenv').config();
const port = process.env.PORT;

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors())

const AllRacerRoutes = require("./routes/racer.routes");
const AllMatchRoutes = require("./routes/match.routes");
const AllTeamRoutes = require("./routes/team.routes");
const AllBetRoutes = require("./routes/bet.routes");

AllRacerRoutes(app);
AllMatchRoutes(app);
AllTeamRoutes(app);
AllBetRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );