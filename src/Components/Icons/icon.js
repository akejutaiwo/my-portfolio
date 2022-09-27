import React from 'react';
import PropTypes from 'prop-types';
import {
  IconGitHub,
  IconInstagram,
  IconLinkedin,
  IconLogo,
  IconTwitter,
} from '../Icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Logo':
      return <IconLogo />;
    default:
      return <IconTwitter />;
      
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;