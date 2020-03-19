import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';

import { Box } from './styles';

export default function Item({ item }) {
  return (
    <Box onLongPress={() => console.log('segurou')}>
      <Image
        source={{ uri: item }}
        style={{
          width: 100,
          height: 100,
        }}
        PlaceholderContent={<ActivityIndicator color="#fff" />}
      />
    </Box>
  );
}

Item.propTypes = {
  item: PropTypes.string.isRequired,
};
