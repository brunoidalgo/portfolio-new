import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

console.log('SENDER_USER:', process.env.SENDER_USER);
console.log('SENDER_PASS:', process.env.SENDER_PASS ? '********' : 'NOT SET');

//configure email
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SENDER_USER, // Acessando de forma segura
        pass: process.env.SENDER_PASS,
    },
    logger: true,
    // debug: true
})

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and Message Required!" },
                { status: 400 },
            )
        }

        const mailOption = {
            from: email,
            to: process.env.SENDER_USER,
            subject: "New contact form submission",
            text: `
                Name: ${name}
                Email: ${email}
                Message: ${message}
            `,
        };

        await transporter.sendMail(mailOption);

        return NextResponse.json(
            { message: "Contact Form Submitted Successfully!" },
            { status: 200 }
        );

    } catch (error) {
        console.error("Error processing contatc form:", error);
        return NextResponse.json(
            { error: "Failed processing contact form!" },
            { status: 500 },
        )
    }
}