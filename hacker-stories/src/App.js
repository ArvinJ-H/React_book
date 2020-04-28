import React from "react";
import "./App.css";



const List = props => {
  return props.list.map((item) => {
    return (
      <div key={item.objectID}>
        {" "}
        <span>
          <a href={item.url}>{item.title}</a>{" "}
        </span>
        <span>{item.author}</span> <span>{item.num_comments}</span>{" "}
        <span>{item.points}</span>
      </div>
    );
  });
};

const App = () => {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 1,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 0,
    },
  ];
  const [searchTerm, setSearchTerm] = React.useState('');
  const handlechange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <h1>hi</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handlechange} />
      <List list = {stories}/>
    </div>
  );
};

export default App;
