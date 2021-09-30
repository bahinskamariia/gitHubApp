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

  const checkStorage = React.useCallback((item) => {
    return savedList[item.id];
  }, [savedList]);

  const setToStorage = React.useCallback(async (item) => {
    try {
      const isSavedAlready = checkStorage(item);
      if (isSavedAlready) {
        return;
      }

      await AsyncStorage.mergeItem(
        'savedList',
        JSON.stringify({
          [item.id]: item,
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
    checkStorage,
    savedList: savedList || [],
  }
};
