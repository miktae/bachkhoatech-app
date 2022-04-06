import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    body: {
      flex: 1,
      paddingTop: 10,
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white',
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      margin: 2,
      backgroundColor: 'blue',
    },
    itemText: {
      fontSize: 20,
      color: 'white',
    }
  });

export default styles