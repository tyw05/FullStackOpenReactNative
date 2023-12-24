import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';

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
    }
    // ...
});

const AppBar = () => {
    return <View style={styles.container}>
        {
            <>
                <ScrollView horizontal>
                    <Link to="/">
                        <Text style={styles.text}>Repositories</Text>
                    </Link>
                    <Link to="/signin">
                        <Text style={styles.text}>Sign In</Text>
                    </Link>
                </ScrollView>
            </>
        }</View>;
};

export default AppBar;