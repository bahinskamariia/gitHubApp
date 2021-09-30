import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const ItemList = ({
  avatar,
  projectName,
  rating,
  description,
  projectLink,
  language,
  onPress,
  showAddButton,
  isInSavedList,
}) => (
  <View style={styles.container}>
    <Image source={{ uri: avatar }} style={styles.avatar} />
    <View style={styles.text}>
      <View style={styles.nameHolder}>
        <Text style={styles.name}>
          {projectName}
        </Text>
        <Text style={styles.rating}>
          <Ionicons
            name='star'
            size={10}
            color='black'
          />
          {rating}
        </Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.additional}>Link: {projectLink}</Text>
      <Text style={styles.additional}>Language: {language}</Text>
      {showAddButton && !isInSavedList && (<Button
        onPress={onPress}
        title="Add to saved list"
        color="#841584"
      />)}
      {isInSavedList && (
        <Ionicons
          name='bookmark'
          size={20}
          color='green'
          style={styles.savedIcon}
        />
      )}
    </View>
  </View>
);
