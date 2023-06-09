import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './paegs/Login'
import Layout from './Layout'
import IndexPage from './paegs/IndexPage'
import RegisterPage from './paegs/RegisterPage'
import axios from 'axios'
import { UserContextProvider } from './UserContext'

import ProfilePage from './paegs/ProfilePage'
import PlacesPage from './paegs/PlacesPage'
import PlacesFormPage from './paegs/PlacesFormPage'
import PlacePage from './paegs/PlacePage'
import BookingsPage from './paegs/BookingsPage'
import BookingPage from './paegs/BookingPage'

// to recieve jwt tokens
axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials = true;

function App() {

  return (
    <UserContextProvider>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/account' element={<ProfilePage />} />
          <Route path='/account/places' element={<PlacesPage />} />
          <Route path='/account/places/new' element={<PlacesFormPage />} />
          <Route path='/account/places/:id' element={<PlacesFormPage />} />
          <Route path='/place/:id' element={<PlacePage />} />
          <Route path='/account/bookings' element={<BookingsPage />} />
          <Route path='/account/bookings/:id' element={<BookingPage />} />

        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
