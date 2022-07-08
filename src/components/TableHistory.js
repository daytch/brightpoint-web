import React from "react";
import { Table } from "@mantine/core";
import allFunctions from "./../functions/AllFunctions";

export default function TableHistory(props) {
  
  const rows = props.data.map((element, idx) => (
    <tr key={idx}>
      <td>{idx + 1}</td>
      <td>{allFunctions.convertDate(element.PartnerTransactionDate)}</td>
      <td>{element.Transaction_ItemDescription}</td>
      <td>{element.Card_Number}</td>
      <td>{element.Transaction_Type}</td>
      <td>{allFunctions.formatRupiah(element.SaleValue)}</td>
      <td>{element.Points} points</td>
      <td>{element.Organisation_DisplayValue}</td>
    </tr>
  ));
  return (
    <>
      {props.data && (
        <Table mt={100} highlightOnHover>
          <thead>
            <tr>
              <th>No</th>
              <th>Date</th>
              <th>Description</th>
              <th>Card Number</th>
              <th>Type</th>
              <th>Transaction Total</th>
              <th>Points Awarded</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>{rows} </tbody>
        </Table>
      )}
    </>
  );
}
