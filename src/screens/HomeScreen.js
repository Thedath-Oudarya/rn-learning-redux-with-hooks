import React, { useState } from 'react'
import { View, Text, FlatList, Button, TextInput, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { addFirst, deleteFirst } from '../actions/FirstActions'
import { addSecond, changeSecond } from '../actions/SecondActions'

const HomeScreen = () => {
  const [inputState, setInputState] = useState('')
  const firstList = useSelector(state => state.first.firstList)
  const secondList = useSelector(state => state.second.secondList)
  const dispatch = useDispatch()
  return (<View style={{ flex: 1, backgroundColor: 'red' }}>
    <FlatList style={{ flex: 1 }}
      data={firstList}
      keyExtractor={item => `fid-${item.id}`}
      renderItem={({ item }) => <TouchableOpacity onLongPress={() => { dispatch(deleteFirst(item.id)) }} >
        <Text>{item.id}</Text>
        <Text>{item.text}</Text>
      </TouchableOpacity>}
    />
    <FlatList style={{ flex: 1, backgroundColor: 'blue' }}
      data={secondList}
      keyExtractor={item => `sid-${item.id}`}
      renderItem={({ item }) => <TouchableOpacity onLongPress={() => { dispatch(changeSecond(item.id, `Changed to: ${inputState}`)) }}>
        <Text>{item.id}</Text>
        <Text>{item.text}</Text>
      </TouchableOpacity>}
    />
    <TextInput value={inputState} onChangeText={text => setInputState(text)} />
    <Button title="Add to First" onPress={() => { dispatch(addFirst({ id: Date.now(), text: inputState })) }} />
    <Button title="Add to Second" onPress={() => { dispatch(addSecond({ id: Date.now(), text: inputState })) }} />
  </View>)
}

export default HomeScreen
