import React from 'react';
import {FlatList, Text} from 'react-native';

import {styles} from './styles';
import {ItemList} from '../ItemList/ItemList';
import {useAddToSavedList} from "../../../components/Main/hooks/useAddToSavedList";

const renderListItem = (onPress, showAddButton, isInSavedList, language) => ({ item }) =>  {
  const handlePress = () => onPress(item);

  return (
    (language === item.language || language === '' || language === null) && (
      <ItemList
        {...item}
        onPress={handlePress}
        showAddButton={showAddButton}
        isInSavedList={isInSavedList(item)}
      />
    )
  )
};

const ListResults = ({
  projects,
  selectedLanguage = '',
  showAddButton = false,
}) => {
  const {setItem, checkStorage} = useAddToSavedList();

  if (!projects) {
   return (
     <Text>No projects yet...</Text>
   )
  }

  return (
    <FlatList
      data={projects}
      style={styles.input}
      renderItem={renderListItem(setItem, showAddButton, checkStorage, selectedLanguage)}
      keyExtractor={(item) => item.id.toString()}
      maxToRenderPerBatch={5}
    />
  );
};

export default React.memo(ListResults);
