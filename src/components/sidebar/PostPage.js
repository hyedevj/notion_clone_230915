import { request } from "../../utils/api.js"
import PostList from "./PostList.js"

export default function PostPage({ $target }) {
  const $page = document.createElement("div")
  $page.className = 'documentDiv'
  $target.appendChild($page)


  const postList = new PostList({
    $target: $page,
    initialState: [],
    onAttach: async() => {
      await request('/documents', {
        method: 'POST',
        body: {}
      })
      this.setState()
    },
    onDelete: async() =>  {
      await request('/documents', {
        method: 'DELETE'
      })
      this.setState()
    }
  })

  // TODO: 컴포넌트화 시키기
  const $newBtn = document.createElement("button")
  $newBtn.textContent = "+ New Page"
  $newBtn.className = "addNew"
  $page.appendChild($newBtn)
  
  this.setState = async() => {
    const posts = await request('/documents')
    postList.setState(posts)
    this.render()
  }

  this.render = () => {
    $target.appendChild($page)
  }

}