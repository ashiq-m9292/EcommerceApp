import { SearchBar } from '@rneui/themed';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './Styles'
import Icon from 'react-native-vector-icons/Ionicons';

const Search = () => {
  const [search, setSearch] = useState("")
  const handleSearch = () => {
  }
  return (
    <View>
      <SearchBar
        placeholder='Search here...'
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainerStyle}
        value={search}
        onChangeText={(text) => setSearch(text)}
        searchIcon={
          <Icon
            name='search'
            size={30}
            color={'black'}
            onPress={() => handleSearch()}
          />
        }
        clearIcon={{ color: 'black', size: 30 }}

      />
    </View>
  );
}

export default Search;
