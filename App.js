import React from 'react'
import { StyleSheet } from 'react-native'
import HomeScreen from './src/screens/HomeScreen'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './src/reducers'

export default function App () {
  return (
    <Provider store={createStore(reducers)}>
      <HomeScreen style={styles.container} />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
