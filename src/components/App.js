import Editor from "./Editor.js";
import Sidebar from "./Sidebar.js";

export default function App({ $target }) {
  new Sidebar({ $target });
  new Editor({ $target });
}
