import { defineField, defineType } from "sanity";

export const projectsType = defineType({
    name: "cars",
    title: 'cars',
    type: 'document',
    fields: [
        defineField({
            name: "montadora",
            title: "montadora",
            type: "string",
        }),
        defineField({
            name: "modelo",
            title: "modelo",
            type: "string",
        }),
        defineField({
            name: "imagem",
            title: "imagem",
            type: "array",
            of: [{type:'image'}]
        }),
        defineField({
            name: "ano",
            title: "ano",
            type: "number",
        }),
        defineField({
            name: "cambio",
            title: "cambio | por favor utilize abreviações para manter padronizado. 'MANU.', 'AUTO.",
            type: "string",
        }),
        defineField({
            name: "combustivel",
            title: "combustivel | por favor utilize abreviações para manter padronizado. 'ELET.', 'GAS.', 'ALC.', 'ETA.'",
            type: "string",
        }),
        defineField({
            name: "kilometragem",
            title: "kilometragem",
            type: "string",
        }),
        defineField({
            name: "tags",
            title: "tags",
            type: "array",
            of: [{type:'string'}]
        }),
        defineField({
            name: "contato",
            title: "contato",
            type: "string",
        }),

    ]
})