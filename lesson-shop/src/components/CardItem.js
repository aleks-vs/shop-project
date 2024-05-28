const CardItem = (props) => {
  // console.log("props", props.props.name);

  return (
      <ul className="item-card">
          <li><img src={props.props.img} alt='item' /></li>
      <li style={{ textAlign: "center" }}>
        <b>{props.props.name}</b>
      </li>
      <li>Описание: {props.props.description}</li>
      <li>Цена: {props.props.price + "$"}</li>
    </ul>
  );
};

export default CardItem;
