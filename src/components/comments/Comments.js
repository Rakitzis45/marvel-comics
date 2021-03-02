import React, { PureComponent } from 'react';
import Comment from './Comment';
// import { connect } from 'react-redux';
// import { fetchComments } from '../../actions/fetchComments'

class Comments extends PureComponent {

    render(){
        return (
            <> 
                <h1>Comments</h1>
                <ul> 
                    {this.props.comments.map((comment, index) => <Comment key={index} comment={comment}/>)} 
                </ul>
            </>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         comments: state.comments
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchComments: () => dispatch(fetchComments())
//     }
// }

export default (Comments)
// export default connect(mapStateToProps, mapDispatchToProps)(Comments)