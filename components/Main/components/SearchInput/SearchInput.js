import React from 'react';
import {TextInput} from 'react-native';
import {styles} from './styles';

const placeholder = "Enter search term";

export const SearchInput = ({
  onSearch,
}) => {
  const [value, setValue] = React.useState('');

  const handleChange = React.useCallback((value) => {
    if (!value) {
      setValue('');
      return;
    }

    setValue(value);
    setTimeout(() => onSearch(value), 1000);
  }, []);

  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={handleChange}
      placeholder={placeholder}
      blurOnSubmit
    />
  );
};
