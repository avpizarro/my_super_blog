import React from 'react';
import cl from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '../../lib/client';

import styles from './index.module.scss';

import Title from '../Title';

const Post = ({ className, image, title, description, slug }) => {
  return (
    <Link
      style={{ textDecoration: 'none' }}
      href={`/post/${encodeURIComponent(slug)}`}
      className={cl(className, styles.post)}
    >
      <div className={styles.postLink}>
        <Title type="small" className={styles.postTitle}>
          {title}
        </Title>
        <div className={styles.postContent}>
          <div className={styles.postImage}>
            <Image
              src={urlFor(image).url()}
              alt={image.caption}
              width="100"
              height="100"
            />
          </div>
          <p className={styles.postDescription}>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Post;
