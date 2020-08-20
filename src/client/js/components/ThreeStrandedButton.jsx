import React from 'react';
import PropTypes from 'prop-types';
// import loggerFactory from '@alias/logger';

import { withTranslation } from 'react-i18next';

import PageContainer from '../services/PageContainer';
import NavigationContainer from '../services/NavigationContainer';

import { withUnstatedContainers } from './UnstatedUtils';
// import StickyStretchableScroller from './StickyStretchableScroller';

// eslint-disable-next-line no-unused-vars
// const logger = loggerFactory('growi:TableOfContents');

/**
 * @author Yuki Takei <yuki@weseek.co.jp>
 *
 */
const ThreeStrandedButton = (props) => {

  // const { pageContainer, navigationContainer } = props;

  return (
    <>
      {/* TODO GW-3253 add four contents */}
    </>
  );

};

/**
 * Wrapper component for using unstated
 */
const ThreeStrandedButtonWrapper = withUnstatedContainers(ThreeStrandedButton, [PageContainer, NavigationContainer]);

ThreeStrandedButton.propTypes = {
  pageContainer: PropTypes.instanceOf(PageContainer).isRequired,
  navigationContainer: PropTypes.instanceOf(NavigationContainer).isRequired,
};

export default withTranslation()(ThreeStrandedButtonWrapper);
