import { Button, DatePicker, Form, Input, Select } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';

const AddSongForm = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = (size: any) => {
    setComponentSize(size);
  };

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
    >
      {/* <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item> */}
      <Form.Item>
        {`Song's Name:`}
        <Input />
      </Form.Item>
      <Form.Item>
        Singer Name:
        <Input />
      </Form.Item>
      <Form.Item>
        Kind of Music:
        <Select>
          <Select.Option value="demo1">Nhạc Trẻ</Select.Option>
          <Select.Option value="demo2">Nhạc Thính phòng</Select.Option>
          <Select.Option value="demo3">Nhạc Dân Ca</Select.Option>
          <Select.Option value="demo4">Nhạc Nước Ngoài</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item>
        Posting Date
        {
          //@ts-ignore
          <DatePicker />
        }
      </Form.Item>
      <Form.Item>
        Description
        <Input />
      </Form.Item>
      <Form.Item>
        <Button style={{ backgroundColor: '#007BFF', color: '#fff' }}>Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default AddSongForm;
