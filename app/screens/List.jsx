import { View, Text, Button } from 'react-native'
import React from 'react'
import { FIREBASE_APP, FIREBASE_AUTH } from '../../FirebaseConfig';
import { getAuth, signOut } from 'firebase/auth';


function List() { // Destructure navigation
    const handleSignOut = async () => {
      try {
        await signOut(FIREBASE_AUTH);
        // Navigation will be handled by onAuthStateChanged in the app component.
      } catch (error) {
        console.error('Sign-out error:', error);
        // Handle error (e.g., show an alert)
      }
    };
  
    return (
      <View>
        <Button title="Sign Out" onPress={handleSignOut} /> 
      </View>
    );
  }
// stopped at 19:50
export default List