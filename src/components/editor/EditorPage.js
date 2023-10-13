import { request } from "../../utils/api.js";
import Editor from "./Editor.js";

export default function EditorPage({$target, initialState}) {
    const $page = document.createElement('div')
    
    this.state = initialState;
	
    const post = {
        title: '',
        content: ''
    }

    const editor = new Editor({
        $target: $page,
        initialState: post,
        onEditing: async (editPost) => {
            // Create 새 글 등록
            // Update 글 수정
            setTimeout( async () => {
                if (this.state.postId === 'new') {
                    const responsePost = await request('/documents', {
                        method: 'POST',
                        body: JSON.stringify(editPost)
                    })

					// PUT을 이용해서 업데이트 갱신
					if (editPost.content) {
                        await request(`/documents/${responsePost.id}`, {
                            method: 'PUT',
                            body: JSON.stringify(editPost)
                        })
                    }

					this.setState({
						postId: responsePost.id
					})
                } else {
                    await request(`/documents/${this.state.postId}`, {
                        method: 'PUT',
                        body: JSON.stringify(editPost)
                    })
                }
            }, 1000)
        }
    })


    this.setState = async (nextState) => {
		if(nextState === undefined) {
			return 
		}

		if(this.state.postId !== nextState.postId) {
			if(this.state.postId === 'new') {
				this.render()
				editor.setState(post)
			} else {
				if(this.state.postId !== 'new') {
					const responsePost = await request(`/documents/${this.state.postId}`)
					this.setState({
						...this.state,
						responsePost
					})
				}
			}
			return
		}
		this.state = nextState

        this.render()

		editor.setState(this.state.post || { 
			title: '',
			content: ''
		})
    }

    this.render = () => {
        $target.appendChild($page)
    }

    this.render()
}