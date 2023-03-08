import React, { useContext } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  ContextMenu,
  Edit,
  ExcelExport,
  Filter,
  Page,
  PdfExport,
  Resize,
  Sort,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../Components";
import StateContext from "../context/context";

const Orders = () => {
  const { screenTheme } = useContext(StateContext);
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header category="Page" title="Orders" />
      <GridComponent
        width="auto"
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        style={{ background: screenTheme === "Dark" ? "#33373E" : "#FFFFFF" }}
      >
        <ColumnsDirective
          style={{ background: screenTheme === "Dark" ? "#33373E" : "#FFFFFF" }}
        >
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
