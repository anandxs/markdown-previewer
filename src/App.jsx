import React from "react";
import './App.css';

export default function App() {
    return (
        <Previewer />
    );
}

class Previewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textContent: ''
        }
    }
    updatePreview = (event) => {
        this.setState({
            textContent: event.target.value
        });
    }
    getMarkDown = (text) => {
        const markdown = marked.parse(text);
        document.getElementById('preview').innerHTML = markdown;
    };
    render() {
        return (
            <div>
                <textarea 
                    name="editor" 
                    id="editor" 
                    cols="30" 
                    rows="10"
                    onChange={this.updatePreview}
                    ></textarea>
                <div id="preview">{this.getMarkDown(this.state.textContent)}</div>
            </div>
        );
    }
}