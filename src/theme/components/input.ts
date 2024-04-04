export const Input = {
  baseStyle: {
    height: '66px',
    borderWidth: '0px',
    backgroundColor: 'grey',
    borderRadius: '30px',
    px: '30px',
    placeholderTextColor: 'inputText',
    fontSize: 20,
    _input: {
      fontSize: 20,
      borderWidth: '0px',
    },
    _focus: {
      borderWidth: '0px',
      borderRadius: '30px',
      _ios: {
        selectionColor: 'black',
      },
      _android: {
        selectionColor: 'black',
      },
    },
  },
  variants: {
    outline: {
      _input: {
        borderRadius: 30,
        px: '30px',
        backgroundColor: 'grey',
        fontSize: 20,
        borderWidth: '0px',
      },
    },
  },
  sizes: {
    sm: {
      _input: {
        fontSize: 20,
        fontWeight: 500,
      },
    },
  },
};
