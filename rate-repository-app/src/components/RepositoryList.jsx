import { FlatList, View, StyleSheet, Text } from 'react-native';
import { useState, useEffect } from 'react';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    repo: {
        backgroundColor: 'white',
    }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
    const { data, loading } = useRepositories();
    

    if (loading){
    console.log('This is ', loading)
    console.log('This is ', data)
        return (<Text>LOADING...</Text>)
    }

    
   
    const repositoryNodes = data
      ? data.repositories.edges.map(edge => edge.node)
      : [];

      console.log('This is 2', repositoryNodes)
    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item, index, separator }) => {
                return (
                    <View style={styles.repo}>
                        <RepositoryItem repo={item}/>
                    </View>
                )
            }
            }
        // other props
        />
    );
    
};

export default RepositoryList;