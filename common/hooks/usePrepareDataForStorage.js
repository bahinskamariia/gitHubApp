import React from 'react';

export const usePrepareDataForStorage = () => ({
   owner,
   name,
   stargazers_count,
   description,
   html_url,
   language,
   id,
}) => {
  return {
    id: id,
    avatar: owner.avatar_url,
    projectName: name,
    rating: stargazers_count,
    description: description,
    projectLink: html_url,
    language: language,
  };
};
