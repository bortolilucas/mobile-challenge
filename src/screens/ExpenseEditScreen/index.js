import React from 'react';
import { View } from 'react-native';
import Input from '../../components/common/Input';
import { InputTypes } from '../../constants/input';
import formReducer, { ON_CHANGE_ACTION } from '../../hooks/formReducer';
import styles from './styles';

const initialState = {
  date: '',
  item: '',
  value: '',
  descricao: '',
};

const ExpenseEditScreen = ({
  navigation,
  route: {
    params: { type, id, nome },
  },
}) => {
  const [values, setValues] = React.useReducer(formReducer, initialState);
  const [errors, setErrors] = React.useState({});

  React.useLayoutEffect(() => {
    const getTitle = () => {
      switch (type) {
        case 'edit':
          return nome;
        case 'create':
        default:
          return 'Criar despesa';
      }
    };
    navigation.setOptions({ title: getTitle() });
  }, [navigation, nome, type]);

  const onChange = React.useCallback((text, name) => {
    setValues({ type: ON_CHANGE_ACTION, payload: { [name]: text } });
  }, []);

  return (
    <View style={styles.container}>
      <Input
        label="Nome"
        value={values.item}
        name="item"
        error={errors.item}
        onChange={onChange}
      />
      <Input
        label="Data"
        value={values.date}
        name="date"
        type={InputTypes.DATE}
        error={errors.date}
        onChange={onChange}
      />
      <Input
        label="Valor"
        value={values.value}
        name="value"
        type={InputTypes.CURRENCY}
        error={errors.value}
        onChange={onChange}
      />
      <Input
        label="Descrição"
        value={values.descricao}
        name="descricao"
        type={InputTypes.TEXTAREA}
        error={errors.descricao}
        onChange={onChange}
      />
    </View>
  );
};

export default ExpenseEditScreen;
