import React, { useState  } from 'react'
import { View} from '@tarojs/components'
import { PostForm, PostCard} from '../../components'
import './index.scss'

// export default class Index extends Component {

//   state= {
//     posts:[
//       {
//         title: '泰罗奥特曼',
//         content: '泰罗是奥特之父和奥特之母唯一的亲生儿子。'
//       }
//     ],
//     formTitle: '',
//     formContent: '',
//   }

//   componentWillMount () { }

//   componentDidMount () { }

//   componentWillUnmount () { }

//   componentDidShow () { }

//   componentDidHide () { }
//   handleSubmit(e) {
//     e.preventDefault()

//     const {formTitle: title, formContent: content} = this.state;
//     const newPosts = this.state.posts.concat({title,content})

//     this.setState({
//       posts: newPosts,
//       formTitle: '',
//       formContent: ''
//     })
//   }

//   handleTitleInput(e) {
//     this.setState({
//       formTitle: e.target.value,
//     })
//   }

//   handleContentInput(e) {
//     this.setState({
//       formContent: e.target.value,
//     })
//   }

//   render () {
//     return (
//       <View className='index'>
//         {
//           this.state.posts.map((post,index) =>(
//             <PostCard key={index} title={post.title} content={post.content} />
//           ))
//         }
//         <PostForm
//           formTitle={this.state.formTitle}
//           formContent={this.state.formContent}
//           handleSubmit={e => this.handleSubmit(e)}
//           handleTitleInput={e=> this.handleTitleInput(e)}
//           handleContentInput={e => this.handleContentInput(e)}
//         />
//       </View>
//     )
//   }
// }

export default function Index() {

  const [posts,setPosts] = useState([
    {
      title: '泰罗奥特曼',
      content: '泰罗是奥特之父和奥特之母唯一的亲生儿子。'
    }
  ])

  const[formTitle,setFormTitle] = useState('')
  const[formContent,setFormContent] = useState('');


  function handleSubmit(e) {
    e.preventDefault()

    const newPosts = posts.concat({title: formTitle, content: formContent})

    setPosts(newPosts)
    setFormTitle('');
    setFormContent('')
  }


    return (
      <View className='index'>
        {
          posts.map((post,index) =>(
            <PostCard key={index} title={post.title} content={post.content} />
          ))
        }
        <PostForm
          formTitle={formTitle}
          formContent={formContent}
          handleSubmit={e => handleSubmit(e)}
          handleTitleInput={e=> setFormTitle(e.target.value)}
          handleContentInput={e => setFormContent(e.target.value)}
        />
      </View>
    )
  }
