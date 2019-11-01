import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { toast } from 'react-toastify';
import { adminApi } from '~/services/api';
import defaultImg from '~/assets/images/default.png';
import Menu from '~/components/Menu';

import { Container, Content, Title, Image } from './styles';

export default function AdminDashboard({ history }) {
  const [lost, setLost] = useState([]);
  const [found, setFound] = useState([]);

  async function getItems() {
    try {
      const lostItems = await adminApi.get('/items?type=lost');
      setLost(lostItems.data);

      const foundItems = await adminApi.get('/items?type=found');
      setFound(foundItems.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  async function editItem(items, action) {
    items.forEach(async item => {
      try {
        await adminApi.put(`/items/${item.id}`, {
          active: action === 'active',
        });
      } catch (err) {
        toast.error(err.message);
      }
    });
    toast('Item(s) editados com sucesso!');
    getItems();
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

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Container>
      <Menu type="admin" />
      <Content>
        <Title>Itens perdidos</Title>
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
              defaultSort: 'desc',
              render: rowData =>
                rowData.active ? <p>ATIVO</p> : <p>INATIVO</p>,
            },
          ]}
          data={lost}
          title="Itens perdidos"
          onRowClick={(event, rowData) =>
            history.push(`/admin/item/${rowData.id}`)
          }
          options={{
            selection: true,
            pageSize: 10,
            sorting: true,
          }}
          actions={[
            {
              tooltip: 'Ativar item',
              icon: 'check_circle',
              onClick: (evt, data) => editItem(data, 'active'),
            },
            {
              tooltip: 'Desativar item',
              icon: 'close',
              onClick: (evt, data) => editItem(data, 'inactive'),
            },
          ]}
        />
        <Title>Itens achados</Title>
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
              defaultSort: 'desc',
              render: rowData =>
                rowData.active ? <p>ATIVO</p> : <p>INATIVO</p>,
            },
          ]}
          data={found}
          title="Itens achados"
          onRowClick={(event, rowData) =>
            history.push(`/admin/item/${rowData.id}`)
          }
          options={{
            selection: true,
            pageSize: 10,
            sorting: true,
          }}
          style={{ marginBottom: '30px' }}
          actions={[
            {
              tooltip: 'Ativar item',
              icon: 'check_circle',
              onClick: (evt, data) => editItem(data, 'active'),
            },
            {
              tooltip: 'Desativar item',
              icon: 'close',
              onClick: (evt, data) => editItem(data, 'inactive'),
            },
          ]}
        />
      </Content>
    </Container>
  );
}
