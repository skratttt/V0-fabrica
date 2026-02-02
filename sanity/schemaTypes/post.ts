import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'opinion', // Asegúrate de que esto siga siendo 'opinion'
  title: 'Opinión',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    // --- NUEVO CAMPO: FECHA ---
    defineField({
      name: 'publishedAt',
      title: 'Fecha de Publicación',
      type: 'datetime', // Importante para que salga el calendario
    }),
    // --------------------------
    defineField({
      name: 'slug',
      title: 'Link (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Contenido',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})