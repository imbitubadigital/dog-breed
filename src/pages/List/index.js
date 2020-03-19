import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FlatList, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import HeaderCustom from '~/components/HeaderCustom';
import { Container, Content, Loader, Txt } from './styles';
import Item from '~/components/Item';
import { listRequest } from '~/store/modules/list/actions';

export default function List({ navigation }) {
  const data = useSelector(state => state.list.data);
  const loading = useSelector(state => state.list.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    function loadList() {
      dispatch(listRequest('chihuahua'));
    }
    loadList();
  }, [dispatch]);

  function renderItem(item) {
    return <Item item={item} />;
  }
  return (
    <>
      <HeaderCustom
        navigation={navigation}
        title={data && !loading ? `Raça ${data.breed}` : 'Carregando...'}
      />

      <Container>
        <Content>
          {loading ? (
            <Loader>
              <ActivityIndicator size="large" color="#666" />
              <Txt>Aguarde carregando...</Txt>
            </Loader>
          ) : (
            <>
              {data && data.list.length > 0 && (
                <FlatList
                  data={data.list}
                  renderItem={({ item }) => renderItem(item)}
                  keyExtractor={(item, index) => String(index)}
                  numColumns={3}
                  showsVerticalScrollIndicator={false}
                />
              )}
            </>
          )}
        </Content>
      </Container>
    </>
  );
}

List.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
