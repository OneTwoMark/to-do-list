import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { ActivityIndicator, Button, TextInput, KeyboardAvoidingView } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';



function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response)
        } catch (error) {
            console.log(error)
            alert(error.message)
        } finally {
            setLoading(false);
        }
    }

    // const signUp = async () => {
    //     setLoading(true);
    //     try {
    //         const response = await createUserWithEmailAndPassword(auth, email, password);
    //         console.log(response)
    //         alert("Signed up!")
    //     } catch (error) {
    //         console.log(error)
    //         alert(error.message)
    //     } finally {
    //         setLoading(false);
    //     }
    // }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='padding'>
            <TextInput 
            value={email}
            style={styles.input} 
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}></TextInput>
            <TextInput 
            secureTextEntry={true}
            value={password}
            style={styles.input} 
            placeholder="Password"
            onChangeText={(password) => setPassword(password)}></TextInput>
            { loading ? <ActivityIndicator size="small" color='#0000ff' /> : 
            
            <>
            <TouchableOpacity style={styles.button} onPress={() => signIn()}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateProfile')}>
                <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
            </>
            }
        </KeyboardAvoidingView>
        </View>  
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#f0f0f0', // Light gray background
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: '#333', // Dark gray text
    },
    input: {
      height: 45,
      width: "50%",
      borderColor: '#ccc', // Light gray border
      borderWidth: 1,
      marginBottom: 15,
      paddingHorizontal: 10,
      borderRadius: 5,
      backgroundColor: 'white', // White input background
    },
    button: {
      backgroundColor: '#007bff', // Blue button
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 10,
      width: "30%"
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
    errorText: {
      color: 'red',
      marginBottom: 10,
      textAlign: 'center',
    },
    signupText:{
      marginTop: 20,
      textAlign: 'center',
      color: '#007bff',
    },
  });

export default Login;

