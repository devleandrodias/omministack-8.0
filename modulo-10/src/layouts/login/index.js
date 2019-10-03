import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function LoginLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

LoginLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
