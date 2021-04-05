import React from 'react';
import numeral from 'numeral';
import './Table.css';

function Table({ countries }) {
  return (
    <div className="table">
      <table>
        <tbody>
          {countries.map(country => (
            <tr key={country.country}>
              <td>{country.country}</td>
              <td><strong>{numeral(country.cases).format("0,0")}</strong></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
