import { View, StyleSheet, Text, ScrollView, Platforma, Platform, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import theme from '../theme';
import { USER_INFO } from '../graphql/query';
import { useQuery } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#24292e',
        flexDirection: 'row'
        // ...
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 20,
        paddingLeft: 10,
        paddingBottom: 20,
        fontFamily: Platform.select({
            android: theme.fonts.android,
            ios: theme.fonts.ios,
            default: theme.fonts.main,
        })
    }
    // ...
});

const AppBar = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const info = useQuery(USER_INFO, { pollInterval: 2000})
    const navigate = useNavigate()
   
    const signout = async () => {
        await authStorage.removeAccessToken()
        apolloClient.resetStore();
        navigate("/signin")
    }

    return <View style={styles.container}>
        {
            <>
                <ScrollView horizontal>
                    <Link to="/">
                        <Text style={styles.text}>Repositories</Text>
                    </Link>
                    {info.data.me === null && (
                        <Link to="/signin">
                            <Text style={styles.text}>Sign In</Text>
                        </Link>
                    )}
                    {info.data.me !== null && (
                        <Pressable onPress={signout}>
                            <Text style={styles.text}>Sign Out</Text>
                        </Pressable>
                    )}
                </ScrollView>
            </>
        }</View>;
};

export default AppBar;