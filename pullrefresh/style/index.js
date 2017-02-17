'use strict';

import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
    wrap: {
        flexGrow: 1,
        flexDirection: 'column',
        zIndex:-999,
    },
    hide: {
        position: 'absolute',
        left: 10000
    },
    show: {
        position: 'relative',
        left: 0
    }
});
