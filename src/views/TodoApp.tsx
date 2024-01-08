import React, { useCallback, useState } from 'react'

const TodoApp = () => {
  const [count, setCount] = useState(1)

  /**
   * TodoApp.tsx:7 1 1
   * TodoApp.tsx:12 2 1
   * TodoApp.tsx:58 render 3
   * TodoApp.tsx:58 render 4
   * TodoApp.tsx:58 render 5
   * TodoApp.tsx:18 3 1
   */
  const handleClick = () => {
    console.log('1', count)
    // 这里两次set，会合并操作，只渲染一次。
    // console打印的全是初始值1，
    setCount(2)
    setCount(3)
    console.log('2', count)

    setTimeout(() => {
      // 这里的set，取决于你set了几次，set一次就渲染一次，set了两次就渲染两次，
      setCount(4)
      setCount(5)
      console.log('3', count)
    }, 0)
  }

  /**
   * TodoApp.tsx:7 11 1
   * TodoApp.tsx:12 21 1
   * TodoApp.tsx:58 render 2
   * TodoApp.tsx:58 render 2
   * TodoApp.tsx:18 31 1
   * TodoApp.tsx:62 41 1
   */
  const handleClick1 = () => {
    console.log('11', count)
    // 这里两次set，会合并操作，只渲染一次。
    // console打印的全是初始值1，
    setCount(count + 1)
    setCount(count + 1)
    console.log('21', count)

    // 这里的两次setTimeout里面的setCount会全部合并，只会渲染一次，
    // 因为所有的setCount(count + 1)，执行的全部是 setCount(1 + 1)
    setTimeout(() => {
      // 这里的set只会渲染一次，所有的setCount(count + 1)，执行的全部是 setCount(1 + 1)
      setCount(count + 1)
      setCount(count + 1)
      setCount(count + 1)
      // setCount(count + 4) // 如果加的值不同，就会再次触发render
      console.log('31', count)
    }, 0)

    setTimeout(() => {
      setCount(count + 1)
      setCount(count + 1)
      setCount(count + 1)
      // setCount(count + 2) // 如果加的值不同，就会再次触发render
      console.log('41', count)
    }, 1000)
  }

  const handleCallback = useCallback(() => {
    console.log('useCallback1', count)
    // 这里两次set，会合并操作，只渲染一次。
    // console打印的全是依赖的count值，这里无论setCount(count + 1)多少次，都只执行一次setCount(count + 1)，
    setCount(count + 1)
    setCount(count + 1)
    console.log('useCallback2', count)

    setTimeout(() => {
      // 这里的set只会渲染一次，useCallback缓存了，
      setCount(count + 1)
      setCount(count + 1)
      setCount(count + 1)
      console.log('useCallback3', count)
    }, 0)
  }, [count])

  // 总结： setTimeout里面只要是update state，就会触发一次render。而onClick触发的多次update state
  // 就会合并成一次，只会触发一次render。

  // 外层的render，打印的count是最新的set后的值，所以这里点击后是5
  console.log('render', count)

  return (
    <>
      <div>{count}</div>
      <div onClick={() => handleClick()}>点击</div>
      <div onClick={() => handleClick1()}>点击1</div>
      <div onClick={() => handleCallback()}>点击useCallback</div>
    </>
  )
}

export default TodoApp
