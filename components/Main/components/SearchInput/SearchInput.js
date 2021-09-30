import React from 'react';
import {TextInput} from 'react-native';
import {styles} from './styles';

const placeholder = "Enter search term";

export const SearchInput = ({
  onSearch,
  setLanguage,
}) => {
  const [value, setValue] = React.useState('');

  const setTimeOut = (cb) => {
    const timeout = setTimeout(cb, 1000);

    return () => clearTimeout(timeout);
  };

  const handleChange = React.useCallback((value) => {
    if (!value) {
      setValue('');
      return;
    }

    setValue(value);
    setLanguage('');
    setTimeOut(() => onSearch(value));
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
