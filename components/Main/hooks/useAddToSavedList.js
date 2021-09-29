import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAddToSavedList = () => {
  const [savedList, setUpdatedList] = React.useState();

  const getFromStorage = React.useCallback(async () => {
    try {
      const data = await AsyncStorage.getItem('savedList');
      if (data !== null) {
        setUpdatedList(JSON.parse(data));
      }
    } catch (_) {
      //
    }
  }, []);

  const setToStorage = React.useCallback(async (item) => {
    try {
      await AsyncStorage.mergeItem(
        'savedList',
        JSON.stringify({
          [Date.now()]: item,
        }),
      );
      await getFromStorage();
    } catch (_) {
      //
    }
  }, []);

  React.useEffect(() => {
    getFromStorage();
  }, []);

  return {
    setItem: setToStorage,
    getItems: getFromStorage,
    savedList: savedList || [],
  }
};
