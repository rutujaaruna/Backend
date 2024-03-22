import express, { Request, Response } from 'express';
import { Connection } from './data-source';
import dotenv from 'dotenv';
import logger from './logger';

// const pORT : number = parseInt(process.env.PORT as string, 10) || 3000;
// const hostName : string = process.env.HOSTNAME ? process.env.HOSTNAME : 3000;


dotenv.config();

/**
 * connecting to the database using typeorm
 */
Connection.initialize().then(() => {
  logger.info('Data Source has been initialized!');
}).catch((error) => {
  logger.error('Error:  ', error);
});

