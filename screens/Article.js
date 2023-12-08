import * as React from "react";
import { View, Text, Button, Alert, StyleSheet, Image } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from "expo-image-picker";

function Article ({navigation}) {
  const [data, setData] = useState("");
  const [axiosData, setAxiosData] = useState("");
  const [showImage, setShowImage] = useState('')

  useEffect(() => {
    fetch("https://dummyjson.com/products/1")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  //   const fetchData = async () => {
  //      axios
  //       .get("https://dummyjson.com/products/1")
  //       .then((response) => setAxiosData(response.data));
  //   };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      //.then((response) => console.log('-----',response.data))
      .then((response) => setAxiosData(response.data));
  },[]);

  const [cameraPermissionInfo, requestPermission] = useCameraPermissions();

  async function verifyPermission() {
    if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }
    if (cameraPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert("Permission Denied");
      return false;
    }
    return true;
  }

  async function takeImage() {
    const hasPermission = await verifyPermission();

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16,9],
      quality: 1,
    });
    // console.log("image----", image);
    setShowImage(image.assets)
  };

  let imagePreview = <Text>No Images Yet</Text>
  if (showImage) {
    imagePreview = <Image style={styles.image} source = {{uri: showImage[0].uri}}/>
  };

  function deleteImage () {
    setShowImage('')
  }

  return (
    <View>
    <View style={styles.imageStyle}>{imagePreview}</View>
      <Text>{data.brand}</Text>
      <Text>{axiosData[0]?.address.geo.lat}</Text>
      <Button title="Take Image" onPress={takeImage} />
      <Button title="Delete Image" onPress={deleteImage} />
      <Button title='Go to Map' onPress={()=> navigation.navigate('Map')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle : {
    width:'100%',
    height:300,
    justifyContent:'center',
    alignItems:'center',

  },
  image:  {
    height:'100%',
    width:'100%'
  }
})

export default Article;
