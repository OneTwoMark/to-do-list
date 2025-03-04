import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export function Header() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>
    )
  }

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#3498db', // A nice blue color
      paddingVertical: 15,
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#2980b9', // A slightly darker blue for the border
      elevation: 4, // Add a subtle shadow (Android)
      shadowColor: '#000', // Add a subtle shadow (iOS)
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    headerText: {
      color: '#fff', // White text
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

export default Header