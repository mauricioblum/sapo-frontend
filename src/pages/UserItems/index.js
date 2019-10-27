import React, { useState, useEffect } from 'react';

import MaterialTable from 'material-table';
import { toast } from 'react-toastify';
import { Container, Content, Title, Image } from './styles';
import defaultImg from '~/assets/images/default.png';
import Menu from '~/components/Menu';
import api from '~/services/api';

export default function UserItems({ history }) {
  const [items, setItems] = useState([]);

  async function getItems() {
    try {
      const lostItems = await api.get('/items');
      setItems(lostItems.data);
    } catch (err) {
      console.log(err.message);
    }
  }
  function downloadImage(fileId) {
    if (!fileId) return <Image src={defaultImg} alt="no image available" />;
    return (
      <Image
        src={`http://127.0.0.1:3333/files/${fileId}`}
        alt="description-image"
      />
    );
  }

  async function removeItems(removed) {
    removed.forEach(async item => {
      try {
        await api.delete(`/items/${item.id}`);
        toast.success('Item removido com sucesso!');
        window.location.reload();
      } catch (err) {
        toast.error(err.message);
      }
    });
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Container>
      <Menu />
      <Content>
        <Title>Seus itens</Title>
        <MaterialTable
          columns={[
            {
              title: 'Imagem',
              field: 'file',
              render: rowData => downloadImage(rowData.file_id),
              cellStyle: { width: 200 },
            },
            { title: 'Nome', field: 'name' },
            { title: 'Categoria', field: 'category_name' },
            { title: 'Cor', field: 'color_name' },
            {
              title: 'Ativo',
              field: 'active',
              render: rowData =>
                rowData.active ? <p>ATIVO</p> : <p>INATIVO</p>,
            },
          ]}
          data={items}
          title="Itens"
          options={{
            selection: true,
            pageSize: 5,
          }}
          actions={[
            {
              tooltip: 'Remover item',
              icon: 'delete_forever',
              onClick: (evt, data) => removeItems(data),
            },
          ]}
        />
      </Content>
    </Container>
  );
}
