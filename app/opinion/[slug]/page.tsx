'use client'

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { createClient } from "next-sanity";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Header from '@/components/header';
import Footer from '@/components/footer';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: false,
});

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return source ? builder.image(source).width(1200).height(600).url() : null;
}

// ESTILOS MANUALES PARA EL TEXTO (Para arreglar el problema de "invisible")
const myPortableTextComponents = {
  block: {
    // Forzamos color NEGRO (gray-800) para que se vea sobre el fondo blanco
    normal: ({children}: any) => <p className="mb-4 text-lg text-gray-800 leading-relaxed">{children}</p>,
    h1: ({children}: any) => <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8">{children}</h1>,
    h2: ({children}: any) => <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">{children}</h2>,
    blockquote: ({children}: any) => <blockquote className="border-l-4 border-[#D81B60] pl-4 italic text-gray-600 my-6">{children}</blockquote>,
  },
  list: {
    bullet: ({children}: any) => <ul className="list-disc pl-5 mb-4 text-gray-800">{children}</ul>,
    number: ({children}: any) => <ol className="list-decimal pl-5 mb-4 text-gray-800">{children}</ol>,
  },
}

export default function OpinionPost() {
  const params = useParams();
  const [opinion, setOpinion] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const handleNavigation = (page: string) => {
    window.location.href = '/'; 
  };

  useEffect(() => {
    if (!params?.slug) return;
    const fetchOpinion = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "opinion" && slug.current == $slug][0]`, 
          { slug: params.slug }
        );
        setOpinion(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOpinion();
  }, [params]);

  if (loading) return <div className="min-h-screen bg-[#F797BC] flex items-center justify-center text-white font-bold">Cargando...</div>;
  
  if (!opinion) return (
    <div className="min-h-screen bg-[#F797BC] flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl text-center shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800">Noticia no encontrada</h1>
        <Link href="/" className="text-[#D81B60] font-bold hover:underline block mt-4">Volver al inicio</Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F797BC]">
      <Header currentPage="opinion" setCurrentPage={handleNavigation} />

      <main className="flex-grow py-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto mb-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[#D81B60] bg-white px-5 py-2 rounded-full font-bold shadow-md hover:scale-105 transition-transform"
          >
            <ArrowLeft size={20} />
            <span>Volver atrás</span>
          </Link>
        </div>

        <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          {opinion.mainImage && (
            <div className="w-full h-64 sm:h-[400px] relative bg-gray-200">
              <img src={urlFor(opinion.mainImage)} alt={opinion.title} className="w-full h-full object-cover"/>
            </div>
          )}

          <div className="p-8 sm:p-12">
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6 border-b border-gray-100 pb-6">
              
              {/* FECHA: Ahora tiene un "Plan B" si viene vacía */}
              <div className="flex items-center gap-2">
                 <Calendar size={18} className="text-[#D81B60]" />
                 <span className="uppercase tracking-wide font-semibold">
                   {opinion.publishedAt 
                     ? new Date(opinion.publishedAt).toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })
                     : "Fecha no especificada"} 
                 </span>
              </div>

              <div className="flex items-center gap-2">
                <User size={18} className="text-[#D81B60]" />
                <span className="font-semibold">Fabrica Chile</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-gray-900 mb-8 leading-tight">
              {opinion.title}
            </h1>

            {/* APLICAMOS LOS ESTILOS MANUALES AQUÍ */}
            <div className="prose-lg max-w-none">
              <PortableText 
                value={opinion.body} 
                components={myPortableTextComponents} 
              />
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}