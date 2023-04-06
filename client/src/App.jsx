

import { Route, Routes } from 'react-router-dom'
import './App.css'
import CreatePost from './components/CreatePost'
import EditPost from './components/EditPost'
import Index from './components/Index'
import Layout from './components/Layout'
import Login from './components/Login'
// import Post from './components/Post'
import Register from './components/Register'
import SinglePost from './components/SinglePost'
import { UserContextProvider } from './components/UserContext'




function App() {
  return (

    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Index />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create' element={<CreatePost />} />
          <Route path='/post/:id' element={<SinglePost />} />
          <Route path='/edit/:id' element={<EditPost />} />
        </Route>




      </Routes>

    </UserContextProvider>


  )
}

export default App
