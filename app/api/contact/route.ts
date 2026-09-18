export const dynamic = "force-dynamic";

// const CONTACT_EMAIL = "goshenshelters2026@gmail.com";
const CONTACT_EMAIL = "emmancipationera@gmail.com";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return Response.json(
      {
        error:
          "Email service is not configured. Set RESEND_API_KEY in your environment.",
      },
      { status: 503 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const subject = String(body.subject ?? "General enquiry").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return Response.json(
      { error: "Name, email and message are required." },
      { status: 400 },
    );
  }

  const html = buildEmailHtml(name, phone, email, subject, message);
  const text = buildEmailText(name, phone, email, subject, message);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from:
          process.env.CONTACT_FROM_EMAIL ??
          `Goshen Shelters <onboarding@resend.dev>`,
        to: [CONTACT_EMAIL],
        replyTo: email,
        subject: `Website enquiry: ${subject}`,
        html,
        text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend API error:", detail);
      return Response.json(
        { error: "Failed to send message." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json({ error: "Failed to send message." }, { status: 502 });
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailHtml(
  name: string,
  phone: string,
  email: string,
  subject: string,
  message: string,
): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Website Enquiry</title>
</head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,sans-serif;background-color:#f7f5f2;-webkit-text-size-adjust:100%;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7f5f2;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
                    <tr>
            <td style="background-color:#F7F3EC;padding:24px 40px;text-align:center;border-bottom:2px solid #E5DDD3;">
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
                <tr>
                  <td style="vertical-align:middle;padding-right:12px;">
                    <svg width="40" height="40" viewBox="0 0 40 40" style="display:block;">
                      <rect x="4" y="16" width="32" height="20" rx="2" fill="#362454"/>
                      <rect x="18" y="6" width="4" height="10" fill="#362454"/>
                      <rect x="16" y="2" width="8" height="4" rx="1" fill="#A04236"/>
                      <rect x="10" y="22" width="5" height="14" rx="1" fill="#F7F3EC"/>
                      <rect x="25" y="22" width="5" height="14" rx="1" fill="#F7F3EC"/>
                      <rect x="18" y="30" width="4" height="6" rx="1" fill="#A04236"/>
                    </svg>
                  </td>
                  <td style="vertical-align:middle;">
                    <span style="font-family:Georgia,'Times New Roman',serif;font-size:20px;font-weight:700;color:#362454;letter-spacing:0.5px;">Goshen Shelters</span>
                    <br/>
                    <span style="font-family:Georgia,'Times New Roman',serif;font-size:13px;font-weight:600;color:#A04236;letter-spacing:1px;">FOUNDATION</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color:#2F1B69;padding:32px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:600;letter-spacing:0.5px;">Website Enquiry</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #E5DDD3;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:120px;vertical-align:top;">
                          <span style="font-size:12px;font-weight:600;color:#8C8379;text-transform:uppercase;letter-spacing:1px;">Name</span>
                        </td>
                        <td style="vertical-align:top;padding-left:8px;">
                          <span style="font-size:15px;color:#2F1B69;font-weight:500;">${escapeHtml(name)}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #E5DDD3;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:120px;vertical-align:top;">
                          <span style="font-size:12px;font-weight:600;color:#8C8379;text-transform:uppercase;letter-spacing:1px;">Email</span>
                        </td>
                        <td style="vertical-align:top;padding-left:8px;">
                          <span style="font-size:15px;color:#2F1B69;">${escapeHtml(email)}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                ${phone ? `<tr>
                  <td style="padding:12px 0;border-bottom:1px solid #E5DDD3;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:120px;vertical-align:top;">
                          <span style="font-size:12px;font-weight:600;color:#8C8379;text-transform:uppercase;letter-spacing:1px;">Phone</span>
                        </td>
                        <td style="vertical-align:top;padding-left:8px;">
                          <span style="font-size:15px;color:#2F1B69;">${escapeHtml(phone)}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>` : ""}
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #E5DDD3;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:120px;vertical-align:top;">
                          <span style="font-size:12px;font-weight:600;color:#8C8379;text-transform:uppercase;letter-spacing:1px;">Subject</span>
                        </td>
                        <td style="vertical-align:top;padding-left:8px;">
                          <span style="font-size:15px;color:#2F1B69;">${escapeHtml(subject)}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;">
                    <span style="font-size:12px;font-weight:600;color:#8C8379;text-transform:uppercase;letter-spacing:1px;">Message</span>
                    <p style="margin:8px 0 0;font-size:15px;color:#5E5752;line-height:1.7;">${escapeHtml(message).replace(/\n/g, "<br />")}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 40px;background-color:#FAFAF8;border-top:1px solid #E5DDD3;text-align:center;">
              <p style="margin:0;font-size:13px;color:#8C8379;">This message was sent via the Goshen Shelters website contact form.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildEmailText(
  name: string,
  phone: string,
  email: string,
  subject: string,
  message: string,
): string {
  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    ...(phone ? [`Phone / WhatsApp: ${phone}`] : []),
    `Subject: ${subject}`,
    ``,
    `Message:`,
    message,
    ``,
    "---",
    "This message was sent via the Goshen Shelters website contact form.",
  ];
  return lines.join("\n");
}
