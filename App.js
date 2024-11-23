import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";


const App = () => {
  // State to store the current input and the result
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isResultFinal, setIsResultFinal] = useState(false);

  // Function to handle button presses
  const btnPress = (value) => {
    if (['+', '-', 'x', '÷'].includes(value) && ['+', '-', 'x', '÷'].includes(input.slice(-1))) {
      return;
    }
    else if (value === '%') {
      setResult((eval(input) / 100).toString());
      return;
    }
    else if (value === 'C') {
      setInput('');
      setResult('');
      setIsResultFinal(false);
    } 
    else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } 
    else if (value === '=') {
      try {
        const formattedInput = input.replace(/÷/g, '/').replace(/x/g, '*');
        setResult(eval(formattedInput).toString());
        setInput('');
        setIsResultFinal(true);
      } catch (error) {
        setResult('Error');
      }
    } 
    else {      
      setInput(input + value);
      setIsResultFinal(false);
    }
  };

  useEffect(() => {
    if (input) {
      try {
        const formattedInput = input.replace(/÷/g, '/').replace(/x/g, '*');
        setResult(eval(formattedInput).toString());
      } catch (error) {
        setResult('');
      }
    } else if (!isResultFinal) {
      setResult('');
    }
  }, [input]);

  return (
    <View style={styles.container}>
      {/* Display Section */}
      <View style={styles.display}>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={[styles.resultText, isResultFinal && styles.resultTextFinal]}>
          {result}
        </Text>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonsContainer}>
        {/* First Row */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => btnPress('C')}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => btnPress("DEL")}>
            <Icon name="backspace" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => btnPress('%')}>
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => btnPress('÷')}>
            <Text style={styles.buttonText}>÷</Text>
          </TouchableOpacity>
        </View>

        {/* Second Row */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => btnPress('7')}>
            <Text style={styles.buttonTextBlue}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => btnPress('8')}>
            <Text style={styles.buttonTextBlue}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => btnPress('9')}>
            <Text style={styles.buttonTextBlue}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => btnPress('x')}>
            <Text style={styles.buttonText}>×</Text>
          </TouchableOpacity>
        </View>

        {/* Third Row */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => btnPress('4')}>
            <Text style={styles.buttonTextBlue}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => btnPress('5')}>
            <Text style={styles.buttonTextBlue}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => btnPress('6')}>
            <Text style={styles.buttonTextBlue}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => btnPress('-')}>
            <Text style={styles.buttonText}>−</Text>
          </TouchableOpacity>
        </View>

        {/* Fourth Row */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => btnPress('1')}>
            <Text style={styles.buttonTextBlue}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => btnPress('2')}>
            <Text style={styles.buttonTextBlue}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => btnPress('3')}>
            <Text style={styles.buttonTextBlue}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => btnPress('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Fifth Row */}
        <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => btnPress('.')}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]} onPress={() => btnPress('0')}>
            <Text style={styles.buttonTextBlue}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>( )</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonEqual} onPress={() => btnPress('=')}>
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
    marginTop: 35,
  },
  inputText: {
    fontSize: 72, 
    color: '#333',
  },
  resultText: {
    fontSize: 40, 
    color: '#000',
    fontWeight: 'bold',
  },
  resultTextFinal: {
    fontSize: 72,
    color: '#1D24CA',
    marginBottom: 50,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: 70,
    height: 70,
    backgroundColor: "#fff",
    borderRadius: 35,
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
    backgroundColor: "#1D24CA", 
  },
  buttonText: {
    fontSize: 24,
    color: "black",
  },
  buttonTextEqual: {
    fontSize: 24,
    color: "#fff",
  },
  buttonTextBlue: {
    fontSize: 24,
    color: "#1D24CA", 
  },
});

export default App;