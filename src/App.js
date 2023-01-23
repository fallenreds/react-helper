import React, {useState} from "react";
import Counter from "./component/Counter";
import ClassCounter from "./component/ClassCounter";
import './styles/App.css'
import PostItem from "./component/PostItem";
import PostList from "./component/PostList";

function App() {

    const [posts, setPosts] = useState([
        {id: 1,title: 'Javascript', body: 'Description'},
        {id: 2,title: 'Javascript', body: 'Description'},
        {id: 3,title: 'Javascript', body: 'Description'},
        {id: 4,title: 'Javascript', body: 'Description'}

    ])


    return (
      <div className='App'>
            <form>
                <input type='text' placeholder="Название поста"/>
                <input type='text' placeholder="Описание поста"/>
                <button>Создать пост</button>

            </form>
            <PostList posts={posts} title={"Список постов 1"}/>
      </div>
  );
}

export default App;
