import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/query';

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {fetchPolicy: 'cache-and-network',});
  const [repositories, setRepositories] = useState();

  const fetchRepositories = async () => {
    

    // Replace the IP address part with your own IP address!
    // const response = await fetch('http://192.168.50.192:5000/api/repositories');
    // const json = await response.json();
    
    setRepositories(data);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { data, loading, refetch: fetchRepositories };
};

export default useRepositories;