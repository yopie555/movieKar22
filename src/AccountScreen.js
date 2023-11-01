import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState, useRef } from 'react'
// import ImagePicker from 'react-native-image-crop-picker'
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/AntDesign';
// import RBSheet from 'react-native-raw-bottom-sheet';
import profile from '../assets/profilepic.png'

const AccountScreen = () => {
    const [image, setImage] = useState({});
    const [image2, setImage2] = useState({});
    const refRBSheet = useRef();

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
            setImage(image);
            setImage2({
                type: image.mime,
                uri: image.path,
                name: 'image',
            });
        });
    };

    const takePhotoFromGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
            setImage(image);
        });
    };
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                closeOnPressBack={true}
                height={200}
                customStyles={{
                    wrapper: {
                        backgroundColor: 'transparent',
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    },
                    draggableIcon: {
                        backgroundColor: '#000',
                    },
                }}>
                <View style={{ marginHorizontal: 15 }}>
                    <Text style={{ fontWeight: 'bold', color: '#0094E6', fontSize: 20 }}>
                        Tambah Foto
                    </Text>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                takePhotoFromCamera();
                                refRBSheet.current.close();
                            }}
                            style={{ flexDirection: 'row', marginVertical: 15 }}>
                            <Icon name="camera" size={25} color="#0094E6" />
                            <Text
                                style={{ marginHorizontal: 10, color: '#0094E6', fontSize: 18 }}>
                                Ambil Foto dari Camera
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                takePhotoFromGallery();
                                refRBSheet.current.close();
                            }}
                            style={{ flexDirection: 'row', marginVertical: 15 }}>
                            <Icon2 name="picture" size={25} color="#0094E6" />
                            <Text
                                style={{ marginHorizontal: 10, color: '#0094E6', fontSize: 18 }}>
                                Ambil Foto dari Galeri
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </RBSheet>

            <Image
                source={{
                    uri:
                        image.path ||
                        'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
                }}
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: 100,
                }}
            />
            <TouchableOpacity
                style={{
                    width: 200,
                    height: 50,
                    backgroundColor: 'yellow',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                onPress={() => refRBSheet.current.open()}
            >
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}
                >Upload Image</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AccountScreen


//https://stackoverflow.com/questions/45441217/release-apk-not-updating-with-javascript-code