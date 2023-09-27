export default function PostList({ $target }) {
	const $postList = document.createElement("div")
	$postList.className = "postList"
	$target.appendChild($postList)

	$postList.innerHTML = `
		<ul>
			<li class="dataList">
				📄아이템1
				<button class="addBtn">➕</button>
				<button class="delBtn">🗑️</button>
			</li>
			<li class="dataList">
				📄아이템2
				<button class="addBtn">➕</button>
				<button class="delBtn">🗑️</button>
			</li>
		</ul>
	`
}