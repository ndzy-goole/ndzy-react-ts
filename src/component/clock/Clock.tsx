import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Typography } from 'antd';
const { Paragraph } = Typography;

const Clock = () => {
  const [date, setDate] = useState(new Date());
  const [dateValue, setDateValue] = useState('');
  const [dateValue1, setDateValue1] = useState('');

  useEffect(() => {
    function tick() {
      setDate(new Date());
    }
    const timerID = setInterval(tick, 1000);

    return function clearTick() {
      clearInterval(timerID);
    };
  });

  useEffect(() => {
    setDateValue(moment(date).format('YYYY-MM-DD HH:mm:ss'));
    setDateValue1(moment(date).format('YYYY-MM-DD-HH-mm-ss'));
  }, [date]);

  return (
    <div className="flex justify-between px-20">
      <Paragraph copyable>{dateValue}</Paragraph>
      <Paragraph copyable>{dateValue1}</Paragraph>
    </div>
  );
};

export default Clock;