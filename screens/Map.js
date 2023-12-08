import * as React from "react";
import { SafeAreaView, Text, Button, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useState } from "react";

function MapScreen({ navigation }) {
  const [selectedLocation, setSelectedLocation] = useState();

  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function selectLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;

    setSelectedLocation({ lat: lat, lng: lng });
  }

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
        onPress={selectLocationHandler}
      />
      {selectedLocation && (
      <Marker
      title="Marker"
        coordinate={{
          latitude: selectedLocation.lat,
          longitude: selectedLocation.lng,
        }}
      />
      )}
      <MapView />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default MapScreen;
