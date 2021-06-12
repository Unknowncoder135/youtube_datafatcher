import React from 'react';

class Searchbar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            <>
            <div className='search-bar ui segment'>
                <h3 style={{textAlign: 'right',color:"red"}}><img style={{width:"35px",borderRadius:"20px",fontFamily:"-moz-initial"}} src="mm.jpg" alt="my logo"/>Hiren.Solanki</h3>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor="video-search">Video Search</label>
                        <input onChange={this.handleChange} style={{color:"black"}} name='video-search' type="text"  placeholder="Search any video😋😃."/>
                    </div>
                </form>
            </div>
            </>
        )
    }
}
export default Searchbar;