import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, SectionList } from 'react-native'


const Table = () => {
  const [num, setNum] = useState([]);
  const [group, setGroup] = useState({});
  const [multiplier, setMultiplier] = useState(0)

  useEffect(() => { tableData() }, [])


  const tableData = () => {
    const multiplicationObjects = [];
    for (let i = 1; i <= 10; i++) {
      for (let number = 1; number <= 10; number++) {
        const multiplication = i * number;

        const multiplicationObject = {
          operand1: i,
          operand2: number,
          expression: `${i} * ${number} = ${multiplication}`
        };

        multiplicationObjects.push(multiplicationObject);
      }
    }

    setNum(multiplicationObjects)
    const groupedData = {}

    multiplicationObjects.forEach(item => {
      const operand = item.operand1;
      if (!groupedData[operand]) {
        groupedData[operand] = [];
      }
      groupedData[operand].push(item);
    });
    console.log("grouped", groupedData)
    setGroup(groupedData)

  }


  const sections = Object.keys(group).map(key => ({
    title: `Multiplication By: ${key}`,
    data: group[key]
  }));

  // Render item for SectionList
  const renderItem = ({ item }) => (
    <View style={{ padding: 4 }}>
      <Text>{item.expression}</Text>
    </View>
  );

  // Render section header for SectionList
  const renderSectionHeader = ({ section }) => (
    <View style={{ backgroundColor: '#f2f2f2', padding: 10 }}>
      <Text>{section.title}</Text>
    </View>
  );


  return (
    <View style={{ flex: 1, marginTop: 40, backgroundColor: "red" }}>
      <SectionList
        sections={sections}
        initialNumToRender={6}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />

    </View>
  )
}

export default Table

const styles = StyleSheet.create({})