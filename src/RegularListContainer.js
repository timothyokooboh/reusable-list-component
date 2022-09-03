const RegularListContainer = ({ items, propName, ItemComponent }) => {
  return (
    <div>
      {items.map((item, i) => {
        return <ItemComponent key={i} {...{ [propName]: item }} />;
      })}
    </div>
  );
};

export default RegularListContainer;
