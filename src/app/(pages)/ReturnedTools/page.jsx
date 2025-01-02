"use client";

import Image from "next/image";

export default function page() {
  return (
    <>
      <div id="ReturnedTools_Page">
        <div style={{ marginBottom: "30px" }}>
          <h1>choisir un event</h1>
          <div>
            <select>
              <option value={null}>Choosir une fête</option>
              <option>lol</option>
            </select>
          </div>
        </div>
        <div className="bottom-content" style={{ marginBottom: "30px" }}>
            <div className="head-table" style={{ margin: "0 auto" }}>
              <p>Liste Des Outils Non Retournés :</p>
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
                <table className="table" style={{ width: "1000px" }}>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Tool name</th>
                      <th>prix</th>
                      <th>Quantity</th>
                      <th>Returned quantity</th>
                      <th>Date start</th>
                      <th>Date end</th>
                      <th>Acions</th>
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
                          <td></td>
                          <td>
                            <button
                            >
                              update
                            </button>
                            <button
                              
                            >
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
              <p>Liste Des Outils Retournés :</p>
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
                <table className="table" style={{ width: "1000px" }}>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Tool name</th>
                      <th>prix</th>
                      <th>Quantity</th>
                      <th>Returned quantity</th>
                      <th>Date start</th>
                      <th>Date end</th>
                      <th>Acions</th>
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
                          <td></td>
                          <td>
                            <button
                              
                            >
                              update
                            </button>
                            <button
                              
                            >
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
              <p>Des outils toujours utilisés :</p>
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
                <table className="table" style={{ width: "1000px" }}>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Nom de client</th>
                      <th>Nom de outil</th>
                      <th>prix</th>
                      <th>Quantity</th>
                      <th>Returned quantity</th>
                      <th>Date start</th>
                      <th>Date end</th>
                      <th>Acions</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                          <td></td>
                          <td>
                            
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <button
                              
                            >
                              update
                            </button>
                            <button
                              
                            >
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
    </>
  );
}
