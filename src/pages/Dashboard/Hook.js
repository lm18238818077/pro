import React, { useState, useEffect } from 'react';

import { Modal, Button } from 'antd';

const Hook = props => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {}, [visible]);

  const showModal = () => {
    setVisible( true );
  };

  const handleOk = e => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={() => showModal()}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={() => handleOk()}
        onCancel={() => handleCancel()}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default Hook;
