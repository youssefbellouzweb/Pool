"use client";

export default function UpdateTraiteur_Tool() {

  return (
    <div id="UpdateTraiteur_Tool">
      <div>
        <img src="imgs/cancel.svg" alt=""/>
      </div>
      <form>
        <div>
          <input
            type="number"
            name="price"
            placeholder="Price"
          />
        </div>
        <div>
          <input
            type="number"
            name="qty"
            placeholder="Quantity"
          />
        </div>
        <div>
          <input
            type="number"
            name="returnedQty"
            placeholder="Returned Quantity"
          />
        </div>
        <div>
          <button>Update</button>
        </div>
      </form>
    </div>
  );
}
