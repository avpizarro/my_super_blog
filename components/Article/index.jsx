import React from 'react';
import cl from 'classnames';
import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import styles from './index.module.scss';


const Article = ({ children, backUrl, className }) => {
  return (
    <article className={cl(className, styles.article)}>
      <Link href={backUrl}>
        <div className={styles.articleBack}>
          <AiOutlineArrowLeft />
        </div>
      </Link>
      <div className={styles.articleContent}></div>
      {children}
    </article>
  );
};

export default Article;
