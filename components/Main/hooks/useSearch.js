import React from 'react';
import {Alert} from 'react-native';
import debounce from 'lodash.debounce';

import {searchProject} from '../../../api/api';
import {usePrepareDataForStorage} from '../../../common/hooks/usePrepareDataForStorage';

export const useSearch = () => {
  const [projects, setProjects] = React.useState();
  const prepareData = usePrepareDataForStorage();

  const handleSearch = async (value) => {
    try {
      const data = await searchProject(value);

      if (!data) {
        return;
      }

      const preparedData = data.map((project) => prepareData(project));
      setProjects(preparedData);
    } catch (e) {
      Alert.alert('Something went wrong. Try again.')
    }
  };

  return {
    onSearch: debounce(handleSearch, 1000),
    projects,
  }
};
