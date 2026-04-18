import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
    try {
        const { name, email, phone, role, type, ...extraData } = await req.json()

        console.log(`Received notification request for ${name} (${email}) - Type: ${type || role}`)

        console.log(`Sending email via Resend...`)

        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: 'CodesRock <notifications@codesrock.com>',
                to: 'hello@codesrock.com',
                subject: `New Form Submission: ${type || role || 'General'}`,
                html: `
          <h1>New Form Submission</h1>
          <p><strong>Name:</strong> ${name || 'N/A'}</p>
          <p><strong>Email:</strong> ${email || 'N/A'}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Role/Type:</strong> ${type || role || 'N/A'}</p>
          <hr />
          <h3>Additional Details:</h3>
          <pre>${JSON.stringify(extraData, null, 2)}</pre>
        `,
            }),
        })

        const data = await res.json()
        console.log('Resend Response:', JSON.stringify(data, null, 2))

        return new Response(JSON.stringify(data), {
            headers: { 'Content-Type': 'application/json' },
            status: res.status,
        })
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500,
        })
    }
})
