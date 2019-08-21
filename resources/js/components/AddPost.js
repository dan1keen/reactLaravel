import React, {Component} from 'react';

class AddPost extends Component{
    constructor(props){
        super(props);
        this.state = {
            newPost:{
                title: '',
                description: '',
                price: 0,
                availability: 1
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.state.newPost);
        console.log(this.state.newPost);

    }
    handleInput(key,e){
        var state = Object.assign({},this.state.newPost);
        state[key] = e.target.value;
        this.setState({newPost: state});
    }

    render(){
        return(
            <div>
                <h2> Add new product </h2>
                <div>
                    {/*when Submit button is pressed, the control is passed to
                     *handleSubmit method
                     */}
                    <form onSubmit={this.handleSubmit}>
                        <label> Title:
                            { /*On every keystroke, the handeInput method is invoked */ }
                            <input type="text" onChange={(e)=>this.handleInput('title',e)} />
                        </label>

                        <label> Description:
                            <input type="text" onChange={(e)=>this.handleInput('description',e)} />
                        </label>

                        <label> Price:
                            <input type="text" onChange={(e)=>this.handleInput('price',e)} />
                        </label>



                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>


        );
    }

}
export default AddPost;