import React from 'react';
import {SearchInput} from './components/SearchInput/SearchInput';
import {ListResults} from '../../common/components/ListResults/ListResults';
import {useSearch} from "./hooks/useSearch";

const Main = () => {
  const {onSearch, projects} = useSearch();

  return (
    <>
      <SearchInput onSearch={onSearch} />
      <ListResults projects={projects} showAddButton />
    </>
  )
};

export default Main;
