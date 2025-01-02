"use client";

export default function piscine() {
  return (
    <div id="PoolPage" className="part-1">
      <nav>
        <div className="left-nav">
          <h1>حمام سباحة</h1>
          <div>Votre piscine Personnel</div>
        </div>
      </nav>
      <div className="content">
        <form id="AddPicine">
          <div>
            <div id="Offers">
              {[2, 3, 5, 10, 15, 20, 25, 30].map((ele) => {
                return (
                  <div key={ele}>
                    {ele}
                  </div>
                );
              })}
            </div>
            <div style={{ width: "30%" }}>
              <select style={{ marginBottom: "15px" }}>
                <option value={null}>اختر العميل</option>
                <option>lol</option>
              </select>
              <select>
                <option>lol </option>
              </select>
            </div>
          </div>
          <div id="CountsClient">
            <input
              type="number"
              name="count"
              className="salle"
              placeholder="Enter the clients count"
            />
            <button>إضافة</button>
          </div>
        </form>
        <div className="bottom-content" id="Picine-bottom-content">
          <div>
            <input type="button" value="PDF" />
            <input className="salle" type="date" style={{ width: "40%" }} />
            <button>calc total</button>
          </div>
          <div className="table-pool">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">المعرف</th>
                  <th scope="col">اسم العميل</th>
                  <th scope="col">العرض</th>
                  <th scope="col">عدد العملاء</th>
                  <th scope="col">مجموع</th>
                  <th scope="col">طرق الدفع</th>
                  <th scope="col">تاريخ</th>
                  <th scope="col">الاختيارات</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <th></th>
                  <td></td>
                  <td>
                    <button>update</button>
                    <button>delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <div
              id="PicinePool"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <p style={{ margin: "0 20px 0 0" }}>عدد العملاء 00 </p>
              <p style={{ margin: "0 0 0 20px" }}>00 dh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
