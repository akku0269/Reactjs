/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { AuthLayout, Login} from './components/index.js'
import EditPost from './pages/EditPost.jsx'
import AllPosts from './pages/AllPosts.jsx'
import Post from './pages/Post.jsx'
import SignUp from './pages//SignUp.jsx'
import Home from './pages/Home.jsx'
import AddPost from './pages/AddPost.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <SignUp />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPosts />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])


// const router = createBrowserRouter(    
//   createRoutesFromElements(
//     <Route path='/' element={<App/>}>
//       <Route  path='/' element={<Home/>}/>
//       <Route  path='/login' element= {(<AuthLayout authentication={false}><Login/></AuthLayout>)}/>       {/*  no authentication required so suthentication = false */}
//       <Route  path='/signup' element= {(<AuthLayout authentication={false}><SignUp/></AuthLayout>)}/>
//       <Route  path='/all-posts' element= {(<AuthLayout authentication><AllPosts/></AuthLayout>)}/>
//       <Route  path='/add-post' element= {(<AuthLayout authentication><AddPost/></AuthLayout>)}/>
//       <Route  path='/post/:slug' element= {(<AuthLayout authentication><Post/></AuthLayout>)}/>
//       <Route  path='/edit-post/:slug' element= {(<AuthLayout authentication><EditPost/></AuthLayout>)}/>
  
//     </Route>
//   )
// )



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
