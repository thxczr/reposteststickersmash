import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import IconButton from './components/IconButton';
import CircleButton from './components/CircleButton';
import EmojiPicker from './components/EmojiPicker';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('Você não selecionou nenhuma imagem');
    }
  }
  
  const onReset = () => {
    setShowAppOptions(false);
  }
  const onAddSticker = () => {
    setIsModalVisible(true);
  }
  const onModalClose = () => {
    setIsModalVisible(false);
  }
  const onSaveImageAsync = async () => {
    //TODO
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        < ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      {showAppOptions ? (
        <View style={styles.optionContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon = 'refresh' label = 'RESET'onPress={onReset} />
            <CircleButton onPress={onAddSticker}/>
            <IconButton icon= 'save-alt' label = 'Save' onPress={onSaveImageAsync}/>
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button label='Escolha uma foto' theme = 'primary' onPress={pickImageAsync}/>
          <Button label='Use essa foto' onPress={() => setShowAppOptions(true)} />
        </View>    
       )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        { /*TODO: chamar a lista com os emojis aqui*/}
      </EmojiPicker>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 60,
  },
  optionContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 18,
  }
});
