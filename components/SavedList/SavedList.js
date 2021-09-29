import React from 'react';
import * as Navigation from '@react-navigation/native';

import {useAddToSavedList} from '../Main/hooks/useAddToSavedList';
import {ListResults} from '../../common/components/ListResults/ListResults';

const SavedList = () => {
  const {savedList, getItems} = useAddToSavedList();

  Navigation.useFocusEffect(React.useCallback(() => {
    getItems();
  }, []));

  return (
    <ListResults projects={savedList ? [savedList] : []} />
  );
};

export default SavedList;
