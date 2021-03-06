import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

export class Logon extends React.Component {
  state = {
    email: "",
    password: "",
  };

  navigateToRegister() {
    this.props.navigation.navigate("Register");
  }

  login() {
    const { email, password } = this.state;
    console.log(email, password);
    this.props.navigation.navigate("Incidents");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Seja o heroi!</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#333"
            onChangeText={(text) => this.setState({ email: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Senha..."
            placeholderTextColor="#333"
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={() => this.login()}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.navigateToRegister()}>
          <Text style={styles.loginText}>Registre-se</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Logon;
