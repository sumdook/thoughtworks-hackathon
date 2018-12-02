import React, {Component} from 'react';
import  { BrowserRouter, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Sidebar from '../Sidebar';

import Homepage from './Homepage';
import Trending from './Trending';
import Genre from './Genres';
import Search from './Search';
import Language from './Language';
import Country from './Country';

const {Content } = Layout;


class Main extends Component{

    state = {
        collapsed: false,
      };
    
    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    }
    


    render(){
        return(
            <Content style={{ padding: '50px 50px 0 50px'}}>

            <Layout style={{ padding: '24px 0px', background: '#fff', minHeight: '82vh'  }}>
                <Sidebar />
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <div>
                                <Route exact path="/" component={Homepage} />
                                <Route exact path="/trending" component={Trending} />
                                <Route exact path="/genres" component={Genre} />
                                <Route exact path="/search" component={Search} />
                                <Route exact path="/language" component={Language} />
                                <Route exact path="/country" component={Country} />
                            </div>             
                </Content>
            </Layout>
        </Content>
           
        );
    }
}


export default Main;