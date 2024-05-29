import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import Background from './Background';
import auth from '@react-native-firebase/auth';
import Btn from './Btn';
import 'firebase/firestore';
import Home from './Home';
import Dashboard from './Studentdashboard';

const TeacherDashboard = (props) => {
    
   

    useEffect(() => {
        // Fetch initial data
        //fetchReports(); // Uncomment if reports are to be fetched initially
    }, []);
    
    return (
        <Background>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.section}>
                <Text style={styles.title}>Teacher Portal</Text>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.button}>
                            <Image source={require('./assets/viewmarks.png')} style={styles.smimage} />
                            <Text style={styles.bntText}>View Marks</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("AdminTimetable")}>
                            <Image 
                                source={require('./assets/timetable.png')} 
                                style={styles.smimage} 
                            />
                            <Text style={styles.bntText}>Class Details</Text>
                        </TouchableOpacity>
                                              
                    </View>
                    <Btn pad={12} bgColor='green' textColor='white' btnText='Logout' Press={Dashboard} />
                                        
                    
                    
                </View>
                
            </ScrollView>
            
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexGrow: 1, // Ensures the content can grow and scroll if needed
    },
    section: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
        paddingBottom: 20,
        textAlign: 'center',
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
        color: 'black',
        paddingTop: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        color: 'black',
    },
    classText: {
        fontSize: 16,
        marginBottom: 5,
        color: 'black',
    },
    markText: {
        fontSize: 16,
        marginBottom: 5,
        color: 'black',
    },
    feeText: {
        fontSize: 16,
        marginBottom: 5,
        color: 'black',
    },
    syllabusText: {
        fontSize: 16,
        marginBottom: 5,
        color: 'black',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 10,
    },
    button: {
        width: 100,
        height: 100,
        display: 'flex',
        marginBottom: 30,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        paddingBottom: 30,
    },
    smimage: {
        width: 80,
        height: 80,
        marginBottom: 10,
        alignSelf: 'center',
        resizeMode: "cover",
    },
    bntText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
    }
});

export default TeacherDashboard;
