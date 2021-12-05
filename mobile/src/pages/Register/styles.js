import { StyleSheet } from "react-native";

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

export default styles;
