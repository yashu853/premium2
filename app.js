const express = require('express');
const app = express();
const expenseRoutes = require('./routes/expenseRoutes');

app.use(express.json());
app.use('/expenses', expenseRoutes);

app.listen(3000, () => console.log("✅ Server running on port 3000"));
