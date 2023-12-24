import { View, Text, StyleSheet, Image, Pressable } from "react-native"

const fixed = (num) => {
    return Number.parseFloat(num).toFixed(1)
}
const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,
        margin: 15
    },
    language: {
        backgroundColor: '#0366d6',
        marginTop: 8,
        alignSelf: 'flex-start',
        padding: 3,
        borderRadius: 4
    },
    text: {
        marginTop: 10,
    }
})
const RepositoryItem = ({ repo }) => {
    return (
        <>
            <View style={[{flexDirection: 'row'}]}>
                <Image style={styles.tinyLogo} source={{ uri: repo.ownerAvatarUrl }} />
                <View style={[{marginTop: 10, marginBottom: 10}]}>
                    <Text style={styles.text}>{repo.fullName}</Text>
                    <Text style={styles.text}>{repo.description}</Text>
                    <Pressable style={styles.language}>
                        <Text style={[{color: 'white'}]}>{repo.language}</Text>
                    </Pressable>
                </View>
            </View>

            <View style={[{flexDirection: 'row', justifyContent: 'space-evenly'}]}>
                <Text >{fixed(repo.stargazersCount / 1000)}k</Text>
                <Text >{fixed(repo.forksCount / 1000 )}k</Text>
                <Text >{repo.reviewCount}</Text>
                <Text >{repo.ratingAverage}</Text>
            </View>
        </>
    )
}

export default RepositoryItem