import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { adminApi } from '~/services/api';
import defaultImg from '~/assets/images/default.png';
import Menu from '~/components/Menu';

import { Container, Content, Title, Image } from './styles';

export default function Resolved() {
  const [solvedItems, setSolvedItems] = useState([]);

  async function getItems() {
    try {
      const solved = await adminApi.get('/reports/resolved');
      setSolvedItems(solved.data);
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

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Container>
      <Menu type="admin" />
      <Content>
        <Title>Itens resolvidos</Title>
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
              title: 'Tipo',
              field: 'type',
              render: rowData =>
                rowData.type === 1 ? <p>PERDIDO</p> : <p>ACHADO</p>,
            },
            { title: 'Data', field: 'updated_at', defaultSort: 'desc' },
          ]}
          data={solvedItems}
          title="Itens perdidos"
          style={{ marginBottom: '30px' }}
          options={{
            selection: true,
            pageSize: 10,
            sorting: true,
          }}
        />
      </Content>
    </Container>
  );
}
