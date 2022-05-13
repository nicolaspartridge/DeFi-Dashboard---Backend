import { Request, Response, NextFunction } from "express";
import logging from "../config/logging";

const NAMESPACE = 'FTX Controller'

const getFTXData = (req: Request, res: Response, next: NextFunction) => {
  logging.info(NAMESPACE, `FIX market data route called.`)
  
  return res.status(200).json({
    message: 'pong'
  })
}

export default { getFTXData }