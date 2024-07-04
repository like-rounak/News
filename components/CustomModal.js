import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const CustomModal = ({ isVisible, onClose, options, onSelect }) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.modalContent}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              onSelect(option.value);
              onClose();
            }}
            style={styles.optionButton}
          >
            <Text style={styles.optionText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  optionButton: {
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
  },
});

export default CustomModal;
