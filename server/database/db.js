import mongoose from 'mongoose';


const Connection = async()=> {
    const URL = `mongodb+srv://martharachanapriya:rachana@ecommerce-web.hwrqqna.mongodb.net/`;
    try {
        await mongoose.connect(URL, {  })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;