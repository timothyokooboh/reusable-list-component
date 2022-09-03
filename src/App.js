import RegularListContainer from "./ListContainer";
import PostListItem from "./PostListItem";
import "./styles.css";
import UserListItem from "./UserListItem";

const users = [
  {
    name: "mofope ojosh",
    age: 14
  },
  {
    name: "damian duff",
    age: 72
  }
];

const posts = [
  {
    title: "how to make eguisi soup",
    content: "lorem ipsum dorsicolor bla ball ansgdggd",
    author: "timi blake"
  },
  {
    title: "how to dance",
    content: "lorem ipsum dorsicolor bla ball ansgdggd",
    author: "jamie mika"
  }
];
export default function App() {
  return (
    <div className="App">
      <RegularListContainer
        items={users}
        propName="user"
        ItemComponent={UserListItem}
      />

      <RegularListContainer
        items={posts}
        propName="post"
        ItemComponent={PostListItem}
        controls={{ ordered: true }}
      />
    </div>
  );
}
