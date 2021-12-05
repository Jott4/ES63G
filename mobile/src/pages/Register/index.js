import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import api from "../../services/api";
export class Register extends Component {
  state = {
    email: "",
    password: "",
  };

  navigateToLogin() {
    this.props.navigation.navigate("Logon");
  }

  async handleRegister() {
    const data = this.state;

    try {
      await api.post("/user", data);
      alert(`Usuario cadastrado com sucesso!`);
      this.props.navigation.navigate("Logon");
    } catch (err) {
      alert("Erro no cadastro, tente novamente");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Registre-se!</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Nome"
            placeholderTextColor="#333"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="CPF"
            placeholderTextColor="#333"
          />
        </View>
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
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => this.handleRegister()}
        >
          <Text style={styles.loginText}>Registre-se</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.navigateToLogin()}>
          <Text style={styles.loginText}>Ir para login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Register;
