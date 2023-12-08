import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Dimensions,
  Alert,
  KeyboardAvoidingView,
  keyboardVerticalOffset,
  Platform,
  ScrollView
} from "react-native";
import CustomScreen from "../components/CustomScreen";
import ButtonComp from "../components/Button";
import OTPTextView from "react-native-otp-textinput";
import { useState } from "react";


const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

function OtpScreen({ navigation, route }) {
  const number = route.params.mobileNumber;

  const [otp, setOtp] = useState('')

  const handleVerifyOtp = () => {
    if (otp !== ''){
      Alert.alert("Your details has been submitted");
      navigation.goBack();
    }
    else {
      Alert.alert("Please enter OTP")
    }
  };



  return (
    <KeyboardAvoidingView
    behavior='padding' keyboardVerticalOffset={Platform.OS === 'android' ? -150 : 100}
    style={styles.container}>
    <ScrollView>
    <SafeAreaView style={styles.container2}>
      <CustomScreen title={"OTP Verify"} />
      <Text style={{ color: "#696969" }}>OTP sent to</Text>
      <Text style={{ fontWeight: "bold", marginBottom: deviceHeight * 0.02 }}>
        {number}
      </Text>
      <OTPTextView
        inputCount={4}
        keyboardType="numeric"
        textInputStyle={{ borderWidth: 3, borderRadius: 10 }}
        tintColor="grey"
        containerStyle={{ marginBottom: deviceHeight * 0.02 }}
         handleTextChange={(text)=> setOtp(text)}
       // handleCellTextChange={(text)=> setOtp(text)}
      />
      <ButtonComp buttonTitle={"Verify OTP"} onPress={handleVerifyOtp} />
    </SafeAreaView>
    </ScrollView>
    </KeyboardAvoidingView>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor:'blue'
  },
  container2: {
    flex: 1,
    alignItems: "center",
   // backgroundColor:'red',
    
  },
});

export default OtpScreen;
