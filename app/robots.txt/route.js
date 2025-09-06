export const dynamic = "force-static";

export async function GET() {
  const content = `User-agent: *
Allow: /

Sitemap: https://accelerates.online/sitemap.xml
`;
  return new Response(content, { headers: { "Content-Type": "text/plain" } });
}