"use client";
import Image from "next/image";
import styles from "./page.module.css";

export default function traiteur() {
  return (
    <>
      <div className="part-1" id="TraiteurContentX98723">
        <nav>
          <div className="left-nav">
            <h1>الأحدات</h1>
            <div>Ajoute les outil et les commandes</div>
          </div>
        </nav>
        <div className="content">
          <form>
            <div className="top-content">
              <div className="left-top-content">
                <p>إضافة أداة:</p>
                <input
                  type="text"
                  className="salle"
                  placeholder="إضافة أداة...."
                  name="name"
                />
              </div>
            </div>
            <input type="submit" value="Ajoute Outil" />
          </form>
          <form>
            <div className="top-content">
              <div className="left-top-content">
                <p>إضافة حدث:</p>
                <input
                  type="text"
                  className="salle"
                  placeholder="إضافة حدث...."
                  name="name"
                />
              </div>
            </div>
            <input type="submit" value="Ajoute Party" />
          </form>
          <div className="bottom-content">
            <div className="head-table">
              <p>List Des Events :</p>
              <div className="filter">
                Filter
                <Image
                  width={10}
                  height={10}
                  src="/imgs/filter.png"
                  alt="lol"
                />
              </div>
            </div>
            <div className="table-pool">
              <table className="table">
                <thead>
                  <tr>
                    <th style={{ width: "10%" }}>Id</th>
                    <th style={{ width: "60%" }}>Events name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
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
          <div className="bottom-content">
            <div className="head-table">
              <p>List Des Operations :</p>
              <div className="filter">
                Filter
                <Image width={10} height={10} src="/imgs/filter.png" alt="" />
              </div>
            </div>
            <form id="TraiteurToolsX98234">
              <div id="TraiteurActions">
                <div>
                  <div>
                    <select>
                      <option value={null}>Choose the event name</option>
                      <option>lol</option>
                    </select>
                  </div>
                  <div>
                    <select>
                      <option value={null}>Choose the client</option>
                      <option>lol</option>
                    </select>
                  </div>
                  <div>
                    <input type="datetime-local" />
                  </div>
                  <div>
                    <input type="datetime-local" />
                  </div>
                  <div>
                    <select>
                      <option>lol</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="table-pool">
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>outil</th>
                      <th>prix</th>
                      <th>quantite</th>
                      <th>action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input className={styles.checkpool} type="checkbox" />
                      </td>
                      <td></td>
                      <td>
                        <input
                          className="salle"
                          placeholder="ajoute prix..."
                          type="text"
                        />
                      </td>
                      <td>
                        <input
                          className="salle"
                          placeholder="ajoute qty..."
                          type="text"
                        />
                      </td>
                      <td>
                        <button>update</button>
                        <button>delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <div>
                  <input
                    type="number"
                    className="salle"
                    placeholder="Avance"
                    style={{ width: "50%" }}
                  />
                  <p style={{ margin: "0", fontSize: "1.3rem" }}>
                    <span>00</span> DH
                  </p>
                </div>
                <div className="submit-traiteur">
                  <input
                    type="submit"
                    style={{ margin: "0", width: "100%" }}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="bottom-content">
            <div className="head-table">
              <p>List Des Traiteurs Tools :</p>
              <div className="filter">
                Filter
                <Image width={10} height={10} src="/imgs/filter.png" alt="" />
              </div>
            </div>
            <div id="traiteurFilterX090909">
              <div>
                <label>البحث حسب تاريخ البدء</label>
                <input type="date" className="salle" style={{ width: "90%" }} />
              </div>
              <div>
                <label>البحث حسب تاريخ الانتهاء</label>
                <input type="date" className="salle" style={{ width: "90%" }} />
              </div>
              <button style={{ alignSelf: "end", margin: "0px" }}>بحت</button>
            </div>
            <form>
              <div className="table-pool" style={{ overflow: "auto" }}>
                <table className="table" id="TraiteurToolsTable">
                  <thead>
                    <tr>
                      <th>event</th>
                      <th>client name</th>
                      <th>total</th>
                      <th>avance</th>
                      <th>payment method</th>
                      <th>date start</th>
                      <th>date end</th>
                      <th>actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td style={{ fontSize: ".8rem" }}></td>
                      <td style={{ fontSize: ".8rem" }}></td>
                      <td>
                        <button>update</button>
                        <button>delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>
          <div>
            <p id="PicinePool">00 dh</p>
          </div>
        </div>
      </div>
    </>
  );
}
