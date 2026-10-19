// Emails website enquiries to the firm using Resend (https://resend.com).
// Set RESEND_API_KEY, ENQUIRY_TO (e.g. info@praevo.com.au) and ENQUIRY_FROM
// (an address on a domain verified in Resend, e.g. website@praevo.com.au) in Vercel.
// Nothing is stored on the website itself.

const MAX = 5000;
const clean = (v: unknown) => String(v ?? "").slice(0, MAX).replace(/[<>]/g, "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }
  if (body.company_website) return Response.json({ ok: true }); // bot
  if (!body.name || !body.email || !body.message || body.consent !== "yes") {
    return Response.json({ ok: false }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO;
  const from = process.env.ENQUIRY_FROM;
  if (!key || !to || !from) return Response.json({ ok: false, error: "Email not configured" }, { status: 500 });

  const kind = body.kind === "collaborate" ? "Collaboration enquiry" : "Client enquiry";
  const fields = ["firm", "city", "enrolment", "name", "email", "phone", "area", "otherParties", "message"];
  const text = fields
    .filter((f) => body[f])
    .map((f) => `${f}: ${clean(body[f])}`)
    .join("\n\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to,
      reply_to: clean(body.email),
      subject: `${kind} – ${clean(body.name)}${body.area ? ` – ${clean(body.area)}` : ""}`,
      text,
    }),
  });
  return Response.json({ ok: res.ok }, { status: res.ok ? 200 : 502 });
}
