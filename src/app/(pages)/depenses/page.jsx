"use client";
import React from "react";

export default function depenses() {

  return (
    <div className="part-1">
      <nav>
        <div className="left-nav">
          <h1>depenses</h1>
          <div>La Section Depenses</div>
        </div>
      </nav>
      <div className="content">
        <form id="expensesForm">
          <div className="top-content">
            <div>
              <p>Le type de depenses:</p>
              <input
                type="text"
                className="salle"
                placeholder="le type de depenses...."
                name="name"
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
              <p>Date des dépenses:</p>
              <input
                type="date"
                className="salle"
                placeholder="date des dépenses...."
                name="expenseDate"
              />
            </div>
            <div>
              <p>Choose the client</p>
              <select
                style={{ marginBottom: "15px" }}
                name="persone_id"
              >
                <option value={null}>اختر العميل</option>
                <option>
                      lol
                    </option>
              </select>
            </div>
            <div>
              <p>payment method</p>
              <select
                name="PaymentMethod"
              >
              </select>
            </div>
          </div>
          <input
              type="submit"
              value="modifier un dépense"
            />
        </form>
        <div className="bottom-content">
          <input type="button" value="PDF" />
          <div className="table-pool">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">le type de cout</th>
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
                      <button
                      >
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
        </div>
      </div>
    </div>
  );
}
