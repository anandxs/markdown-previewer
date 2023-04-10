import React from "react";
import './App.css' 

export default function App() {
    return (
        <Previewer />
    );
}

class Previewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: ''
        }
    }
    updatePreview = (event) => {
        this.setState({
            markdown: event.target.value
        })
    }
    render() {
        return (
            <div>
                <textarea 
                    name="editor" 
                    id="editor" 
                    cols="30" 
                    rows="10"
                    onChange={this.updatePreview}
                    value={this.state.markdown}></textarea>
                <div id="preview">{this.state.markdown}</div>
            </div>
        );
    }
}
