import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollection } from '../../redux/shop/shop-selector';

import CollectionPreview from '../collection-preview/collection-preview';

import './collection-overview.scss';

const CollectionOverview = ({ collections }) => (
   <div>
      {
         collections.map(({ id, ...collectionProps }) => (
            <CollectionPreview key={id} {...collectionProps} />
         ))
      }
   </div>
);

const mapStateToProps = createStructuredSelector({
   collections: selectCollection
});

export default connect(mapStateToProps)(CollectionOverview);