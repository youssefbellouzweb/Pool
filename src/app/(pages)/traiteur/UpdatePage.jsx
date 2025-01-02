"use client";

export default function UpdateTraiteur_Tool() {
  return (
    <div id="UpdateTraiteur_Tool">
      <div>
        <img src="imgs/cancel.svg" alt="" />
      </div>
      <form>
        <div>
          <select name="ClientId">
          <option selected>
            lol
          </option>
          </select>
        </div>
        <div>
          <input
            type="number"
            name="Advance"
          />
        </div>
        <div>
          <input
            type="datetime-local"
            name="dateStart"
          />
        </div>
        <div>
          <input
            type="datetime-local"
            name="dateEnd"
          />
        </div>
        <div>
          <select
          >
            <option>
              lol
                </option>
          </select>
        </div>
        <div>
          <button>Update</button>
        </div>
      </form>
    </div>
  );
}
