import Editor from "./Editor.js";

export default function EditorPage({$target, initialState}) {
    const $page = document.createElement('div')
    
    this.state = initialState;


    new Editor({
        $target: $page,
        initialState: {
            title: '',
            content: ''
        }
    })


    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        $target.appendChild($page)
    }

    this.render()
}