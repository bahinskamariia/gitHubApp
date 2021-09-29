import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 15,
    padding: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  text: {
    flex: 1,
  },
  nameHolder: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 20,
  },
  info: {
    paddingVertical: 3,
  },
  rating: {
    fontSize: 16,
  },
  description: {
    color: 'grey'
  },
  additional: {
    paddingTop: 10,
  },
});
