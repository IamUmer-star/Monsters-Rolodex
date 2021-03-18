import { React ,Component} from 'react';
import  About from './containers/About'
import  Contact from './containers/Contact'
import  Home from './containers/homepage/Home.jsx'
import {CardList} from './components/card-list-components'
import {SearchBox} from './components/search-box/search-box';
import './App.css'
import './index.css'

class App extends Component {
    componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(user=> this.setState({monsters:user}));
    }
    constructor() {
        super();
        this.state = {
            monsters: [ ],
            searchField:''
        }

    };
    handelChange = (e) =>{
        this.setState({searchField: e.target.value})

    };
  render() {
      const {monsters,searchField} =this.state;
      const filterMonsters =monsters.filter(monsters =>
      monsters.name.toLowerCase().includes(searchField.toLowerCase()))
        return(

                <div className={'App'} >
                    <h1 className={'h1'}>Monsters Mango  rolodax</h1>
                     <SearchBox
                     placeholder={'SearchHere'}
                     handelChange={this.handelChange}
                     />
                     <CardList monsters ={filterMonsters} > </CardList>
                    <Home  exact path={'/'}/>
                    <About exact path={'/about'}/>
                    <Contact exact path={'/contact'}/>
                </div>
  );
}}
export default App;
