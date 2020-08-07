import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from 'react-i18next';

import PageContainer from '../services/PageContainer';

import PageList from './Icons/PageList';
import TimeLine from './Icons/TimeLine';
import RecentChanges from './Icons/RecentChanges';
import Attachment from './Icons/Attachment';

import PageAccessoriesModal from './PageAccessoriesModal';

import { withUnstatedContainers } from './UnstatedUtils';

const TopOfTableContents = (props) => {

  const [isPageAccessoriesModalShown, setIsPageAccessoriesModalShown] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  // Prevent unnecessary rendering
  const [activeComponents, setActiveComponents] = useState(new Set(['']));

  function openPageAccessoriesModal(activeTab) {
    setIsPageAccessoriesModalShown(true);
    setActiveTab(activeTab);
  }

  function switchActiveTab(clickedTab) {
    activeComponents.add(clickedTab);
    setActiveComponents(activeComponents);
    setActiveTab(clickedTab);
  }

  function closePageAccessoriesModal() {
    setIsPageAccessoriesModalShown(false);
  }

  function renderModal() {
    return (
      <>
        <PageAccessoriesModal
          isOpen={isPageAccessoriesModalShown}
          onClose={closePageAccessoriesModal}
          activeTab={activeTab}
          onSwitch={switchActiveTab}
        />
      </>
    );
  }

  return (
    <>
      <div className="top-of-table-contents d-flex align-items-end pb-1">
        <button type="button" className="bg-transparent border-0" onClick={() => openPageAccessoriesModal('pageList')}>
          <PageList />
        </button>

        <button type="button" className="bg-transparent border-0 active" onClick={() => openPageAccessoriesModal('timeLine')}>
          <TimeLine />
        </button>

        <button type="button" className="bg-transparent border-0" onClick={() => openPageAccessoriesModal('recentChanges')}>
          <RecentChanges />
        </button>

        <button type="button" className="bg-transparent border-0" onClick={() => openPageAccessoriesModal('attachment')}>
          <Attachment />
        </button>
        {/* [TODO: setting Footprints' icon by GW-3308] */}
        <div
          id="seen-user-list"
          data-user-ids-str="{{ page.seenUsers|slice(-15)|default([])|reverse|join(',') }}"
          data-sum-of-seen-users="{{ page.seenUsers.length|default(0) }}"
        >
        </div>
      </div>
      {renderModal()}
    </>
  );
};
/**
 * Wrapper component for using unstated
 */
const TopOfTableContentsWrapper = withUnstatedContainers(TopOfTableContents, [PageContainer]);

TopOfTableContents.propTypes = {
  pageContainer: PropTypes.instanceOf(PageContainer).isRequired,
};

export default withTranslation()(TopOfTableContentsWrapper);