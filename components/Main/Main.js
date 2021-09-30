import React from 'react';

import ListResults from '../../common/components/ListResults/ListResults';
import {useLanguages} from "../../common/hooks/useLanguages";

import {SearchInput} from './components/SearchInput/SearchInput';
import {Filter} from "./components/Filter/Filter";

import {useSearch} from "./hooks/useSearch";

const Main = () => {
  const [language, setLanguage] = React.useState('');
  const {onSearch, projects} = useSearch();
  const {languages} = useLanguages(projects);

  return (
    <>
      <SearchInput onSearch={onSearch} setLanguage={setLanguage}/>
      <Filter languages={languages} onSelect={setLanguage} />
      <ListResults
        projects={projects}
        showAddButton
        selectedLanguage={language}
      />
    </>
  );
};

export default Main;
