import React from 'react';


class ImageCard extends React.Component{


    constructor(){
        super();
        this.state = {span: 0};
        this.imageRef = React.createRef();

    }
    componentDidMount() {
        debugger
        this.imageRef.current.addEventListener('load',this.setSpans);
    }
    setSpans = () => {
      const height =  this.imageRef.current.clientHeight;
      debugger
      const spans = Math.ceil( height/ 10 );
      this.setState({span: spans});
    } 

    render() {
        console.log(this.state.span)
        return(
            <div style={{gridRowEnd: `span ${this.state.span}`}}>
                <img 
                ref={this.imageRef}
                    alt={this.props.image.description}
                    src={this.props.image.urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;