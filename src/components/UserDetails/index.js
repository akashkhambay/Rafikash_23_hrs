import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDetails = ({ searchInput }) => {
  const [userInformation, setUserInformation] = useState([]);
  const [statusMessage, setStatusMessage] = useState('Finding your info...');
  useEffect(() => {
    const fetchUserData = async () => {
      setStatusMessage('Finding your info...');
      try {
        let { data } = await axios.get(`https://api.github.com/users/${searchInput}/repos`);
        let userAccountInfo = [
          {
            id: data[0].owner.id,
            type: data[0].owner.type,
            user: data[0].owner.login,
            github: data[0].owner.url,
          },
        ];

        const array = data.map((repo) => {
          let index = repo.id;
          let repository_name = repo.name;
          let repository_url = repo.git_url;
          let repository_fork_count = repo.forks_count;

          return { index, repository_name, repository_url, repository_fork_count };
        });

        setUserInformation(array);
        setStatusMessage('');
        console.log(userAccountInfo);
        console.log(userInformation);
        console.log(array[1].repository_name);
      } catch (err) {
        console.warn(err);
        setStatusMessage(`Ooops hay una problema! ${err.message}`);
      }
    };
    fetchUserData();
  }, [searchInput]);
  return (
    <>
      <p>{userInformation.index}</p>
    </>
  );
};

export default UserDetails;
