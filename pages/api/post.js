import { client } from '../../lib/client';

export default async function post(req, res)
{
    const { start, end } = req.query;

    if (isNaN(Number(start) || isNaN(Number(end))))
    {
        return res.status(400).end();
    }

    const { post, total } = await loadData(start, end);
     
    res.status(200).json({
        posts: post,
        total
    })
}

export async function loadData(start, end)
{
    const query = `{
    "post": *[_type == "post"] | order(publishedDate desc) [${start}...${end}] {_id, publishedDate, title, slug, description, image},
    "total": count(*[_type == "post"])
 }
`;
    const { post, total } = await client.fetch(query);
    return {
        post,
        total
    }
}