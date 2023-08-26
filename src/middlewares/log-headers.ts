import { Request, Response, NextFunction } from 'express';

export const logHeaders = (req: Request, res: Response, next: NextFunction) => {
  const sender = req.header('x-sender');
  const receiver = req.header('x-receiver');

  console.log(`Sender: ${sender}, Receiver: ${receiver}`);
  next();
};
