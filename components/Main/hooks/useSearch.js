import React from 'react';
import {Alert} from 'react-native';

import {searchProject} from '../../../api/api';
import {usePrepareDataForStorage} from '../../../common/hooks/usePrepareDataForStorage';

export const useSearch = () => {
  const [projects, setProjects] = React.useState();
  const prepareData = usePrepareDataForStorage();

  const handleSearch = async (value) => {
    try {
      const data = await searchProject(value);

      const preparedData = data.map((project) => prepareData(project));
      setProjects(preparedData);
    } catch (e) {
      Alert.alert('Something went wrong. Try again.')
    }
  };

  return {
    onSearch: handleSearch,
    projects,
  }
};
