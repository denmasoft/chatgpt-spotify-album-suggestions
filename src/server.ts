import express from 'express';
import suggestionsRoutes from './routes/suggestions';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/suggest', suggestionsRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});