import React from "react";
import { format } from 'date-fns';
import Image from 'next/image';
import Head from 'next/head';

import { client } from '../../lib/client';
import { urlFor } from '../../lib/client';


import styles from './index.module.scss';

import
{
    Article,
    Title,
    Content
} from '../../components';


const Post = ({ post }) =>
{
    console.log(post);

    const serializers = {
        types: {
          image: props => (
            <Image src={urlFor(props.node.asset).url()}  width="1000" height="750" alt={props.node.caption}/>
          )
        }
      };

    const date = format(new Date(post.publishedDate), 'dd MMM yyy');

    return (
        <Article backUrl='/' className={styles.post}>
            <Head>
                <title>{post.metaTitle}</title>
            </Head>
            <Title className={styles.postTitle}>
                {post.title}
            </Title>
            <p className={styles.postDate}>
                {date}
            </p>
            <Content blocks={post.body} serializers={serializers}/>
        </Article >
    )
}

export default Post;

export async function getStaticPaths()
{
    const query = `*[_type == "post"] { slug { current } }`;

    const posts = await client.fetch(query);

    const paths = posts.map((post) => ({
        params: {
            slug: post.slug.current
        }
    }))

    return {
        paths,
        fallback: 'blocking',
    }
}


export async function getStaticProps({ params: { slug } })
{
    const query = `*[_type == "post" && slug.current == '${slug}'][0]`
    const post = await client.fetch(query);

    return {
        props: {
            post,
        }
    }
}