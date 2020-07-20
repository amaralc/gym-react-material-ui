import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import PrimarySearchAppBar from '../components/Layouts/PrimarySearchAppBar';
import AppWrapper from '../components/Layouts/AppWrapper';
import ContentWrapper from '../components/Layouts/ContentWrapper';
import Footer from '../components/Layouts/Footer';
import ButtonAppBar from '../components/Layouts/ButtonAppBar';

export default function RouteWrapper({
  component: Component,
  isSign,
  isPrivate,
  ...rest
}) {
  if (isSign) {
    return (
      <Route
        {...rest}
        render={(props) => (
          <AppWrapper>
            <ContentWrapper>
              <Component {...props} />
            </ContentWrapper>
            <Footer />
          </AppWrapper>
        )}
      />
    );
  }

  if (isPrivate) {
    return (
      <Route
        {...rest}
        render={(props) => (
          <AppWrapper>
            <PrimarySearchAppBar />
            <ContentWrapper>
              <Component {...props} />
            </ContentWrapper>
            <Footer />
          </AppWrapper>
        )}
      />
    );
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <AppWrapper>
          <ButtonAppBar />
          <ContentWrapper>
            <Component {...props} />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isSign: PropTypes.bool,
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isSign: false,
  isPrivate: false,
};
