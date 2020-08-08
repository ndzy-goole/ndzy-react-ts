import React, { useState } from 'react';
import './Note.scss';
import { useMount } from 'ahooks';
import { Input } from 'antd';
import nedb_DB from '../../nedb';
const { TextArea } = Input;

export default () => {
  const [note, setNote] = useState('111');
  useMount(() => {
    nedb_DB.find({ label: 'note' }, function (err: any, doc: any) {
      console.log(doc);
      if (doc.length === 0) {
        nedb_DB.insert([{ label: 'note', value: '' }], (err, ret) => {});
      } else {
        setNote(doc.value);
      }
    });
  });
  return (
    <div className="app-note">
      <TextArea
        style={{ width: '100%' }}
        rows={4}
        value={note}
        onChange={(value: any) => {
          setNote(value.target.value);
          console.log(value.target.value);
          nedb_DB.update(
            {
              label: 'note'
            },
            {
              $set: {
                value: value.target.value
              }
            }
          );
        }}
      />
    </div>
  );
};
