import ShopActionTypes from './shop-types';
//import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase';

export const fetchCollectionsStart = (collectionsMap) => ({
   type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
   type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
   payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
   type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
   payload: errorMessage
});

//thunk
// export const fetchCollectionsStartAsync = () => {
//    return dispatch => {
//       const collectionRef = firestore.collection('collections');
//       dispatch(fetchCollectionsStart());
//
//       collectionRef.get()
//          .then(snapshot => {
//             const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//             dispatch(fetchCollectionsSuccess(collectionsMap));
//          })
//          .catch(error => {
//             dispatch(fetchCollectionsFailure(error.message));
//          })
//    }
// };