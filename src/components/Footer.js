import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'gatsby';
// import logo from '../images/logo.png';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-content section is-medium">
        <div className="container">
          <h5 className="subtitle copyright has-text-centered">
            COPYRIGHT @ SEALAB AS {year}.
          </h5>
        </div>
      </section>
    </footer>
  );
};

// const FooterItem = ({ title, content }) => (
//   <div className="columns">
//     <div className="column">
//       <h5 className="title" style={{ marginTop: '3px' }}>
//         {title}
//       </h5>
//     </div>
//     <div className="column">{content}</div>
//   </div>
// );
//
// FooterItem.propTypes = {
//   title: PropTypes.string,
//   content: PropTypes.element,
// };

export default Footer;
