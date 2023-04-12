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
        const markup = marked.parse(event.target.value);
    }
    render() {
        const markup = marked.parse(this.state.textContent, { breaks: true });
        console.log(markup)
        const defaultMarkdown = {__html: markup };
        return (
            <div id="wrapper">
                <div class="window" id="editor-window">
                <div class="title-bar">
                    <div class="title-bar-text">Editor</div>
                    <div class="title-bar-controls">
                        <i class="fa-sharp fa-solid fa-minimize"></i>
                    </div>
                </div>
                    <textarea 
                        name="editor" 
                        id="editor"
                        onChange={this.updatePreview}
                        value={this.state.textContent}>
                    </textarea>
                </div>
                <div class="window"  id="preview-window">
                    <div class="title-bar">
                        <div class="title-bar-text">Previewer</div>
                        <div class="title-bar-controls">
                            <i class="fa-sharp fa-solid fa-minimize"></i>
                        </div>
                    </div>
                    <div id="preview" dangerouslySetInnerHTML={defaultMarkdown} />
                </div>
            </div>
        );
    }
}