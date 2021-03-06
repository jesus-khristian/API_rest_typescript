import express, {Application} from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth';

const app : Application = express();

//settings
app.set('port', process.env.PORT || 3000);


//middleware
app.use(morgan('dev'));


//routes
app.use(authRoutes);

export default app;