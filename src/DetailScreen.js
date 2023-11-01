import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import Video from 'react-native-video'
import Icon from 'react-native-vector-icons/AntDesign';
import Stars from 'react-native-stars';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';

const DetailScreen = (props) => {
    const detail = props.route.params.item;
    const [modalVisible, setModalVisible] = useState(false);
    const [rating, setRating] = useState(null)
    const [headline, setHeadline] = useState(null)
    const [review, setReview] = useState(null)

    console.log(props);
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <Text>How Do You Think About Tbis Movie</Text>
                    <View style={{ alignItems: 'center', paddingTop: 10 }}>
                        <Stars
                            default={10}
                            count={10}
                            update={(val) => setRating(val)}
                            starSize={30}
                            fullStar={<Icon2 size={25} name={'star'} style={[styles.myStarStyle]} />}
                            emptyStar={<Icon2 size={25} name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
                            halfStar={<Icon2 size={25} name={'star-half'} style={[styles.myStarStyle]} />}
                        />
                    </View>
                    <TextInput
                        style={styles.inputText}
                        placeholder="write a headline for review here"
                        onChangeText={headline => setHeadline(headline)}
                        value={headline}
                    />
                    <TextInput
                        style={styles.inputText2}
                        multiline placeholder="write a headline for review here"
                        onChangeText={review => setReview(review)}
                        value={review}
                    />
                    <TouchableOpacity
                        style={styles.submitBtn}
                        onPress={() => { setModalVisible(!modalVisible) }}
                    >
                        <Text style={styles.textSubmit}>Submit</Text>
                    </TouchableOpacity>

                </View>
            </Modal>
            <TextInput style={styles.input} placeholder="Search" />
            <View style={styles.cardMovie}>
                <Video
                    source={detail.trailer}
                    rate={1.0}
                    volume={10.0}
                    shouldPlay={true}
                    positionMilis={0}
                    resizeMode="contain"
                    paused={false}
                    style={{ width: '100%', height: 300 }}
                />
                <View style={styles.titleSection}>
                    <Text style={styles.titleText}>{detail.title}</Text>
                    <Text style={styles.subTitleText}>{detail.release} | {detail.genre}</Text>
                </View>
                <View style={styles.container2}>
                    <Image source={detail.poster} style={{
                        height: 200,
                        width: "35%",
                        borderRadius: 20,
                    }} />
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={{ paddingTop: 10, flexDirection: 'row', marginBottom: 20, justifyContent: 'space-evenly' }}>
                            <View style={{ flexDirection: 'column', marginRight: 15, justifyContent: 'space-around', }}>
                                <Icon name="star" size={30} style={{ color: "#FFc200", }} />
                                <Text>{detail.rating}/10</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => setModalVisible(true)}
                            >
                                <Icon name="staro" size={30} style={{ color: "#ffc200", paddingLeft: 10 }} />
                                <Text>rate this</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.txtSinopsis}>{detail.sinopsis}</Text>
                    </View>
                </View>
                <View style={{ borderBottomColor: '#000', borderBottomWidth: 1 }}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon3 name="comment-o" size={25} style={{ color: "#000", paddingLeft: 10, paddingTop: 10 }} />
                        <Text style={{ paddingTop: 10, paddingLeft: 5 }}>123</Text>
                    </View>
                    <Icon2 name="share-variant" size={25} style={{ color: "#000", paddingLeft: 10, paddingTop: 10 }} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    cardMovie: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    titleSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginBottom: 10,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subTitleText: {
        fontSize: 16,
        color: '#aaa',
    },
    txtSinopsis: {
        fontSize: 12,
        paddingLeft: 10,
        justifyContent: 'space-evenly',
        marginLeft: 5,
        textAlign: 'justify',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#FFE7AB',
        marginVertical: 100,
        marginHorizontal: 20,
        borderRadius: 10,
    },
    myStarStyle: {
        color: 'gold',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    myEmptyStarStyle: {
        color: 'white',
    },
    inputText2: {
        marginTop: 10,
        marginBottom: 3,
        width: 300,
        height: 250,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#FFFFFF',
        paddingLeft: 20,
        paddingRight: 20,
        textAlignVertical: 'top',
        color: '#000',
        backgroundColor: '#fff'
    },
    inputText: {
        marginTop: 10,
        marginBottom: 3,
        width: 300,
        height: 50,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#FFFFFF',
        paddingLeft: 20,
        color: '#000',
        backgroundColor: '#fff'
    },
    submitBtn: {
        width: 300,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#000',
        alignItems: "center",
        padding: 10,
        marginTop: 10
    },
    textSubmit: {
        color: 'white',
        fontWeight: "bold",
        fontSize: 24
    },

})

export default DetailScreen