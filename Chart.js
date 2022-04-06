import { View, Dimensions, Text, StyleSheet } from 'react-native'
import React from 'react'
import {
    LineChart,
} from "react-native-chart-kit";

const Chart = (props) => {
    return (
        <View style={styles.chart}>
            <Text>{props.title}</Text>
            <LineChart
                data={{
                    labels: props.labels,
                    datasets: [
                        {
                            data: props.data,
                            
                        }
                    ],
                    
                }}
                fromZero={props.fromZero}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel=""
                yAxisSuffix="°C"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: '#e26a00',
                    backgroundGradientFrom: '#fb8c00',
                    backgroundGradientTo: '#ffa726',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: () => `#fff`, // optional
                    labelColor: () => `rgb(255, 255, 255)`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "3",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    },
                    propsForBackgroundLines: {
                        stroke: "white"
                    },
                }}
                bezier
                style={{
                    marginVertical: 16,
                    borderRadius: 16
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    chart: {
        flex: 1,
        alignItems: 'center',
    },
})

export default Chart