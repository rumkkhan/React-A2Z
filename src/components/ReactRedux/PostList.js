import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../ReactRedux/Action';



class PostList extends Component {

    componentDidMount() {
    this.props.fetchPosts()
       // console.log(this.props)
    }

    render(){
        return (
            <div>HI Post List it is</div>
        )
    }
}

export default connect(null,{fetchPosts})(PostList);
