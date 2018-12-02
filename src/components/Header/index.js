import React, {Component} from 'react';
import { Input,Icon, Row,Col, AutoComplete } from 'antd';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import './index.css';
import * as actions from '../../actions';


const Search = Input.Search;

class Topbar extends Component{
    state={
        dataSource:[],value:""
    }
    
    onSelect = (value) => {
        this.props.setQuery(this.state.value);
        this.props.history.push('/search');

    }
    
    filterItems = (query) => {
        const movieList = Object.keys(this.props.movies);
        return movieList.filter((el) =>
          el.toLowerCase().indexOf(query.toLowerCase()) > -1
        );
      }
    
    handleSearch = (value) => {
        this.setState({dataSource:this.filterItems(value), value});
    }

    render(){
        return(
            <div className="header">
                <Row  type="flex" justify="center" align="top">
                    <Col span={8}></Col>
                    <Col span={8}><div className="logo" /></Col>
                    <Col span={8}>
                    <AutoComplete
                        dataSource={this.state.dataSource}
                        style={{width:300, opacity:.5, margin:'16px 40px', float:'right', borderRadius:40}}
                        onSelect={this.onSelect}
                        onSearch={this.handleSearch}
                        placeholder="input here"
                    >
                    <Input 
                        suffix={<Icon type="search" onClick={this.onSelect} className="certain-category-icon"/>}
                    />
                    </AutoComplete>
                    </Col>                                       
                </Row>
			</div>
        );
    }
}


function mapStateToProps({movies,util}){
    return {movies,util};
}

export default withRouter(connect(mapStateToProps,actions)(Topbar));