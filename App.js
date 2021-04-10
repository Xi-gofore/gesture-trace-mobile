/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { API, graphqlOperation } from 'aws-amplify'
import Amplify from 'aws-amplify'
import config from './aws-exports'

import { createCoord } from './src/graphql/mutations'
import {listCoords} from './src/graphql/queries'

Amplify.configure(config)
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';

const App=() =>  {
  const [nrOfCoords, setNrOfCoords] = useState(0);
  const [coords, setCoords] = useState([])

  useEffect(() => {
    fetchCoords()
    return () => {
      //cleanup
    }
  }, [])

  const fetchCoords = async () => {
    try {
      const coordsData = await API.graphql(graphqlOperation(listCoords))
      const coords = coordsData.data.listCoords.items
      setCoords(coords)
    } catch (err) { console.log('error fetching coordinates') }
  
  }

  const addCoords = async (newCoord) => {
    try {
      const currentCoords =  [...coords] 
      console.log(`CURRENT coord: ${currentCoords}, newCoord:${JSON.stringify(newCoord)}`)

      await API.graphql(graphqlOperation(createCoord, {input: newCoord}))
      setCoords([...currentCoords, newCoord])
    } catch (err) {
      console.log('error creating new coordinate:', err)
    }
  }

  return (
    <View style={styles.container}>
      
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text style={{marginTop:100}}>Nr of coordinates: {coords.length}</Text>
          <SketchCanvas
          style={{ flex: 1 }}
          strokeColor={'red'}
          strokeWidth={7}
          onStrokeStart={(x, y) => { addCoords({ x, y }) }}
          onStrokeChanged={ (x, y) => { addCoords({ x, y }) }}
          />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF',
  },
});

export default App;
