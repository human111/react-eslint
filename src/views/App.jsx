import React, { Component } from 'react'

// import { testData } from './test-data'
import { testData1 } from './test-data1'
import { searchObjProp } from './searchObjProp'

export default class App extends Component {
  aa() {
    const a = {
      q1: 0,
      q2: 0,
      q3: 0,
      q4: 0
    }
    if (a === 8) {
      // cccc
    }
  }

  componentDidMount() {
    const aa = searchObjProp(testData1, 6161, 'category-summary-panel')
    console.log('========dfdf=====332-4-32-432-432-43-======', aa)
    // console.log('========dfdf======', testData)
  }

  render() {
    return (
      <div>
        Hello, React world!就这，还是太难了
        <p style={styles.fontSize}>react router（3/4）。想使用4</p>
        <p>react router（3/4）。想使用4</p>
        <p>react router（3/4）。想使用4</p>
        <p>react redux/mobx</p>
        <p>http请求</p>
        <p>保存时，react预检测</p>
        <p>提交预检测</p>
        <p>代码格式化</p>
      </div>
    )
  }
}

const styles = {
  fontSize: {
    color: 'red',
    'font-size': '14px'
  }
}
