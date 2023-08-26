"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const log_headers_1 = require("../middlewares/log-headers");
const translator_1 = require("../translator/translator");
const router = (0, express_1.Router)();
router.post('/earth-mars-comm/message', log_headers_1.logHeaders, (req, res) => {
    const { message } = req.body;
    const { 'x-sender': sender, 'x-receiver': receiver } = req.headers;
    let translatedMessage;
    if (sender === 'earth' && receiver === 'mars') {
        translatedMessage = (0, translator_1.translateToNumeric)(message);
    }
    else if (sender === 'mars' && receiver === 'earth') {
        translatedMessage = (0, translator_1.translateToEnglish)(message);
    }
    else {
        return res.status(400).json({ message: 'Unsupported sender and receiver combination' });
    }
    res.json({ message: translatedMessage });
});
exports.default = router;
