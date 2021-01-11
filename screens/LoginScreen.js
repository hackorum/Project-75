import React from "react";
import { TouchableOpacity } from "react-native";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  Image,
  Alert,
  StyleSheet,
} from "react-native";
import * as firebase from "firebase";

export default class LoginScreen extends React.Component {
  state = {
    email: "",
    password: "",
  };
  login = async (email, password) => {
    if (email && password) {
      try {
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        if (response) {
          this.props.navigation.navigate("Write");
        }
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            Alert.alert("User Does Not Exist");
            break;
          case "auth/invalid-email":
            Alert.alert("Incorrect Email or Password");
            break;
        }
      }
    } else {
      Alert.alert("Enter Email ID and Password");
    }
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={{ fontSize: 30 }}>Story Hub</Text>
        <Image source={require("../assets/owl.png")} />
        <TextInput
          style={styles.form}
          placeholder="Enter Your Email ID"
          keyboardType="email-address"
          onChangeText={(text) => this.setState({ email: text })}
          value={this.state.email}
        />
        <TextInput
          style={styles.form}
          placeholder="Enter Your Password"
          secureTextEntry={true}
          onChangeText={(text) => this.setState({ password: text })}
          value={this.state.password}
        />
        <TouchableOpacity
          style={styles.login}
          onPress={() => this.login(this.state.email, this.state.password)}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    borderWidth: 0.7,
    borderRadius: 4,
    paddingLeft: 7,
    width: "70%",
    marginVertical: 11,
  },
  login: {
    backgroundColor: "dodgerblue",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 2,
  },
});
