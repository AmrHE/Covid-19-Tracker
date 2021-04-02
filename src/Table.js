import React from 'react';
import './Table.css';

function Table({ countries }) {
  return (
    <div className="table">
      <table>
        <tbody>
          {countries.map(country => (
            <tr key={country.country}>
              <td>{country.country}</td>
              <td><strong>{country.cases}</strong></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
