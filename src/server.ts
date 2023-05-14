import mongoose from 'mongoose';
import app from './app';

const port: number = 3000;

const bootstrap = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/mongoose-practice');
    console.log(`Database connected!!!`);
    app.listen(port, () => {
      console.log(`Server up and running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

bootstrap();
