import { Request, Response, Router } from 'express';
import { logHeaders } from '../middlewares/log-headers';
import { translateToNumeric, translateToEnglish } from '../translator/translator';

const router = Router();

router.post('/api/earth-mars-comm/message', logHeaders, (req: Request, res: Response) => {
  const { message } = req.body;
  const { 'x-sender': sender, 'x-receiver': receiver } = req.headers;

  let translatedMessage: string;

  if (sender === 'earth' && receiver === 'mars') {
    translatedMessage = translateToNumeric(message);
  } else if (sender === 'mars' && receiver === 'earth') {
    translatedMessage = translateToEnglish(message);
  } else {
    return res.status(400).json({ message: 'Unsupported sender and receiver combination' });
  }

  res.json({ message: translatedMessage });
});

export default router;
