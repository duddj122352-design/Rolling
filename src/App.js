import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainPage from './MainPage/MainPage'
import ListPage from './ListPage/ListPage'
import CreatePostPage from './CreatePostPage/CreatePostPage'
import OwnerPage from './RollingPage/OwnerPage'
import RecipientPage from './RollingPage/RecipientPage'
import MessageHeader from './Component/Header/MessageHeader'
import Messagepage from './MessagePage/MessagePage'


function App() {
  return <Messagepage/>
}

export default App