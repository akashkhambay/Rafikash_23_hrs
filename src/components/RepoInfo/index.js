import React from 'react';
// import { UserDetails } from '../UserDetails';

const RepoInfo = ({ repository_name, repository_url, repository_fork_count }) => {
  return (
    <ul>
      <li>
        <a href={repository_url}>{repository_name} </a>
      </li>
      <li>repo fork count: {repository_fork_count}</li>
    </ul>
  );
};

export default RepoInfo;
