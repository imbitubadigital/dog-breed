import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FlatList, ActivityIndicator, Modal } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ImageViewer from 'react-native-image-zoom-viewer';
import HeaderCustom from '~/components/HeaderCustom';
import { Container, Content, Loader, Txt, BtnFooter, TxtBtn } from './styles';
import Item from '~/components/Item';
import { listRequest } from '~/store/modules/list/actions';

export default function List({ navigation }) {
  const data = useSelector(state => state.list.data);
  const loading = useSelector(state => state.list.loading);

  const [modalVisible, setModalVisible] = useState(false);
  const [current, setCurrent] = useState(1);
  const [groupImages, setGroupImages] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    function loadList() {
      dispatch(listRequest('chihuahua'));
    }
    loadList();
  }, [dispatch]);

  useEffect(() => {
    function refatora() {
      const newData = data.list.map(i => {
        return { url: i };
      });

      setGroupImages(newData);
    }
    if (data) {
      refatora();
    }
  }, [data]);

  function renderItem(item, index) {
    return (
      <Item
        item={item}
        setModalVisible={setModalVisible}
        current={index}
        setCurrent={setCurrent}
      />
    );
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
                <>
                  <Modal
                    visible={modalVisible}
                    transparent
                    onRequestClose={() => setModalVisible(false)}
                  >
                    <ImageViewer
                      imageUrls={groupImages}
                      index={current}
                      renderFooter={() => (
                        <BtnFooter onPress={() => setModalVisible(false)}>
                          <TxtBtn>Fechar</TxtBtn>
                        </BtnFooter>
                      )}
                      footerContainerStyle={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 15,
                      }}
                    />
                  </Modal>
                  <FlatList
                    data={data.list}
                    renderItem={({ item, index }) => renderItem(item, index)}
                    keyExtractor={(item, index) => String(index)}
                    numColumns={3}
                    showsVerticalScrollIndicator={false}
                  />
                </>
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
