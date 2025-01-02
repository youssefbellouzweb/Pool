"use client";

export default function page() {
  return (
    <>
      <div className="list-personel">
        <h1>list Personel</h1>
        <form className="inputs-list-personel">
          <div className="form-change">
            <label htmlFor="">
              <div>borrow me</div>
              <input
                type="number"
              />
            </label>
            <label htmlFor="">
              <div>credit him</div>
              <input
                type="number"
              />
            </label>
            <label htmlFor="">
              <div>paid him</div>
              <input
                type="number"
              />
            </label>
          </div>
          <button type="submit">
            Change
          </button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Cash</th>
              <th>Check</th>
              <th>Client credit</th>
              <th>Supplier credit</th>
              <th>Borrow me</th>
              <th>Credit him</th>
              <th>خلصتو</th>
              <th>Payed</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          <tr>
                  <td>
                    lol
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                  <td>
                    <button>Update</button>
                  </td>
                </tr>
          </tbody>
          <thead>
            <tr>
              <th>Total</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th>0</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
}
