export const dynamic = "force-static";

export async function GET() {
  const baseUrl = "https://accelerates.online";
  const urls = ["", "/#services", "/#portfolio", "/#pricing", "/#faqs", "/#contact"];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `<url><loc>${baseUrl}${u}</loc><changefreq>monthly</changefreq><priority>${u === "" ? "1.0" : "0.8"}</priority></url>`).join("")}
</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "text/xml" } });
}