import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import 'antd/dist/antd.css';
import qs from 'qs';
import { useEffect, useRef, useState } from 'react';

import AddNewSongBtn from './AddNewSong-Btn';

const getRandomuserParams = (params: any) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

const SongsTable = () => {
  const [listSongs, setListSongs] = useState([]);
  // const [searchText, setSearchText] = useState('');
  // const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<any>(null);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 11,
  });

  const getAPI = async (params: any = {}) => {
    const url = `https://music-i-like.herokuapp.com/api/v1/songs?${qs.stringify(
      getRandomuserParams(params),
    )}`;
    // const url = `https://music-i-like.herokuapp.com/api/v1/songs`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.data, 'data.data');
    setListSongs(data.data);
    setPagination({
      ...params.pagination,
      total: 120,
    });
  };

  useEffect(() => {
    getAPI({
      pagination,
    });
  }, []);

  const handleTableChange = (newPagination: any, filters: any, sorter: any) => {
    getAPI({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination: newPagination,
      ...filters,
    });
  };

  const handleSearch = (selectedKeys: any, confirm: any) => {
    confirm();
    // setSearchText(selectedKeys[0]);
    // setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: any) => {
    clearFilters();
    // setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: any) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: any) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              // setSearchText(selectedKeys[0]);
              // setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: any) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value: any, record: any) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible: any) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    // render: (text) =>
    //   searchedColumn === dataIndex ? (
    //     <Highlighter
    //       highlightStyle={{
    //         backgroundColor: '#ffc069',
    //         padding: 0,
    //       }}
    //       searchWords={[searchText]}
    //       autoEscape
    //       textToHighlight={text ? text.toString() : ''}
    //     />
    //   ) : (
    //     text
    //   ),
  });

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Singer',
      dataIndex: 'singer',
      key: 'singer',
      ...getColumnSearchProps('singer'),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Update at',
      dataIndex: 'update',
      key: 'update',
    },
  ];

  const data: any = [];

  listSongs.map((values: any, index: any) => {
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

  const onSelectChange = (newSelectedRowKeys: any) => {
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
        onSelect: (changableRowKeys: any) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_: any, index: any) => {
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
        onSelect: (changableRowKeys: any) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_: any, index: any) => {
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

  // Function thêm bài hát mới
  const addSong = (newSongInput: any, singerInput: any, descInput: any, dateInput: any) => {
    let newSongList: any = [...listSongs];
    newSongList = [
      ...newSongList,
      { name: newSongInput, singer: singerInput, description: descInput, updated_at: dateInput },
    ];
    setListSongs(newSongList);
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '30px', marginTop: '30px' }}>
      <h3>Songs Table</h3>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={pagination}
        onChange={handleTableChange}
      />
      <AddNewSongBtn addSong={addSong} />
    </div>
  );
};

export default SongsTable;
