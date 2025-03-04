import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export function CreateProfile () {

    const signUp = async () => {
            setLoading(true);
            try {
                const response = await createUserWithEmailAndPassword(auth, email, password);
                console.log(response)
                alert("Signed up!")
            } catch (error) {
                console.log(error)
                alert(error.message)
            } finally {
                setLoading(false);
            }
        }

    return (
    <>
        <View>
        <Text>CreateProfile</Text>
        </View>
      <TouchableOpacity onPress={() => signUp()}>
            <Text>Sign up</Text>
        </TouchableOpacity>
    </>
    )
  }


export default CreateProfile

// import { Text, TouchableOpacity, View, TextInput, ActivityIndicator } from 'react-native';
// import React, { useState } from 'react';
// import { FIREBASE_AUTH } from '../../FirebaseConfig';
// import { createUserWithEmailAndPassword } from 'firebase/auth';

// export function CreateProfile() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [location, setLocation] = useState('');
//     const [username, setUsername] = useState('');
//     const [loading, setLoading] = useState(false);

//     const auth = FIREBASE_AUTH;

//     const signUp = async () => {
//         setLoading(true);
//         try {
//             const response = await createUserWithEmailAndPassword(auth, email, password);
//             const user = response.user; // Get the user object
//             const uid = user.uid; // Get the uid

//             // Prepare user data for backend
//             const userData = {
//                 location: location,
//                 username: username,
//                 // Add other fields as needed
//             };

//             // Send request to backend
//             const backendResponse = await fetch('YOUR_BACKEND_ENDPOINT/users', { // Replace with your endpoint
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(userData),
//             });

//             if (backendResponse.ok) {
//                 console.log('User created on backend!');
//                 alert("Signed up!");
//             } else {
//                 console.log('Error creating user on backend:', backendResponse.status);
//                 alert('Error creating user on backend.');
//             }

//             console.log(response);
//         } catch (error) {
//             console.log(error);
//             alert(error.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <>
//             <View>
//                 <Text>CreateProfile</Text>
//                 <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
//                 <TextInput placeholder="Password" secureTextEntry={true} value={password} onChangeText={setPassword} />
//                 <TextInput placeholder="Location" value={location} onChangeText={setLocation} />
//                 <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
//             </View>
//             <TouchableOpacity onPress={() => signUp()}>
//                 <Text>Sign up</Text>
//             </TouchableOpacity>
//             {loading && <ActivityIndicator size="large" />}
//         </>
//     );
// }

// export default CreateProfile;

// --------------------------

// import { Text, TouchableOpacity, View, TextInput, ActivityIndicator } from 'react-native';
// import React, { useState } from 'react';
// import { FIREBASE_AUTH } from '../../FirebaseConfig';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import axios from 'axios'; // Import Axios

// export function CreateProfile() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [location, setLocation] = useState('');
//     const [username, setUsername] = useState('');
//     const [loading, setLoading] = useState(false);

//     const auth = FIREBASE_AUTH;

//     const signUp = async () => {
//         setLoading(true);
//         try {
//             const response = await createUserWithEmailAndPassword(auth, email, password);
//             const user = response.user;
//             const uid = user.uid;

//             const userData = {
//                 location: location,
//                 username: username,
//                 // Add other fields as needed
//             };

//             // Send request to backend using Axios
//             const backendResponse = await axios.post('YOUR_BACKEND_ENDPOINT/users', userData); // Replace with your endpoint

//             console.log('Backend Response:', backendResponse.data); // Log the response data

//             if (backendResponse.status === 201) { // Check for successful status (201 Created)
//                 console.log('User created on backend!');
//                 alert("Signed up!");
//             } else {
//                 console.log('Error creating user on backend:', backendResponse.status);
//                 alert('Error creating user on backend.');
//             }

//             console.log(response);
//         } catch (error) {
//             console.log(error);
//             if (axios.isAxiosError(error)) {
//                 console.log('Axios Error Details:', error.response);
//                 alert(error.response?.data?.message || error.message); // Display backend error message or general error
//             } else {
//                 alert(error.message);
//             }

//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <>
//             <View>
//                 <Text>CreateProfile</Text>
//                 <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
//                 <TextInput placeholder="Password" secureTextEntry={true} value={password} onChangeText={setPassword} />
//                 <TextInput placeholder="Location" value={location} onChangeText={setLocation} />
//                 <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
//             </View>
//             <TouchableOpacity onPress={() => signUp()}>
//                 <Text>Sign up</Text>
//             </TouchableOpacity>
//             {loading && <ActivityIndicator size="large" />}
//         </>
//     );
// }

// export default CreateProfile;