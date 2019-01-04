import React, { Component } from "react";
import TodoItems from "./Component/TodoItems/TodoItems";
import AddItems from "./Component/AddItems/AddItems";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "ahmed", age: 22 },
      { id: 2, name: "ahmed", age: 22 },
      { id: 3, name: "ahmed", age: 22 }
    ]
  };
  deleteItem = id => {
    let items = this.state.items.filter(item => {
      return item.id !== id;
    });
    this.setState({ items });
  };

  // deleteItem=(id)=>{
  //   let items =this.state.items;
  //   let i= items.findIndex(item=>item.id===id)
  //   items.splice(i,1)
  //   this.setState({items})

  // }

  addItem = item => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState(items);
  };

  render() {
    return (
      <div className="App container">
        <h1 className="text-center">TodoList</h1>
        <TodoItems items={this.state.items} deleteItems={this.deleteItem} />
        <AddItems addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
