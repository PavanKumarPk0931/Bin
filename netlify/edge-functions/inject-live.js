// netlify/edge-functions/inject-live.js

export default async (request, context) => {
  const response = await context.next();
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("text/html")) {
    let body = await response.text();
    body = body.replace(
      "</body>",
      `  <script src="/live.js"></script>\n</body>`
    );
    return new Response(body, {
      headers: response.headers,
      status: response.status,
    });
  }

  return response;
};
