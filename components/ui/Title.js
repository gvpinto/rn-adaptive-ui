import { Text, StyleSheet } from 'react-native';

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    // fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    // You can use the following properties to control the width of the text:
    // Precedence is determinded by the the parent component
    maxWidth: '80%',
    width: 300,
  },
});
