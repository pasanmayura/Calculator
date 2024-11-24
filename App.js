import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";


const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isResultFinal, setIsResultFinal] = useState(false);
  const [isError, setIsError] = useState(false);

  const btnPress = (value) => {
    // Avoid entering these characters at the beginning
    if (!input && ['%', '÷', 'x', '+', '.'].includes(value)) {
      return;
    }

    // Avoid entering these operants multiple times near each other
    if (['+', '-', 'x', '÷'].includes(value) && ['+', '-', 'x', '÷'].includes(input.slice(-1))) {
      return;
    }

    // Zero can not be entered before a digit
    if (input === '0' && !isNaN(value)) {
      setInput(value);
      return;
    }
    if (input.endsWith('0') && !isNaN(value)) {
      setInput(input.slice(0, -1) + value);  
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
      setIsError(false);
    } 
    else if (value === "DEL") {
      setInput(input.slice(0, -1));
    }
    else if (value === '√') {
      if (input) {
        try {
          const number = parseFloat(input);
          if (number >= 0) {
            const sqrtResult = Math.sqrt(number).toString();
            setResult(sqrtResult);
            setInput('');
            setIsResultFinal(true); 
            setIsError(false);
          } 
          else if (number < 0) {
            setResult('Negative Number');
            setIsError(true);
            setInput('');
          }
        } catch (error) {
          setResult('Error: Invalid input');
          setIsError(true);
        }
      }
    } 
    else if (value === '=') {
      if (isResultFinal) return;
      try {
        const formattedInput = input.replace(/÷/g, '/').replace(/x/g, '*');
        setResult(eval(formattedInput).toString());
        setInput('');
        setIsResultFinal(true);
      } catch (error) {
        setResult('Invalid input');
      }
    } 
    else {      
      setInput(input + value);
      setIsResultFinal(false);
    }
  };

  useEffect(() => {
    if (!isError && input) {
      try {
        const formattedInput = input.replace(/÷/g, '/').replace(/x/g, '*');
        setResult(eval(formattedInput).toString());
      } catch (error) {
        setResult('');
      }
    } else if (!isResultFinal && !isError) {
      setResult('');
    }
  }, [input]);

  const calculateInputFontSize = () => {
    if (input.length > 11) return 36; 
    if (input.length > 7) return 48; 
    return 72;                        
  };

  const calculateResultFontSize = () => {
    if (isResultFinal && result.length <= 7) return 72;
    else if (isResultFinal && result.length >= 11) return 42;
    else if (isResultFinal && result.length > 7) return 64;    
    else if (input.length > 11) return 24; 
    else if (input.length > 7) return 32; 
    return 40;                        
  };

  const Hr = () => {
    return <View style={styles.hr} />;
  };

  return (
    <View style={styles.container}>
      {/* Display Section */}
      <View style={styles.display}>
        <Text style={[styles.inputText, {fontSize: calculateInputFontSize()} ]}>
          {input}
        </Text>
        <Text style={[styles.resultText, isResultFinal && styles.resultTextFinal, isError && styles.errorText, {fontSize: calculateResultFontSize()} ]}>
          {result}
        </Text>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Icon name="backspace" size={32} color="black" onPress={() => btnPress('DEL')}/>
        </TouchableOpacity>       
      </View>

      <View>
          <Hr/>        
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonsContainer}>
        {/* First Row */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => btnPress('C')}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => btnPress('√')}>
            <Text style={styles.buttonText}>√</Text>
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
    marginBottom: 5,
    marginTop: 35,
  },
  iconContainer: {
    alignItems: 'flex-end',
    marginRight: 5,
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
    borderRadius: 35,
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
  hr: {
    height: 1, 
    backgroundColor: 'black', 
    width: '100%', 
    marginVertical: 10, 
  },
  errorText: {
    color: '#1D24CA'
  },
});

export default App;