import mysql from 'mysql2/promise';
import { mysqlConnect } from "../../utils/connectDB";



export default async function handler(req, res)  {


    // list of objects:
    const visitors =  [
        {
        id: 1,
        page: "home",
        ips: "109.156.170.244, 34.160.111.145,35.191.14.0",
        timestamp: "2022-12-6 16:21:37"
        },
        {
        id: 2,
        page: "home",
        ips: "109.156.170.244, 34.160.111.145,35.191.26.104",
        timestamp: "2022-12-6 16:21:37"
        },
        {
        id: 3,
        page: "home",
        ips: "109.156.170.244, 34.160.111.145,35.191.14.6",
        timestamp: "2022-12-6 16:21:37"
        },
        {
        id: 4,
        page: "home",
        ips: "109.156.170.244, 34.160.111.145,35.191.14.12",
        timestamp: "2022-12-6 16:21:37"
        },
        {
        id: 5,
        page: "home",
        ips: "109.156.170.244, 34.160.111.145,35.191.15.214",
        timestamp: "2022-12-6 16:26:39"
        },
        {
        id: 6,
        page: "home",
        ips: "109.156.170.244, 34.160.111.145,35.191.15.208",
        timestamp: "2022-12-6 16:26:39"
        },
        {
        id: 7,
        page: "home",
        ips: "109.156.170.244, 34.160.111.145,35.191.15.217",
        timestamp: "2022-12-6 16:26:39"
        },
        {
        id: 8,
        page: "home",
        ips: "109.156.170.244, 34.160.111.145,35.191.15.220",
        timestamp: "2022-12-6 16:26:39"
        },
        {
        id: 9,
        page: "home",
        ips: "109.156.170.244, 34.160.111.145,35.191.15.208",
        timestamp: "2022-12-6 16:27:7"
        },
        {
        id: 10,
        page: "home",
        ips: "109.156.170.244, 34.160.111.145,35.191.15.208",
        timestamp: "2022-12-6 16:27:7"
        },
        {
        id: 11,
        page: "home",
        ips: "109.156.170.244, 34.160.111.145,35.191.3.134",
        timestamp: "2022-12-6 16:30:43"
        },
        {
        id: 12,
        page: "home",
        ips: "109.156.170.244, 34.160.111.145,35.191.3.140",
        timestamp: "2022-12-6 16:30:43"
        },
        {
        id: 13,
        page: "home",
        ips: "109.156.170.244, 34.160.111.145,35.191.3.69",
        timestamp: "2022-12-6 16:34:57"
        },
        {
        id: 14,
        page: "home",
        ips: "109.156.170.244, 34.160.111.145,35.191.3.81",
        timestamp: "2022-12-6 16:34:57"
        },
        {
        id: 15,
        page: "home",
        ips: "109.156.170.244, 34.160.111.145,35.191.3.72",
        timestamp: "2022-12-6 16:34:57"
        },
        {
        id: 16,
        page: "home",
        ips: "109.156.170.244, 34.160.111.145,35.191.3.66",
        timestamp: "2022-12-6 16:34:57"
        },
        {
        id: 17,
        page: "upcoming events",
        ips: "109.156.170.244, 34.160.111.145,35.191.3.138",
        timestamp: "2022-12-6 16:39:43"
        },
        {
        id: 18,
        page: "upcoming events",
        ips: "109.156.170.244, 34.160.111.145,35.191.3.144",
        timestamp: "2022-12-6 16:39:43"
        },
        {
        id: 19,
        page: "meet the ladies team",
        ips: "109.156.170.244, 34.160.111.145,35.191.17.208",
        timestamp: "2022-12-6 16:40:38"
        },
        {
        id: 20,
        page: "meet the ladies team",
        ips: "109.156.170.244, 34.160.111.145,35.191.17.217",
        timestamp: "2022-12-6 16:40:38"
        },
        {
        id: 21,
        page: "meet the mens team",
        ips: "109.156.170.244, 34.160.111.145,35.191.8.15",
        timestamp: "2022-12-6 16:41:37"
        },
        {
        id: 22,
        page: "meet the mens team",
        ips: "109.156.170.244, 34.160.111.145,35.191.8.3",
        timestamp: "2022-12-6 16:41:37"
        },
        {
        id: 23,
        page: "Join us",
        ips: "109.156.170.244, 34.160.111.145,35.191.26.98",
        timestamp: "2022-12-6 16:42:15"
        },
        {
        id: 24,
        page: "about",
        ips: "109.156.170.244, 34.160.111.145,35.191.9.212",
        timestamp: "2022-12-6 16:43:29"
        },
        {
        id: 25,
        page: "about",
        ips: "109.156.170.244, 34.160.111.145,35.191.10.115",
        timestamp: "2022-12-6 16:43:29"
        },
        {
        id: 26,
        page: "about",
        ips: "109.156.170.244, 34.160.111.145,35.191.10.121",
        timestamp: "2022-12-6 16:43:29"
        },
        {
        id: 27,
        page: "contact",
        ips: "109.156.170.244, 34.160.111.145,35.191.15.218",
        timestamp: "2022-12-6 16:44:32"
        },
        {
        id: 28,
        page: "home",
        ips: "92.40.212.121, 34.160.111.145,35.191.8.15",
        timestamp: "2022-12-6 17:14:13"
        },
        {
        id: 29,
        page: "home",
        ips: "92.40.212.121, 34.160.111.145,35.191.8.21",
        timestamp: "2022-12-6 17:14:15"
        },
        {
        id: 30,
        page: "home",
        ips: "109.156.170.244, 34.160.111.145,35.191.3.135",
        timestamp: "2022-12-6 17:19:21"
        }];


    const connection = await mysql.createConnection(mysqlConnect);


    const values = []
    const query = `select * from visitors`;
    const [results] = await connection.execute(query, values);

    console.log('results fropm naphill.visitors:>>>',results);






    res.json(results);
}