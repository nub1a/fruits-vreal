export const Button = {
  variants: {
    base: {
      width: 'full',
      borderRadius: 30,
      height: '66px',
      bg: 'yellow',
      _text: {
        fontWeight: 700,
        color: 'white',
        fontSize: 25,
        lineHeight: 31,
      },
      _pressed: {
        opacity: 0.8,
      },
      _disabled: {
        opacity: 0.2,
      },
    },
    ghost: {
      borderRadius: 30,
      height: '40px',
      bg: 'transparent',
      _text: {
        fontWeight: 700,
        color: 'lightGrey',
        fontSize: 15,
      },
      _pressed: {
        opacity: 0.8,
      },
      _disabled: {
        opacity: 0.2,
      },
    },
  },
};
