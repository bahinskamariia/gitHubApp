import React from 'react';
import * as Navigation from '@react-navigation/native';

import {useAddToSavedList} from '../Main/hooks/useAddToSavedList';
import {SavedListResults} from './components/SavedListResults/SavedListResults';

const SavedList = () => {
  const {savedList, getItems} = useAddToSavedList();

  Navigation.useFocusEffect(React.useCallback(() => {
    getItems();
  }, []));

  return (
    <SavedListResults projects={savedList} />
  );
};

export default SavedList;
