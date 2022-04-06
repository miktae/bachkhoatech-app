import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { Text, View } from 'react-native';
import { db } from "./firebase";
import {
  collection,
  onSnapshot
} from "firebase/firestore";
import styles from './App.style'
import Chart from './Chart';

export default function App() {
  const [iotData, setIotData] = useState([{
    'temp': 'Loading...',
    'hum': 'Loading...',
    'pH': 'Loading...',
    'id': 'Loading...'
  }]);
  const usersCollectionRef = collection(db, "iot_datas");
  const Title = ['Name', 'Temperature', 'Humidity', 'pH']

  useEffect(() => onSnapshot(usersCollectionRef, (snapshot) => {
    setIotData(snapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    })))
  }), []);

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        {
          Title.map((title, index) => (
            <Text key={index} style={styles.title}>{title}</Text>
          ))
        }
      </View>
      {iotData.map(data => (
        <View style={styles.item} key={data.id}>
          <Text style={styles.itemText}>{data.id}</Text>
          <Text style={styles.itemText}>{data.temp}</Text>
          <Text style={styles.itemText}>{data.hum}</Text>
          <Text style={styles.itemText}>{data.pH}</Text>
        </View>
      ))}
      <Chart title="Temperature Chart" labels={iotData.map(data => data.id)}
        data={iotData.map(data => data.temp)} fromZero={false} bgColor={'red'}></Chart>
      <StatusBar style="auto" />
      <Chart title="Humidity Chart" labels={iotData.map(data => data.id)}
        data={iotData.map(data => data.hum)} fromZero={false} bgColor={'red'}></Chart>
      <StatusBar style="auto" />
      <Chart title="pH Chart"
        labels={iotData.map(data => data.id)}
        data={iotData.map(data => data.pH)}
        fromZero={false} bgColor={'red'}
      ></Chart>
      <StatusBar style="auto" />
    </View>
  );
}
