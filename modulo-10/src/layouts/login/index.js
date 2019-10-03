import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

export default function LoginLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

LoginLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
