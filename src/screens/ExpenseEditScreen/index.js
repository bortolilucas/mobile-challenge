import React from 'react';
import { Alert, Modal, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { InputTypes } from '../../constants/input';
import {
  DATE_INVALID_MSG,
  ERROR_MSG,
  REQUIRED_INPUT_MSG,
} from '../../constants/strings';
import * as Api from '../../helpers/api';
import {
  changeDateBrToIntl,
  changeDateIntlToBr,
  isDateValid,
} from '../../helpers/date';
import { isEmpty } from '../../helpers/utils';
import formReducer, { ON_CHANGE_ACTION } from '../../hooks/formReducer';
import styles from './styles';

const initState = item => {
  return {
    item: item?.item || '',
    date: item?.date ? changeDateIntlToBr(item.date) : '',
    value: item?.value || '',
    descricao: item?.additionalInfo?.descricao || '',
  };
};

const optionalFields = ['descricao'];

const ExpenseEditScreen = ({
  navigation,
  route: {
    params: { type, item },
  },
}) => {
  const [values, setValues] = React.useReducer(formReducer, item, initState);
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: type === 'edit' && item?.nome ? item.nome : 'Criar Despesa',
    });
  }, [navigation, item, type]);

  const onChange = React.useCallback((text, name) => {
    setValues({ type: ON_CHANGE_ACTION, payload: { [name]: text } });
  }, []);

  const validate = () => {
    const err = {};
    const array = Object.entries(values);
    for (let i = 0; i < array.length; i++) {
      const [k, v] = array[i];
      if (!optionalFields.includes(k) && !v) err[k] = REQUIRED_INPUT_MSG;
    }
    if (isEmpty(err.date) && !isDateValid(values.date)) {
      err.date = DATE_INVALID_MSG;
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
      const data = {
        date: changeDateBrToIntl(values.date),
        item: values.item,
        value: values.value,
        additionalInfo: {
          descricao: values.descricao,
        },
      };
      if (type === 'edit') {
        await dispatch(Api.editExpense({ ...data, id: item._id }));
      } else {
        await dispatch(Api.createExpense(data));
      }
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', error?.msg || ERROR_MSG);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAwareScrollView
      keyboardDismissMode="interactive"
      style={styles.scrollview}
      contentContainerStyle={styles.scrollviewContainer}
      keyboardOpeningTime={0}>
      <SafeAreaView edges={['bottom']} style={styles.container}>
        <Input
          label="Nome"
          value={values.item}
          name="item"
          error={errors.item}
          onChange={onChange}
          defaultFontSize={17}
          inputStyle={styles.input}
        />
        <Input
          label="Data"
          value={values.date}
          name="date"
          type={InputTypes.DATE}
          error={errors.date}
          onChange={onChange}
          defaultFontSize={17}
          inputStyle={styles.input}
        />
        <Input
          label="Valor"
          value={values.value}
          name="value"
          type={InputTypes.CURRENCY}
          error={errors.value}
          onChange={onChange}
          defaultFontSize={17}
          inputStyle={styles.input}
        />
        <Input
          label="Descrição"
          value={values.descricao}
          name="descricao"
          type={InputTypes.TEXTAREA}
          error={errors.descricao}
          onChange={onChange}
          defaultFontSize={17}
          inputStyle={styles.input}
        />
        <View style={styles.bottom}>
          <Button
            text={type === 'edit' ? 'Editar' : 'Criar'}
            loading={loading}
            onPress={onSubmit}
          />
        </View>
        <Modal transparent statusBarTranslucent visible={loading} />
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default ExpenseEditScreen;
