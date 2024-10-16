const RestaurantCard = ({ menuName }) => {
    return (
      <>
        <div className="res-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxBOklOQD4v4QChxo3sUS95NN34zI037jLgA&s"
            width="100%"
            padding="5px"
            alt=""
          />
          <h3>{menuName.name}</h3>
          <h4>Biryani, North Indian, Asian</h4>
          <h4>{menuName.cost}</h4>
          <h4>{menuName.avgRating} stars</h4>
          {/* <h4>{menuName.deliveryTime} </h4> */}
        </div>
      </>
    );
  };

  export default RestaurantCard