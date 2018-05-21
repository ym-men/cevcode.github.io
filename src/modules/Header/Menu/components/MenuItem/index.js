import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

class MenuItem extends React.PureComponent {
    render() {
        const { href, text, counter, path, count } = this.props;
        return (
            <li className="menu__item">
                <Link
                    to={href}
                    className={cx('menu__link', counter && 'menu__item_counter', path === href ? 'active' : '')}
                >
                    {text}
                    {counter && <span className="menu__counter">{count.length}</span>}
                </Link>
            </li>
        );
    }
}

const mapStateToProps = state => ({
    path: state.routing.location.pathname,
    count: state.projects.projects,
});

export default connect(mapStateToProps)(MenuItem);
