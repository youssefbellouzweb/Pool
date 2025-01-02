"use client";
import "./style.css";

export default function grand_salle() {
  return (
    <div className="part-1">
      <nav>
        <div className="left-nav">
          <h1>القاعة الكبيرة</h1>
          <div>Votre grand salle Personnel</div>
        </div>
      </nav>
      <div className="content">
        <form>
          <div className="top-content">
            <div className="left-top-content">
              <div className="d-l">
                <p>أضف التكلفة:</p>
                <input
                  type="number"
                  className="salle"
                  placeholder="أضف التكلفة...."
                  name="price"
                />
              </div>
              <div>
                <p>اختر عميلا : </p>
                <select className="Salle_Client_Select">
                  <option value={null}>اختر عميلاً</option>
                  <option>hhhhhh</option>
                </select>
              </div>
              <div style={{ margin: "10px auto 0 auto" }}>
                <select name="PaymentMethod">
                  <option>hhhh</option>
                </select>
              </div>
            </div>
            <div className="right-top-content">
              <p>حدد الفترة:</p>
              <div className="date-total">
                <div className="date-left">
                  <label htmlFor="">تاريخ البدء :</label>
                  <input
                    type="datetime-local"
                    className="salle"
                    name="date_start"
                  />
                </div>
                <div className="date-right">
                  <label htmlFor="">تاريخ الانتهاء :</label>
                  <input
                    type="datetime-local"
                    className="salle"
                    name="date_end"
                  />
                </div>
              </div>
            </div>
          </div>
          <input type="submit" value="تحديث" />
        </form>
        <div className="bottom-content" id="SallesX987438">
          <div>
            <input type="button" value="PDF" />
            <div>
              <div>
                <label>البحث حسب تاريخ البدء</label>
                <input type="date" className="salle" />
              </div>
              <div>
                <label>البحث حسب تاريخ الانتهاء</label>
                <input type="date" className="salle" />
              </div>
              <button>بحت</button>
            </div>
          </div>
          <div className="table-pool" style={{ width: "100%" }}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">المعرف</th>
                  <th scope="col">اسم العميل</th>
                  <th scope="col">تكلفة</th>
                  <th scope="col">طريقة الدفع</th>
                  <th scope="col">تاريخ البداية</th>
                  <th scope="col">تاريخ النهاية</th>
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
                  <td></td>
                  <td>
                    <button>update</button>
                    <button>delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="Salle_total">
          <p>00 dh</p>
        </div>
      </div>
    </div>
  );
}
