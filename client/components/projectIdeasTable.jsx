import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import ProjectIdeaRow from './projectIdeaRow.jsx';
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
    SelectionState,
  } from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableColumnResizing,
  TableFilterRow,
  TableSelection
} from '@devexpress/dx-react-grid-material-ui';

function ProjectIdeasTable({projects}){
    const [columns] = useState([
        { name: "projectname", title: "projectname" },
        { name: "projecttype", title: "projecttype" },
        { name: "stack", title: "stack" },
        { name: "technologies", title: "technologies" },
        { name: "description", title: "description" },
    ]);
    const rows = projects;
    // rows.forEach((row) => {
    //     row["github link"] = `<a href="${row["github link"]}`;
    // })
    const [columnWidths, setColumnWidths] = useState([
        { columnName: "projectname", width: 160},
        { columnName: "projecttype", width: 160},
        { columnName: "stack", width: 90 },
        { columnName: "technologies", width: 300 },
        { columnName: "description", width: 300 },
    ])

    // const [selection, setSelection] = useState([1]);
    

    return(

        <Paper>
        <Grid rows={rows} columns={columns}>
            <SortingState defaultSorting={[{ columnName: "projectname", direction: "asc"}]} />
            <IntegratedSorting />
            <FilteringState defaultFilters={[]} />
            <IntegratedFiltering />
           
            <Table rowComponent={ProjectIdeaRow}/>
            <TableColumnResizing columnWidths={columnWidths} onColumnWidthsChange={setColumnWidths} />
            <TableHeaderRow showSortingControls/>
          
            <TableFilterRow />
        </Grid>
      </Paper>

    )
}

export default ProjectIdeasTable;