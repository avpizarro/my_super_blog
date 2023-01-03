import React from 'react';
import cl from 'classnames';
import PortableText from '@sanity/block-content-to-react';

import { clientConfig } from '../../lib/client';

import styles from './index.module.scss';

const Content = ({ className, blocks, serializers }) => {

  return (
    <div className={cl(className, styles.content)}>
      <PortableText
        blocks={blocks}
        projectId={clientConfig.projectId}
        dataset={clientConfig.dataset}
        imageOptions={{ w: 1000, h: 750, fit: 'max' }}
        serializers={serializers}
      />
    </div>
  );
};

export default Content;
