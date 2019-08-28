import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import logo from '../images/gatsby-icon.png';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      menuLinks: [
        { title: 'Home', link: '/' },
      ],
      // eslint-disable-next-line
      currentPath: this.props.currentPath,
    };
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  };

  render() {
    const { menuLinks = [], currentPath = '/', isActive } = this.state;

    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <figure className="image">
              <img src={logo} alt="logo" className="logo" />
            </figure>
          </Link>
          <button
            type="button"
            tabIndex={0}
            aria-label="menu"
            aria-expanded="false"
            className={classNames('navbar-burger', 'burger', 'nav-toggle', {
              'is-active': isActive,
            })}
            data-target="navbarMenuHeroC"
            onClick={this.toggleNav}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
        <div
          id="navbarMenuHeroC"
          className={classNames('navbar-menu', {
            'is-active': isActive,
          })}
        >
          <div className="navbar-end">
            <NavbarItems
              menuLinks={menuLinks}
              activeMenuItem={currentPath}
              setActive={this.toggleActiveMenuItem}
            />

            <div className="navbar-item ">
              <Link className="button is-primary" to="/shop/positioning">
                Order
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const NavbarItems = ({ menuLinks, activeMenuItem }) => {
  return (
    <>
      {menuLinks.map(menuItem => {
        const currentSlug =
          menuItem.link.length < 2 ? menuItem.link : `${menuItem.link}/`;
        if (menuItem.dropdown) {
          return (
            <MenuDropDown
              key={menuItem.title}
              menuItem={menuItem}
              activeMenuItem={activeMenuItem}
            />
          );
        }
        return (
          <Link
            key={menuItem.title}
            className={classNames('navbar-item', 'is-tab', {
              'is-active': activeMenuItem === currentSlug,
            })}
            to={menuItem.link}
          >
            {menuItem.title}
          </Link>
        );
      })}
    </>
  );
};

const MenuDropDown = ({ menuItem, activeMenuItem }) => (
  <div className={classNames('navbar-item', 'has-dropdown', 'is-hoverable')}>
    <button type="button" className="navbar-link">
      {menuItem.name}
    </button>
    <div className="navbar-dropdown">
      {menuItem.dropdown.map(subitem => (
        <Link
          key={subitem.link}
          className={classNames('navbar-item', 'is-tab', {
            'is-active': activeMenuItem === `${subitem.link}/`,
          })}
          to={subitem.link}
        >
          {subitem.name}
        </Link>
      ))}
    </div>
  </div>
);

// Navbar.propTypes = {
//   data: PropTypes.object,
//   currentPath: PropTypes.string,
//   searchIndex: PropTypes.object,
// };
//
// NavbarItems.propTypes = {
//   menuLinks: PropTypes.array,
//   activeMenuItem: PropTypes.string,
//   searchIndex: PropTypes.object,
// };
//
// MenuDropDown.propTypes = {
//   menuItem: PropTypes.object,
//   activeMenuItem: PropTypes.string,
// };

export default Navbar;
