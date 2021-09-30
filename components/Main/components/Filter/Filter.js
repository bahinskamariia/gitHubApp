import React from 'react';
import SelectDropdown from 'react-native-select-dropdown'
import {styles} from './styles';

export const Filter = ({ languages, onSelect }) => {
  const [selectedLanguage, setSelectedLanguage] = React.useState();

  React.useEffect(() => {
    onSelect(selectedLanguage)
  }, [selectedLanguage]);

  if (!languages.length) {
    return null;
  }

  return (
    <SelectDropdown
      data={languages}
      defaultValue={selectedLanguage}
      onSelect={(selectedItem) => setSelectedLanguage(selectedItem)}
      defaultButtonText="Select language"
      rowStyle={styles.picker}
    />
  );
};
