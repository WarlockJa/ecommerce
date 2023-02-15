import type { NextApiRequest, NextApiResponse } from "next";

export default function sendFeedback(
    req: NextApiRequest,
    res: NextApiResponse 
) {
    if(!req.body?.from || !req.body?.to || !req.body?.message) res.status(400).json({ 'message': 'Incorrect input data' });

    const nodemailer = require('nodemailer');
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: '465',
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        tls: { rejectUnauthorized: false }
    });

    const options = {
        from: req.body.from,
        to: req.body.to,
        replyto: req.body.replyto,
        subject: req.body.subject,
        text: req.body.message
    };

    transport.sendMail(options, function(err: object, info: object) {
        err
            ? res.status(500).json({ 'message': err })
            : res.status(200).json({ 'message': info });
    });
}
