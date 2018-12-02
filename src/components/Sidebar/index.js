import React, {Component} from 'react';
import { Layout, Menu, Icon, Button } from 'antd';
import { Link } from 'react-router-dom'
import './index.css';
const { Sider } = Layout;

class Sidebar extends Component{
    state = {
        collapsed: true,
    };

    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    }
   
    render(){
        return(
            <Sider width={200} className="sider" style={{ background: '#fff', borderRight:'3px solid white' }} trigger={null}
            collapsible collapsed={this.state.collapsed}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <Button type="default" onClick={this.toggle} style={{ marginBottom: 16, marginLeft:18 }}>
                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
              </Button>
              <Menu.Item key="1">
                <Link to="/">
                  <Icon type="picture" />
                  <span style={{color:'black',fontWeight:'500'}}>Discover</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/trending">
                  <Icon type="line-chart" />
                  <span style={{color:'black',fontWeight:'500'}}>Trending</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/genres">
                  <Icon type="appstore-o" />
                  <span style={{color:'black',fontWeight:'500'}}>Genres</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/language">
                  <Icon type="dashboard" theme="outlined" />
                  <span style={{color:'black',fontWeight:'500'}}>Languages</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/country">
                <Icon type="coffee" theme="outlined" />
                  <span style={{color:'black',fontWeight:'500'}}>Countries</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
        );
    }
}


export default Sidebar;