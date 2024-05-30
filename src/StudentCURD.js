import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Dimensions} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Background from './Background';

const StudentCRUD = ({ navigation,props }) => {
    const [list, setList] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData= async()=>{
        try {
            firestore().collection('students').onSnapshot((snap)=>{
                const tempArray=[];
                snap.forEach(item=>{
                    tempArray.push(item.data());
                })
                setList(tempArray);
            })
        } catch (error) {
            
        }
    }

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query) {
            const filtered = students.filter(student => student.registrationNumber.includes(query));
            setFilteredStudents(filtered);
        } else {
            setFilteredStudents(students);
        }
    };

    return (
        <Background>
            <View style={styles.container}>
                <Text style={styles.stu}>Student</Text>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search by Registration Number"
                        value={searchQuery}
                        onChangeText={handleSearch}
                        placeholderTextColor='#A6A6A6'
                    />
                    <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddStudent')}>
                        <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
              
                <View style={styles.cardContainer}>
                    <Text style={{ marginVertical: 20, fontSize: 20, fontWeight: 'bold', color:'black'}}>
                        All Students:
                    </Text>

                    <FlatList
                        data={list}
                        renderItem={item => {
                            const cardIndex = item.index;
                            if (item.item !== null) {
                            return (
                                <TouchableOpacity
                                style={styles.card}
                                onPress={() => handleCardPress(item.item.id, item.item.text)}
                                onLongPress={() =>
                                    handleCardLongPress(item.item.id, item.item.text)
                                }>
                                <Text>{item.item.registration_number}.  {item.item.name}</Text>
                                </TouchableOpacity>
                            );
                            }
                        }}
                        />
                    </View>
            </View>
        </Background>
    );
};

const { height, width } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        
        alignItems: 'center',
    },
    stu:{
        color: 'black',
        fontSize: 45,
        fontWeight: 'bold',
        alignSelf:'center',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: -5,
        gap:5,
        marginTop:40,
        
    },
    addButton: {
        backgroundColor: 'green',
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        paddingHorizontal: 4,
    },
    addButtonText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',

    },
    searchInput: {
        flex: 1,
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 16,
        color: 'black',
        borderWidth: 2,
        
    },
    studentItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    studentText: {
        fontSize: 16,
    },

    cardContainer: {
        
        marginTop: 50,
      },
      card: {
        backgroundColor: '#4F7942',
        width: width - 40,
        padding: 20,
        borderRadius: 10,
        marginVertical: 10,
      },
});

export default StudentCRUD;


