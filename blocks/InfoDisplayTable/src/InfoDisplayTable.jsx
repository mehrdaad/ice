'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from '@icedesign/base';
import IceCard from '@icedesign/card';
import './InfoDisplayTable.scss';

/**
 * 表格接收的数据
 */
const dataSource = () => {
  return [
    {
      label: '姓名',
      value: '张三',
    },
    {
      label: '性别',
      value: '男'
    },
    {
      label: '年龄',
      value: '25'
    },
    {
      label: '籍贯',
      value: '杭州'
    },
    {
      label: '职业',
      value: '程序员'
    },
  ];
};

export default class InfoDisplayTable extends Component {
  static displayName = 'InfoDisplayTable';

  static propTypes = {
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // ICE: React Component 的生命周期
  // http://ice.alibaba-inc.com/docs/guide/intro-react#React-组件的生命周期
  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps, nextContext) {

  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="info-display-table" style={styles.infoDisplayTable}>
        <IceCard>
          <Table dataSource={dataSource()}>
            <Table.Column title="个人信息" dataIndex="label" />
            <Table.Column title="" dataIndex="value" />
          </Table>
        </IceCard>
      </div>
    );
  }
}

const styles = {"infoDisplayTable":{}}