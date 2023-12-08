import * as React from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from "react-native";
import { useState } from "react";
import CustomScreen from "../components/CustomScreen";
import ButtonComp from "../components/Button";
import PhoneInput from "react-native-phone-number-input";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

function FeedScreen({ navigation }) {
  const [mobileNo, setMobileNo] = useState("");

  const handleGetOtp = () => {
    if (mobileNo === "") {
      Alert.alert('Invalid Phone Number','Please enter a valid phone number')
    }
    else {navigation.navigate("OtpScreen", { mobileNumber: mobileNo });}
    
  };

  return (
    <KeyboardAvoidingView
    behavior='padding'
    keyboardVerticalOffset={Platform.OS == 'ios' ? 100 : -150}
    style={styles.container}>
    <ScrollView>
    <View style={styles.container}>
      <CustomScreen title={"Log In"} />
      <PhoneInput
      defaultValue={mobileNo}
     // onChangeText={(text) => setMobileNo(text)}
      onChangeFormattedText={(text) => setMobileNo(text)}
      placeholder="Phone Number"
      codeTextStyle ={{ fontSize: Platform.OS == 'ios' ? deviceHeight * 0.02 : deviceHeight * 0.025 }}
      countryPickerButtonStyle = {{}}
      containerStyle = {{borderRadius: 15, backgroundColor:'#d3d3d3', width: deviceWidth * 0.7, marginBottom: deviceHeight * 0.02, marginTop: deviceHeight * 0.06, }}
      textContainerStyle = {{borderRadius: 15, backgroundColor:'#d3d3d3'}}
      />
      <ButtonComp buttonTitle={"GET OTP"} onPress={handleGetOtp} />
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  textInput: {
    borderWidth: 1,
    width: deviceWidth * 0.6,
    height: deviceHeight * 0.04,
    borderRadius: 15,
    marginBottom: deviceHeight * 0.02
  },
});

export default FeedScreen;
