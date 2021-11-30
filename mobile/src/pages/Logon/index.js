import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f5f5",
    alignItems: "center",
    justifyContent: "center",
    font: "400 14px Roboto, sans-serif",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    border: "1px solid #dcdce6",
    width: "80%",
    backgroundColor: "#cbcbcb",
    color: "#333",
    borderRadius: 8,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "#333",
  },
  forgot: {
    color: "#333",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "#333",
  },
});

export default Logon;
