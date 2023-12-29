import { useMutation } from '@apollo/client';
import { AUTH } from '../graphql/query';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
    const [mutate, result] = useMutation(AUTH);
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    const signIn = async ({ username, password }) => {
      // call the mutate function here with the right arguments
      console.log('The username2', username)
      console.log('The password2', password)
      const response = await mutate({ variables: { 
           credentials: {
            username,
            password,
           }
        } 
    })
    if (response){
      console.log('The response',response)
      await authStorage.setAccessToken(response.data?.authenticate?.accessToken)
      const token = await authStorage.getAccessToken()
      console.log(token)
      apolloClient.resetStore();
    }
      return response
    };
    
    return [signIn, result];
  };

  export default useSignIn;