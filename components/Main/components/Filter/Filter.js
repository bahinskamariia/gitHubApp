import React from 'react';
import {View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import {styles} from './styles';

export const Filter = ({ languages, onSelect }) => {
  const [selectedLanguage, setSelectedLanguage] = React.useState('');

  React.useEffect(() => {
    onSelect(selectedLanguage);

  }, [selectedLanguage]);

  if (!languages.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <RNPickerSelect
        items={languages}
        onValueChange={(selectedItem) => {
          console.log(selectedItem);
          setSelectedLanguage(selectedItem)
        }}
      />
    </View>
  );
};
