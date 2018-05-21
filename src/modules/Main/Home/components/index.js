import React from 'react';
import { Column, Row } from 'ui/Layout';
import cx from 'classnames';
import config from './config';

const SocialBar = () => {
  return (
    <Column className="social-bar">
      <ul className="social-bar__list">
        {config.map((item, i) => (
          <li className="social-bar__item">
            <a className="social-bar__link" href={item.href} target="_blank">
              <i className={cx('icon', `icon__${item.icon}`)} />
            </a>
          </li>
        ))}
      </ul>
      <div className="path">
        <p className="path__title">About</p>
      </div>
    </Column>
  );
};

export default SocialBar;
