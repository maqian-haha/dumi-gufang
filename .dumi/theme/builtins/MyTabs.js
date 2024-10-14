import React from 'react';
import { Tabs } from 'antd';
const onChange = (key) => {
  //console.log(key);
};
const MyTabs = (props) => <Tabs style={{marginBottom:'50px'}} defaultActiveKey="1" items={JSON.parse(props.items)} onChange={onChange} />;
export default MyTabs;