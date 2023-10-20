import { initRouter } from "../utils/Router.js";
import EditorPage from "./editor/EditorPage.js";
import PostPage from "./sidebar/PostPage.js";

export default function App({ $target }) {
    const $listContainer = document.createElement('div')
    $listContainer.className = 'listContainer'
    const $rendingContainer = document.createElement('div')
    $rendingContainer.className = 'rendingContainer'

    $target.appendChild($listContainer)
    $target.appendChild($rendingContainer)

    const postPage = new PostPage({
        $target: $listContainer
    })

    const editorPage = new EditorPage({
        $target: $rendingContainer,
        initialState: {
            postId: 'new',
            post: {
                title: '',
                content: ''
            }
        }
    })

    this.route = () => {
        const { pathname } = window.location

        const pathList = pathname.split('/')
        if (pathList.length >= 3) {
            postId = pathList[2]
            editorPage.setState({ postId })
        }
        postPage.setState()
    }

    this.route()

    initRouter(() => this.route())
}