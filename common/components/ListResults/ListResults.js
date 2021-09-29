import React from 'react';
import {FlatList, Text} from 'react-native';
import {styles} from './styles';
import {ItemList} from '../ItemList/ItemList';
import {useAddToSavedList} from "../../../components/Main/hooks/useAddToSavedList";

const renderListItem = (onPress, showAddButton) => ({ item } ) => {
  const handlePress = () => onPress(item);

  return (
    <ItemList
      {...item}
      onPress={handlePress}
      showAddButton={showAddButton}
    />
  )
};

export const ListResults = ({
  projects,
  showAddButton = false,
}) => {
  const { setItem } = useAddToSavedList();

  if (!projects) {
   return (
     <Text>No projects yet...</Text>
   )
  }

  return (
    <FlatList
      data={projects}
      style={styles.input}
      renderItem={renderListItem(setItem, showAddButton)}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};
