import React from 'react';
import { BrowserRouter as Router,useRoutes, Navigate} from 'react-router-dom';
import { Provider } from 'react-redux';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import store from './store/store';
import TaskDetail from './components/TaskDetail';

const App = () => {
  const Paths = () => {
    let routes = useRoutes([
      { path: "/", element: <TaskList /> },
      { path: "/add-task", element: <TaskForm /> },
      { path: "/edit-task/:id", element: <TaskForm /> },
      { path: "/task/:id", element: <TaskDetail /> },
      { path: "*", element: <Navigate to={{ pathname: '/' }} /> }
    ]);
    return routes;
  };
  return (
    <Provider store={store}>
      <Router>
        <Paths/>
      </Router>
    </Provider>
  );
};

export default App;
