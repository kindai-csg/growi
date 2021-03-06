/* eslint-disable react/no-danger */
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import { withUnstatedContainers } from '../../UnstatedUtils';
import { toastError } from '../../../util/apiNotification';
import toArrayIfNot from '../../../../../lib/util/toArrayIfNot';

import AdminTwitterSecurityContainer from '../../../services/AdminTwitterSecurityContainer';

import TwitterSecuritySettingContents from './TwitterSecuritySettingContents';

let retrieveErrors = null;
function TwitterSecurityManagement(props) {
  const { adminTwitterSecurityContainer } = props;
  if (adminTwitterSecurityContainer.state.twitterConsumerKey === adminTwitterSecurityContainer.dummyTwitterConsumerKey) {
    throw (async() => {
      try {
        await adminTwitterSecurityContainer.retrieveSecurityData();
      }
      catch (err) {
        const errs = toArrayIfNot(err);
        toastError(errs);
        retrieveErrors = errs;
        adminTwitterSecurityContainer.setState({
          twitterConsumerKey: adminTwitterSecurityContainer.dummyTwitterConsumerKeyForError,
        });
      }
    })();
  }

  if (adminTwitterSecurityContainer.state.twitterConsumerKey === adminTwitterSecurityContainer.dummyTwitterConsumerKeyForError) {
    throw new Error(`${retrieveErrors.length} errors occured`);
  }

  return <TwitterSecuritySettingContents />;
}

TwitterSecurityManagement.propTypes = {
  adminTwitterSecurityContainer: PropTypes.instanceOf(AdminTwitterSecurityContainer).isRequired,
};

const TwitterSecurityManagementWithUnstatedContainer = withUnstatedContainers(TwitterSecurityManagement, [
  AdminTwitterSecurityContainer,
]);

function TwitterSecurityManagementWithContainerWithSuspense(props) {
  return (
    <Suspense
      fallback={(
        <div className="row">
          <i className="fa fa-5x fa-spinner fa-pulse mx-auto text-muted"></i>
        </div>
      )}
    >
      <TwitterSecurityManagementWithUnstatedContainer />
    </Suspense>
  );
}

export default TwitterSecurityManagementWithContainerWithSuspense;
