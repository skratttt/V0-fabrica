import { createClient } from "next-sanity";
import { NextResponse } from "next/server";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: false,
});

export async function GET() {
  // Aquí agregamos 'mainImage' para que viajen las fotos
  const query = `*[_type == "opinion"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    author->{name}
  }`;

  try {
    const data = await client.fetch(query);
    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error fetching opinions:", error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}