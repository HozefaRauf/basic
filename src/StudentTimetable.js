import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Btn from './Btn';

const StudentTimetable = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('./assets/timetable.jpeg')} style={styles.pic} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pic: {
        width: 340,
        height: 220,
        borderRadius: 10,
        elevation: 7,
        marginTop: 70,
    },
});

export default StudentTimetable;
