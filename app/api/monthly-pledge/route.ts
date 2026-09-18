export const dynamic = "force-dynamic";

const TEAM_EMAIL = process.env.TEAM_EMAIL ?? "info@goshenshelters.org";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "Email service is not configured." },
      { status: 503 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = String(body.email ?? "").trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Valid email is required." }, { status: 400 });
  }

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "contact@goshenshelters.org",
        to: [email],
        subject: "Thank you for your monthly commitment",
        html: buildDonorEmail(email),
        text: buildDonorText(email),
      }),
    });

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "contact@goshenshelters.org",
        to: [TEAM_EMAIL],
        subject: "New monthly donation pledge",
        html: buildTeamEmail(email),
        text: buildTeamText(email),
      }),
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Monthly pledge email error:", error);
    return Response.json({ error: "Failed to send emails." }, { status: 502 });
  }
}

function buildDonorEmail(email: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Monthly Commitment</title></head>
<body style="margin:0;padding:40px 20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background-color:#f7f5f2;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
    <tr><td style="background-color:#2F1B69;padding:32px 40px;text-align:center;">
      <h1 style="margin:0;color:#ffffff;font-family:Georgia,serif;font-size:22px;">Thank you for your monthly commitment!</h1>
    </td></tr>
    <tr><td style="padding:32px 40px;">
      <p style="font-size:16px;color:#5E5752;line-height:1.7;">Hi there,</p>
      <p style="font-size:16px;color:#5E5752;line-height:1.7;">You've just committed to giving monthly to Goshen Shelters Foundation. Your consistent support helps provide shelter, meals, counselling and education for women and children throughout the year.</p>
      <p style="font-size:16px;color:#5E5752;line-height:1.7;">We'll send your donation receipts and updates to:</p>
      <p style="font-size:16px;color:#2F1B69;font-weight:600;">${email}</p>
      <p style="font-size:16px;color:#5E5752;line-height:1.7;">In the next step, choose your preferred payment method to set up your monthly donation. Thank you for being part of our community of monthly supporters.</p>
    </td></tr>
    <tr><td style="padding:24px 40px;background:#FAFAF8;border-top:1px solid #E5DDD3;text-align:center;">
      <p style="margin:0;font-size:13px;color:#8C8379;">Goshen Shelters Foundation</p>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildDonorText(email: string): string {
  return `Thank you for your monthly commitment!

You've just committed to giving monthly to Goshen Shelters Foundation. Your consistent support helps provide shelter, meals, counselling and education for women and children throughout the year.

We'll send your donation receipts and updates to: ${email}

Next, choose your preferred payment method to set up your monthly donation. Thank you for being part of our community of monthly supporters.

---
Goshen Shelters Foundation`;
}

function buildTeamEmail(email: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>New Monthly Pledge</title></head>
<body style="margin:0;padding:40px 20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background-color:#f7f5f2;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
    <tr><td style="background-color:#A04236;padding:32px 40px;text-align:center;">
      <h1 style="margin:0;color:#ffffff;font-family:Georgia,serif;font-size:22px;">New Monthly Donation Pledge</h1>
    </td></tr>
    <tr><td style="padding:32px 40px;">
      <p style="font-size:16px;color:#5E5752;line-height:1.7;">A new donor has pledged a monthly commitment.</p>
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:20px 0;">
        <tr><td style="padding:8px 0;font-size:15px;color:#2F1B69;font-weight:600;">Donor email:</td><td style="padding:8px 0;font-size:15px;color:#5E5752;">${email}</td></tr>
      </table>
      <p style="font-size:16px;color:#5E5752;line-height:1.7;">Please follow up to complete their monthly donation setup.</p>
    </td></tr>
    <tr><td style="padding:24px 40px;background:#FAFAF8;border-top:1px solid #E5DDD3;text-align:center;">
      <p style="margin:0;font-size:13px;color:#8C8379;">Goshen Shelters Foundation</p>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildTeamText(email: string): string {
  return `New Monthly Donation Pledge

A new donor has pledged a monthly commitment.

Donor email: ${email}

Please follow up to complete their monthly donation setup.

---
Goshen Shelters Foundation`;
}
