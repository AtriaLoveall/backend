import { Client } from '@vercel/postgres';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
    connectionString: process.env.POSTGRES_URL, // or other relevant connection strings
});

(async () => {
    try {
        await client.connect();
        console.log("PGDatabase connected successfully");
    } catch (error) {
        console.log("Some error occurred\n" + error);
    }
})();

export default client;
