import { Table } from 'antd';
import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';

const SongsTable = () => {
  // const [listSongs, setListSongs] = useState([]);

  // const getAPI = async () => {
  //   const url = 'https://music-i-like.herokuapp.com/api/v1/songs';
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   // console.log(data.data)
  //   setListSongs(data.data);
  // };

  // useEffect(() => {
  //   getAPI();
  // }, []);
  // console.log(listSongs);

  // return (
  //   <>
  //     <h1>SONGS TABLE</h1>
  //     <table border="1" cellspacing="0" cellpadding="5">
  //       <thead>
  //         <tr>
  //           {/* <th>ID</th> */}
  //           <th>NAME</th>
  //           <th>SINGER</th>
  //           <th>DESCRIPTION</th>
  //           <th>LINK</th>
  //         </tr>
  //       </thead>

  //       <tbody>
  //         {listSongs.map((item: any, value) => (
  //           <tr key={value}>
  //             {/* <td key={value}>{item.id}</td> */}
  //             <td key={value}>{item.name}</td>
  //             <td key={value}>{item.singer}</td>
  //             <td key={value}>{item.description}</td>
  //             <td key={value}>{item.link}</td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </>
  // );

  const [listSongs, setListSongs] = useState([]);

  const getAPI = async () => {
    const url = 'https://music-i-like.herokuapp.com/api/v1/songs';
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.data)
    setListSongs(data.data);
  };

  useEffect(() => {
    getAPI();
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Singer',
      dataIndex: 'singer',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    // {
    //   title: 'Link',
    //   dataIndex: 'link',
    // },
    {
      title: 'Update at',
      dataIndex: 'update',
    },
  ];

  const data = [];

  listSongs.map((values, index) => {
    data.push({
      key: index,
      name: values.name,
      singer: values.singer,
      description: values.description,
      // link: values.link,
      update: values.updated_at,
    });
  });

  console.log(listSongs);

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }

            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },

      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }

            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  return (
    <div style={{ backgroundColor: 'white', padding: '30px', marginTop: '30px' }}>
      <h3>Songs Table</h3>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};

export default SongsTable;
