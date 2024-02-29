import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Table = () => {
  const [num, setNum] = useState([]);
  const [multiplier, setMultiplier] = useState(0)


  const tableData = () => {
    const multiplicationObjects = [];
    for (let i = 1; i <= 10; i++) {
      for (let number = 1; number <= 10; number++) {
        const multiplication = i * number;

        const multiplicationObject = {
          operand1: i,
          expression: `${i} * ${number} = ${multiplication}`
        };

        multiplicationObjects.push(multiplicationObject);
      }
    }

    setNum(multiplicationObjects)

  }


  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text onPress={tableData}>Table</Text>
      <View>
        <Text>gh</Text>
        {num.map((i) =>
          <View>
            {i.operand1 == 1 ? <Text>{i.expression}</Text> : null}
            {i.operand1 == 10 ? <Text>{i.expression}</Text> : null}
          </View>

        )}
      </View>

    </View>
  )
}

export default Table

const styles = StyleSheet.create({})