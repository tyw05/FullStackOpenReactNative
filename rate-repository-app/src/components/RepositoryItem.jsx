import { View, Text, StyleSheet, Image, Pressable, Platform } from "react-native"
import theme from "../theme"

const fixed = (num) => {
    return Number.parseFloat(num).toFixed(1)
}
const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,
        margin: 15,
    },
    language: {
        backgroundColor: '#0366d6',
        marginTop: 8,
        alignSelf: 'flex-start',
        padding: 3,
        borderRadius: 4,
        fontFamily: Platform.select({
            android: theme.fonts.android,
            ios: theme.fonts.ios,
            default: theme.fonts.main,
        })
    },
    text: {
        marginTop: 10,
        fontFamily: Platform.select({
            android: theme.fonts.android,
            ios: theme.fonts.ios,
            default: theme.fonts.main,
        })
    }
})
const RepositoryItem = ({ repo }) => {
    return (
        <>
            <View style={[{ flexDirection: 'row' }]}>
                <Image style={styles.tinyLogo} source={{ uri: repo.ownerAvatarUrl }} />
                <View style={[{ marginTop: 10, marginBottom: 10 }]}>
                    <Text style={[styles.text, { fontWeight: 'bold' }]}>{repo.fullName}</Text>
                    <Text style={styles.text}>{repo.description}</Text>
                    <Pressable style={styles.language}>
                        <Text style={[{ color: 'white' }]}>{repo.language}</Text>
                    </Pressable>
                </View>
            </View>

            <View style={[{ flexDirection: 'row', justifyContent: 'space-evenly' }]}>
                <View style={[{ flexDirection: 'column', justifyContent: 'space-evenly', marginBottom: 10, alignItems: 'center' }]}>
                    <Text style={[{ fontWeight: theme.fontWeight.bold }]}>{fixed(repo.stargazersCount / 1000)}k</Text>
                    <Text style={[{ color: 'grey' }]}>Stars</Text>
                </View>
                <View style={[{ flexDirection: 'column', justifyContent: 'space-evenly', marginBottom: 10, alignItems: 'center' }]}>
                    <Text style={[{ fontWeight: theme.fontWeight.bold }]}>{fixed(repo.forksCount / 1000)}k</Text>
                    <Text style={[{ color: 'grey' }]}>Forks</Text>
                </View>
                <View style={[{ flexDirection: 'column', justifyContent: 'space-evenly', marginBottom: 10, alignItems: 'center' }]}>
                    <Text style={[{ fontWeight: theme.fontWeight.bold }]}>{repo.reviewCount}</Text>
                    <Text style={[{ color: 'grey' }]}>Reviews</Text>
                </View>
                <View style={[{ flexDirection: 'column', justifyContent: 'space-evenly', marginBottom: 10, alignItems: 'center' }]}>
                    <Text style={[{ fontWeight: theme.fontWeight.bold }]}>{repo.ratingAverage}</Text>
                    <Text style={[{ color: 'grey' }]}>Rating</Text>
                </View>
            </View>
        </>
    )
}

export default RepositoryItem