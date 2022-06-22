import { Button, Drawer } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';

import AddSongForm from './AddSongForm';

const AddNewSongBtn = ({addSong}: any) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined />New Song
      </Button>

      <Drawer title="Add Your Favourite Song" placement="right" onClose={onClose} visible={visible}>
        <AddSongForm addSong={addSong}/>
      </Drawer>
    </>
  );
};

export default AddNewSongBtn;
