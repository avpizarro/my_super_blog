import React from 'react';
import cl from 'classnames';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

import ScreenEgg from '../ScreenEgg';
import styles from './index.module.scss';

const socialNetworks = [
  { id: 1, href: 'https://github.com/avpizarro', icon: AiFillGithub },
  { id: 2, href: 'https://linkedin.com/in/avpizarro', icon: AiFillLinkedin },
  { id: 3, href: 'https://instagram.com/avpizarro', icon: AiFillInstagram },
];

const SocialNetworks = ({ className }) => {
  return (
    <ScreenEgg>
      <ul className={cl(className, styles.list)}>
        {socialNetworks.map((socialNetwork) => (
          <li key={socialNetwork.id} className={styles.listItem}>
            <a
              href={socialNetwork.href}
              className={styles.listLink}
            >
              {React.createElement(socialNetwork.icon, {
                color: 'black',
                size: 50,
              })}
            </a>
          </li>
        ))}
      </ul>
    </ScreenEgg>
  );
};

export default SocialNetworks;
