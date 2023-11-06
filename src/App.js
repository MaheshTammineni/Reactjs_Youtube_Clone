import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import Store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import Demo from './components/Demo';
import Demo2 from './components/Demo2';
const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "watch",
      element: <WatchPage />
    },
    {
      path: "demo",
      element: <>
      <Demo /><Demo2 />
      </>
    }
  ]
}
])
function App() {
  //provide store to app using provider from react-redux
  return (
    <Provider store={Store}>
    <div className="App">
     <Head />
     {/* //components change according to my app router so provided in RouterProvider*/}
     <RouterProvider router={appRouter}>

     </RouterProvider>
    </div>
    </Provider>
  );
}

export default App;
