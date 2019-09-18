import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import ProjectRow from './projectRow.jsx';
import { objectExpression } from '@babel/types';
import TableHeader from './projectsTableHeader.jsx';
import ReactTable from "react-table";
import "react-table/react-table.css"
import Paper from '@material-ui/core/Paper';
import {
    SortingState,
    IntegratedSorting,
    FilteringState,
    IntegratedFiltering,
    TableRowDetail,
    RowDetailState,
  } from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableColumnResizing,
  TableFilterRow
} from '@devexpress/dx-react-grid-material-ui';

function ProjectsTable({projects}){
    const [columns] = useState([
        { name: "Cohort", title: "Cohort" },
        { name: "Released", title: "Released" },
        { name: "Project Name", title: "Project Name" },
        { name: "Project Type", title: "Project Type" },
        { name: "Stack", title: "Stack" },
        { name: "Category", title: "Category" },
        { name: "Technologies", title: "Technologies" },
        { name: "Github Stars", title: "Github Stars" },
        { name: "Github Link", title: "Github Link" },
        { name: "Write up Link", title: "Write up Link" },
        { name: "Description", title: "Description" },
    ]);
    const rows = projects;
    rows.forEach((row) => {
        row["Github Link"] = `<a href="${row["Github Link"]}`;
    })
    const [columnWidths, setColumnWidths] = useState([
        { columnName: "Cohort", width: 90 },
        { columnName: "Released", width: 90 },
        { columnName: "Project Name", width: 130},
        { columnName: "Project Type", width: 160},
        { columnName: "Stack", width: 90 },
        { columnName: "Category", width: 90 },
        { columnName: "Technologies", width: 200 },
        { columnName: "Github Stars", width: 90 },
        { columnName: "Github Link", width: 150 },
        { columnName: "Write up Link", width: 150 },
        { columnName: "Description", width: 300 },
    ])

    const TableRow =({ row, ...restProps }) => (
        <Table.Row {...restProps} onClick={() => alert(`You clicked on ${row["Project Name"]}`)} />

    )

    

    return(
        // <table>
        //     <tbody>
        //     <tr><TableHeader products={products}/></tr>
        //     { products.map((row, i) => {
        //         console.log("row: ", row);
        //         return <ProjectRow key={i} row={row} />
        //     })}
        //     </tbody>
        // </table>
        <Paper>
        <Grid
          rows={rows}
          columns={columns}
        >
            <SortingState defaultSorting={[{ columnName: "Project Name", direction: "asc"}]} />
            <IntegratedSorting />
            <FilteringState defaultFilters={[]} />
            <IntegratedFiltering />
            <Table rowComponent={ProjectRow}/>
            <TableColumnResizing columnWidths={columnWidths} onColumnWidthsChange={setColumnWidths} />
            <TableHeaderRow showSortingControls/>
            <TableFilterRow />
        </Grid>
      </Paper>

    )
}

export default ProjectsTable;