```javascript
import React, { useState, useMemo } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const FlatListBugSolution = () => {
  const [items, setItems] = useState(Array.from({length: 20}, (_, i) => ({id: i, value: i})));

  const memoizedItems = useMemo(() => {
    return items.map(item => ({...item})); // Create a copy to avoid direct mutation
  }, [items]);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.value}</Text>
    </View>
  );

  const updateItems = () => {
    setItems(prevItems => prevItems.map((item, i) => ({...item, value: i + Math.floor(Math.random() * 10)})));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={memoizedItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <button onClick={updateItems}>Update Items</button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default FlatListBugSolution;
```