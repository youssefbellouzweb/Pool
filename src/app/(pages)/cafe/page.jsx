import React from "react";

export default function cafe() {
  return (
    <div className="part-1">
      <nav>
        <div className="left-nav">
          <h1>cafe</h1>
          <div>La Section Cafe</div>
        </div>
      </nav>
      <div className="content">
        <form id="FormCafeePage">
          <div className="top-content">
            <div>
              <p>Ajouter le nom de l{`'`}employé:</p>
              <input
                type="text"
                className="salle"
                placeholder="Ajouter le nom de l'employé...."
                name="EmployeName"
              />
            </div>
            <div>
              <p>Ajoute le cout:</p>
              <input
                type="number"
                className="salle"
                placeholder="ajoute cout...."
                name="price"
              />
            </div>
            <div>
              <p>Ajoute la date:</p>
              <input
                type="date"
                className="salle"
                name="Date"
              />
            </div>
          </div>
          <input type="submit" value="Update" />
          
        </form>
        <div className="bottom-content" id="Cafe-bottom-content">
          <div>
            <input
              type="button"
              value="PDF"
              style={{ margin: "0" }}
            />
            <input
              className="salle"
              type="date"
              style={{ width: "40%" }}
            />
            <button
              style={{ margin: "0" }}
            >
              calc total
            </button>
          </div>
          <div className="table-pool">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">nom de l{`'`}employé</th>
                  <th scope="col">cout</th>
                  <th scope="col">date</th>
                  <th scope="col">action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th></th>
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
        <div>
          <p id="PicinePool">dh</p>
        </div>
      </div>
    </div>
  );
}
