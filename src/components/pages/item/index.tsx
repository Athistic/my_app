import { useParams } from "react-router-dom";
import { clothingCollection } from "../../../data";

const Item = () => {
  const { itemId } = useParams<{ itemId: string }>();

  const selectedItem = clothingCollection.find((item) => item.name === itemId);

  if (!selectedItem) {
    return <div>Item not found</div>;
  }
  return (
    <div>
      <h4>{selectedItem?.description}</h4>
    </div>
  );
};

export default Item;
