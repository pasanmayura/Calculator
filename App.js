import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const App = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.display}>
        <Text style={styles.inputText}></Text>
        <Text style={styles.resultText}></Text>
      </View>

      
      <View style={styles.buttonsContainer}>
        
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon name="backspace" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>÷</Text>
          </TouchableOpacity>
        </View>

        
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTextGreen}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTextGreen}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTextGreen}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>×</Text>
          </TouchableOpacity>
        </View>

        
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTextGreen}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTextGreen}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTextGreen}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>−</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTextGreen}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTextGreen}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTextGreen}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, styles.buttonZero]}>
            <Text style={styles.buttonTextGreen}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonEqual}>
            <Text style={styles.buttonTextEqual}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    justifyContent: "center",
    marginBottom:10,
  },
  display: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#f1F1f1',
    borderRadius: 20,
    margin: 5,
    marginBottom: 15,
    marginTop: 15,
  },
  inputText: {
    fontSize: 20, 
    color: '#333',
  },
  resultText: {
    fontSize: 48, 
    color: '#000',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: 70,
    height: 70,
    backgroundColor: "#fff",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  buttonEqual: {
    width: 70,
    height: 70,
    backgroundColor: "#fff",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    backgroundColor: "#00b300", // Green color
  },
  buttonText: {
    fontSize: 24,
    color: "black",
  },
  buttonTextEqual: {
    fontSize: 24,
    color: "#fff",
  },
  buttonTextGreen: {
    fontSize: 24,
    color: "#00b300", 
  },
  buttonZero: {
    flex: 2,  // Makes button "0" span across two columns
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;