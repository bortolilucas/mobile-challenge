import React from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import formReducer, { ON_CHANGE_ACTION } from '../../hooks/formReducer';
import styles from './styles';
import * as Api from '../../helpers/api';
import { isEmpty, isEmail } from '../../helpers/utils';
import {
  EMAIL_INVALID_MSG,
  ERROR_MSG,
  REQUIRED_INPUT_MSG,
} from '../../constants/strings';

const initialState = { email: '' };

export default function LoginScreen() {
  const [values, setValues] = React.useReducer(formReducer, initialState);
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const dispatch = useDispatch();

  const onChange = React.useCallback((text, name) => {
    setValues({ type: ON_CHANGE_ACTION, payload: { [name]: text } });
  }, []);

  const validate = () => {
    const err = {};
    const array = Object.entries(values);
    for (let i = 0; i < array.length; i++) {
      const [k, v] = array[i];
      if (!v) err[k] = REQUIRED_INPUT_MSG;
    }
    if (isEmpty(err?.email) && !isEmail(values.email)) {
      err.email = EMAIL_INVALID_MSG;
    }
    setErrors(err);
    return isEmpty(err);
  };

  const onSubmit = async () => {
    if (!validate()) {
      return;
    }
    try {
      setLoading(true);
      await dispatch(Api.authenticate(values));
    } catch (error) {
      Alert.alert('Erro', error?.message || ERROR_MSG);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.containerScroll}
      bounces={false}
      showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Entrar com{'\n'}e-mail</Text>
        <Input
          label="E-mail"
          name="email"
          type="email"
          editable={!loading}
          value={values.email}
          onChange={onChange}
          containerStyle={styles.inputContainer}
          error={errors?.email}
        />
        <View style={styles.bottom}>
          <Button text="Entrar" onPress={onSubmit} loading={loading} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
