import React from 'react'
import Taro from '@tarojs/taro'
import { View} from '@tarojs/components'
import './index.scss'

export default function PostCard(props) {

  const handleClick = () =>{
    if (props.isList) {
      const {title,content} = props
      Taro.navi
    }
  }
  return (
    <View className='postcard' onClick={handleClick}>
      <View className='post-title'>{props.title}</View>
      <View className='post-content'>{props.content}</View>
    </View>
  )
}
