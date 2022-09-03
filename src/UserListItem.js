const UserListItem = ({ user }) => {
  return (
    <>
      <h3>{user.name}</h3>
      <div>{user.age}</div>
    </>
  );
};

export default UserListItem;
