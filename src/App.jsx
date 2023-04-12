import React from "react";
import './App.css';
import { marked } from 'marked';
import hljs from 'highlight.js';

export default function App() {
    return (
        <Previewer />
    );
}

class Previewer extends React.Component {
    constructor(props) {
        super(props);
        marked.setOptions({
            renderer: new marked.Renderer(),
            highlight: function(code, lang) {
              const language = 'javascript';
              return hljs.highlight(code, { language }).value;
            },
            langPrefix: 'hljs language-',
            pedantic: false,
            gfm: true,
            breaks: true
          });
        this.state = {
            textContent: 
            `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.
        
1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`
        }
    }
    updatePreview = (event) => {
        this.setState({
            textContent: event.target.value
        });
    }
    maximizeEditor = () => {
        const previewWindow = document.getElementById('preview-window');
        const editorWindow = document.getElementById('editor-window');
        const maximizeIcon = document.getElementById('editor-max');
        const minimizeIcon = document.getElementById('editor-min');
        previewWindow.style.display='none';
        editorWindow.style.height = '90vh';
        maximizeIcon.style.display = 'none';
        minimizeIcon.style.display = 'block';
    }
    minimizeEditor = () => {
        const previewWindow = document.getElementById('preview-window');
        const editorWindow = document.getElementById('editor-window');
        const maximizeIcon = document.getElementById('editor-max');
        const minimizeIcon = document.getElementById('editor-min');
        previewWindow.style.display='block';
        editorWindow.style.height = '230px';
        maximizeIcon.style.display = 'block';
        minimizeIcon.style.display = 'none';
    }
    render() {
        const markup = marked.parse(this.state.textContent, { gfm: true, breaks: true})
        const defaultMarkdown = { __html: markup };
        return (
            <div id="wrapper">
                <div className="window" id="editor-window">
                <div className="title-bar">
                    <div className="title-bar-text">Editor</div>
                    <div className="title-bar-controls">
                        <i id="editor-max" onClick={this.maximizeEditor} className="fa-sharp fa-solid fa-minimize"></i>
                        <i id="editor-min" onClick={this.minimizeEditor} className="fa-sharp fa-solid fa-maximize"></i>
                    </div>
                </div>
                    <textarea 
                        name="editor" 
                        id="editor"
                        onChange={this.updatePreview}
                        value={this.state.textContent}>
                    </textarea>
                </div>
                <div className="window"  id="preview-window">
                    <div className="title-bar">
                        <div className="title-bar-text">Previewer</div>
                        <div className="title-bar-controls">
                            <i className="fa-sharp fa-solid fa-maximize"></i>
                        </div>
                    </div>
                    <div id="preview" dangerouslySetInnerHTML={defaultMarkdown} />
                </div>
            </div>
        );
    }
}