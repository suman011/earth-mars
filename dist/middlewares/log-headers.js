"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logHeaders = void 0;
const logHeaders = (req, res, next) => {
    const sender = req.header('x-sender');
    const receiver = req.header('x-receiver');
    console.log(`Sender: ${sender}, Receiver: ${receiver}`);
    next();
};
exports.logHeaders = logHeaders;
