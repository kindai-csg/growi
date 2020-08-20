import React from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from 'react-i18next';

import PageContainer from '../services/PageContainer';
import NavigationContainer from '../services/NavigationContainer';

import { withUnstatedContainers } from './UnstatedUtils';

/**
 * @author Yuki Takei <yuki@weseek.co.jp>
 *
 */
const ThreeStrandedButton = (props) => {

  // const { pageContainer, navigationContainer } = props;

  return (
    <>
      {/* TODO GW-3253 add four contents */}
      <div className="btn-group" role="group" aria-label="基本のボタングループ">
        <button type="button" className="btn page-link text-dark d-inline-block">左</button>
        <button type="button" className="btn page-link text-dark d-inline-block">中</button>
        <button type="button" className="btn page-link text-dark d-inline-block">右</button>
      </div>
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
