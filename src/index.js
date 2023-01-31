const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// ROUTES
const clientRoutes = require("./routes/client.routes");
const paymentRoutes = require("./routes/payment.routes");
const personRoutes = require("./routes/person.routes");
const roleRoutes = require("./routes/role.routes");
const serviceRoutes = require("./routes/service.routes");
const taskRoutes = require("./routes/task.routes");
const userRoutes = require("./routes/user.routes");
const workerTaskRoutes = require("./routes/worker-task.routes");
const workerRoutes = require("./routes/worker.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3001","http://localhost:3000"],
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());

app.use(authRoutes);
app.use(clientRoutes);
app.use(paymentRoutes);
app.use(personRoutes);
app.use(roleRoutes);
app.use(serviceRoutes);
app.use(taskRoutes);
app.use(userRoutes);
app.use(workerTaskRoutes);
app.use(workerRoutes);

app.use((err, req, res, next) => {
  return res.json({
    message: err.message,
  });
});

app.listen(3001);
console.log("Server on port 3000");
