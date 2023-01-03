const textEditorStyles = [
    { title: 'Paragraph', value: 'normal' },
    { title: 'Heading 1', value: 'h1' },
    { title: 'Heading 2', value: 'h2' },
    { title: 'Heading 3', value: 'h3' },
    { title: 'Heading 4', value: 'h4' },
    { title: 'Quote', value: 'blockquote' },
]

// schemas/posts.js
export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    groups: [
        {
            name: 'content',
            title: 'Content',
        },
        {
            name: 'meta',
            title: 'Meta',
        }
    ],
    fields: [
        {
            group: 'meta',
            name: 'metaTitle',
            type: 'string',
            title: 'Meta Title',
            validation: Rule => Rule.required()
        },
        {
            group: 'content',
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: Rule => Rule.required()
        },
        {
            group: 'content',
            name: 'publishedDate',
            type: 'date',
            title: 'Published Date',
            validation: Rule => Rule.required()
        },
        {
            group: 'content',
            name: 'image',
            type: 'image',
            title: 'Image',
            validation: Rule => Rule.required(),
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                }
            ]
        },
        {
            group: 'content',
            name: 'description',
            type: 'text',
            title: 'Description',
        },
        {
            group: 'content',
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },
        {
            group: 'content',
            name: 'body',
            type: 'array',
            title: 'Body content',
            validation: Rule => Rule.required(),

            of: [
                {
                    type: 'block',
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Numbered', value: 'numbered' }
                    ],
                    styles: textEditorStyles
                },
                {
                    type: 'image',
                    fields: [
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption',
                        },
                        {
                            name: 'attribution',
                            type: 'string',
                            title: 'Attribution',
                        }
                    ]
                }]
        }
    ]
}