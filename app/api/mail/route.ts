
import { render } from "@react-email/render";

import Template, { KoalaWelcomeEmail } from "../../../emails";


import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request, res: Response) {
    const { email, name, balik, number, text } = await request.json();

    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: [email],
        subject: "Thank you",
        html: await render(KoalaWelcomeEmail({ name, email, number, balik, text })),
    });

    if (error){
        return Response.json(error);
    }

    return Response.json({ message: "Email sent successfully"})
}
