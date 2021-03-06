import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop-actions';
import CollectionsOverviewContainer from '../../components/collection-overview/Collections-overview-container';
import CollectionPageContainer from '../Collection/Collection-container';

const ShopPage = ({ match, fetchCollectionsStart }) => {
   useEffect(() => {
      fetchCollectionsStart();
   }, [fetchCollectionsStart]);

   return (
      <div className='shop-page'>
         <Route exact path={`${match.path}`}
                component={CollectionsOverviewContainer}
         />
         <Route path={`${match.path}/:categoryId`}
                component={CollectionPageContainer}
         />
      </div>
   );
};

const mapDispatchToProps = dispatch => ({
   fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
