import React, { useState, useEffect } from 'react';
import { RepoInfo } from '../../components';
import axios from 'axios';

const UserDetails = ({ searchInput }) => {
  const [userInformation, setUserInformation] = useState([]);
  const [userStats, setUserStats] = useState('');
  const [statusMessage, setStatusMessage] = useState('Finding your info...');
  useEffect(() => {
    const fetchUserData = async () => {
      setStatusMessage('Finding your info...');
      try {
        let { data } = await axios.get(`https://api.github.com/users/${searchInput}/repos`);
        let userAccountInfo = {
          id: data[0].owner.id,
          type: data[0].owner.type,
          user: data[0].owner.login,
          github: data[0].owner.url,
        };

        const array = data.map((repo) => {
          let index = repo.id;
          let repository_name = repo.name;
          let repository_url = repo.git_url;
          let repository_fork_count = repo.forks_count;

          return { index, repository_name, repository_url, repository_fork_count };
        });

        setUserStats(userAccountInfo);
        setUserInformation(array);
        setStatusMessage('');
        // console.log(userAccountInfo);
        console.log(userInformation);
        console.log(array[0].repository_name);
      } catch (err) {
        console.warn(err);
        setStatusMessage(`Ooops hay una problema! ${err.message}`);
      }
    };
    // console.log(userInformation);
    if (searchInput) {
      fetchUserData();
    }
  }, [searchInput]);

  // console.log(userInformation);

  const renderRepos = () =>
    userInformation.map((el, index) => (
      <RepoInfo
        key={el.index}
        repository_name={el.repository_name}
        repository_url={el.repository_url}
        repository_fork_count={el.repository_fork_count}
      />
    ));

  return (
    <>
      <p>{userStats.id}</p>
      <p>{userStats.type}</p>
      <p>{userStats.user}</p>
      <a href={userStats.github}></a>
      <div>{userInformation ? renderRepos() : ''}</div>
    </>
  );
};

export default UserDetails;
