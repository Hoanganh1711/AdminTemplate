import { Button, Drawer } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';

import AddSongForm from './AddSongForm';

const AddNewSongBtn = () => {
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
        + Add New
      </Button>

      <Drawer title="Add Your Favourite Song" placement="right" onClose={onClose} visible={visible}>
        <AddSongForm />
      </Drawer>
    </>
  );
};

export default AddNewSongBtn;
