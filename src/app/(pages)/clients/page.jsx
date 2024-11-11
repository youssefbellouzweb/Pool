
import Image from "next/image";

export default function page() {
  return (
    <div id="Client_Page">
      <div>
        <h1>إضافة عميل أو مورد</h1>
        <form>
          <div>
            <input
              type="text"
              className="salle"
              name="ClientCIN"
              placeholder="CIN"
            />
          </div>
          <div>
            <input
              type="text"
              className="salle"
              name="FirstName"
              placeholder="الاسم الأول"
            />
          </div>
          <div>
            <input
              type="text"
              className="salle"
              name="LastName"
              placeholder="اسم العائلة"
            />
          </div>
          <div>
            <input
              type="text"
              className="salle"
              name="Thel"
              placeholder="رقم الهاتف"
            />
          </div>
          <div>
            <input
              type="text"
              className="salle"
              name="Email"
              placeholder="بريد إلكتروني"
            />
          </div>
          <div>
            <div>
              <label>عميل: </label>
              <input type="checkbox"/>
            </div>
            <div>
            <div>
              <label>المورد: </label>
              <input type="checkbox"/>
            </div>
            </div>
          </div>
          <div>
          <button >إضافة</button>
          </div>
        </form>
      </div>
      <div className="bottom-content">
          <div className="head-table" style={{ margin: "0 auto" }}>
            <p>قائمة العملاء :</p>
            <div className="filter">
              Filter
              <Image width={10} height={10} src="/imgs/filter.png" alt="" />
            </div>
          </div>
          <form>
            <div
              className="table-pool"
              style={{ overflow: "auto", margin: "0 auto" }}
            >
              <table className="table">
                <thead>
                  <tr>
                    <th>معرف العميل</th>
                    <th>CIN</th>
                    <th>الاسم الأول</th>
                    <th>اسم العائلة</th>
                    <th>رقم التليفون</th>
                    <th>بريد إلكتروني</th>
                    <th>الاختيارات</th>
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
                          <button>
                            update
                          </button>
                          <button>
                            delete
                          </button>
                        </td>
                      </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
        <div className="bottom-content">
          <div className="head-table" style={{ margin: "0 auto" }}>
            <p>List Des fournisseuse :</p>
            <div className="filter">
              Filter
              <Image width={10} height={10} src="/imgs/filter.png" alt="" />
            </div>
          </div>
          <form>
            <div
              className="table-pool"
              style={{ overflow: "auto", margin: "0 auto" }}
            >
              <table className="table">
                <thead>
                  <tr>
                    <th>معرف المورد</th>
                    <th>CIN</th>
                    <th>الاسم الأول</th>
                    <th>اسم العائلة</th>
                    <th>رقم التليفون</th>
                    <th>بريد إلكتروني</th>
                    <th>الاختيارات</th>
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
                          <button>
                            update
                          </button>
                          <button>
                            delete
                          </button>
                        </td>
                      </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
    </div>
  );
}
