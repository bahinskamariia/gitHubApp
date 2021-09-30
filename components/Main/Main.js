import React from 'react';
import {SearchInput} from './components/SearchInput/SearchInput';
import ListResults from '../../common/components/ListResults/ListResults';
import {useSearch} from "./hooks/useSearch";
import {useLanguages} from "../../common/hooks/useLanguages";
import {Filter} from "./components/Filter/Filter";

const Main = () => {
  const [language, setLanguage] = React.useState('');
  const {onSearch, projects} = useSearch();
  const {languages} = useLanguages(projects);

  return (
    <>
      <SearchInput onSearch={onSearch} />
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
