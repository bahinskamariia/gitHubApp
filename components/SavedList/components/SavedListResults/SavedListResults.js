import React from 'react';
import ListResults from "../../../../common/components/ListResults/ListResults";

export const SavedListResults = ({
   projects,
 }) => {
  const preparedData = Object.keys(projects).map((key) => projects[key]);

  return (
    <ListResults projects={preparedData} />
  );
};
