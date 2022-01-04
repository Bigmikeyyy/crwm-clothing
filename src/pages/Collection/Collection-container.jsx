import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';


import { selectIsCollectionLoaded } from '../../redux/shop/shop-selector';
import CategoryPage from './Collection';
import WithSpinner from '../../components/withSpinner/with-spinner';

const mapStateToProps = createStructuredSelector({
   isLoading: state => !selectIsCollectionLoaded(state)
});

const CollectionPageContainer = compose(
   connect(mapStateToProps),
   WithSpinner
)(CategoryPage);

export default CollectionPageContainer;