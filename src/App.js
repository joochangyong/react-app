import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';

//유사 자바스크립트
class App extends Component {
  //state. 초기화를 담당
  constructor(props){
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'world wide web!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText ...'},
        {id:2, title:'CSS', desc:'CSS is for desing ...'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive ...'},
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {/* component 및 props학습 */}
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;