import MainLayout from './layouts/mainLayout'
import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/User/user.actions'
import {auth, handleUserProfile } from './firebase/utils'

// Pages
import Login from './pages/Login';
import Registration from './pages/Registration';
import Account from './pages/Account'
import Recovery from './pages/Recovery'
import Admin from './pages/Admin'
import AddProduct from './pages/AddProduct';
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails';

// Components
import AdminToolbar from './components/AdminToolbar'
import Menu from './components/Menu'

import './default.scss';



function App() {
  const dispatch = useDispatch();

  // Handle change of current user in local state. listens for changes and sets user accordingly
  // Listen for changes to auth object
  useEffect(() => {
    // onAuthStateChanged returns the object userAuth. If user is not signed in the object will return null = user not logged in
    const authListener = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        // Make user Reference by passing the userAuth to handleUserProfile from utils file which returns a userRef
        const userRef = await handleUserProfile(userAuth);
        // use onSnapshot event to update local state of application
        userRef.onSnapshot(snapshot => {
          dispatch(setCurrentUser({
            // update id of userAuth and pass additional data (displayName, email, createDate (Utils file))
            id: snapshot.id,
            ...snapshot.data()
          }))
        })
      }
      // set cuurent user to null as userAuth is null in this case
      dispatch(setCurrentUser(userAuth));
    })
    return () => {
      // onAuthStateChanged returns a function that can be triggered to unsubscribe - to prevent memory leak
      authListener();
    }
  }, [])

  return (
    <div className="App">
      <AdminToolbar />
      <Menu />
      <Switch>
        <Route exact path='/' render={() => (
          <MainLayout>
            Homepage
          </MainLayout>
        )}/>
        <Route exact path='/products/:filterType' render={() => (
          <MainLayout>
            <Products />
          </MainLayout>
        )}/>
        <Route exact path='/products/:filterType/:filterAlcohol' render={() => (
          <MainLayout>
            <Products />
          </MainLayout>
        )}/>
        <Route path='/products/:filterType/:filterAlcohol/:filterTaste' render={() => (
          <MainLayout>
            <Products />
          </MainLayout>
        )}/>
        <Route path='/product/:productID' render={() => (
          <MainLayout>
            <ProductDetails />
          </MainLayout>
        )}/>
        <Route exact path='/search' render={() => (
          <MainLayout>
            Search
          </MainLayout>
        )}/>
        <Route exact path='/favorites' render={() => (
          <MainLayout>
            favorites
          </MainLayout>
        )}/>
        <Route exact path='/basket' render={() => (
          <MainLayout>
            basket
          </MainLayout>
        )}/>
        <Route exact path='/login' render={() => (
          <MainLayout>
            <Login />
          </MainLayout>
        )}/>
        <Route exact path='/registration' render={() => (
          <MainLayout>
            <Registration />
          </MainLayout>
        )}/>
        <Route exact path='/account' render={() => (
          <MainLayout>
            <Account />
          </MainLayout>
        )}/>
        <Route exact path='/recovery' render={() => (
          <MainLayout>
            <Recovery />
          </MainLayout>
        )}/>
        <Route exact path='/admin' render={() => (
          <MainLayout>
            <Admin />
          </MainLayout>
        )}/>
        <Route exact path='/addproduct' render={() => (
          <MainLayout>
            <AddProduct />
          </MainLayout>
        )}/>
      </Switch>
    </div>
  );
}

export default App;
