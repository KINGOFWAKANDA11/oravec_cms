"use server";
import { Resend } from "resend";
import React from "react";
import ContactFormEmail from "@/emails/index";

const resend = new Resend(process.env.API_KEY);

export const sendEmail = async (formData: FormData) => {
    const email = formData.get("email");
    const name =  formData.get("name");
    const number =  formData.get("number");
    const message =  formData.get("message");
    const balik =  formData.get("balik");

    let data;
    try {
        data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to:"info@lubooravec.sk",
            subject: "Správa z webu lubooravec.sk",
            replyTo: email as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string, email: email as string, name: name as string, balik: balik as string, number: number as string
            }),
        })
    } catch (error) {
        return {
            error: "Failed to send email"
        }
    }

    return {
        success: true,
        data
    }
}