import React from 'react';

function ProjectRow({row}){
    return(
        <tr>
            <td key={row.Cohort}>{row.Cohort}</td>
            <td key={row.Released}>{row.Released}</td>
            <td key={row["Project Name"]}>{row["Project Name"]}</td>
            <td key={row["Project Type"]}>{row["Project Type"]}</td>
            <td key={row.Stack}>{row.Stack}</td>
            <td key={row.Category}>{row.Category}</td>
            <td key={row.Technologies}>{row.Technologies}</td>
            <td key={row["Github Stars"]}>{row["Github Stars"]}</td>
            <td key={row["Github Link"]}>{row["Github Link"]}</td>
            <td key={row["Write up Link"]}>{row["Write up Link"]}</td>
            <td key={row.Description}>{row.Description}</td>

        </tr>
    )
}

export default ProjectRow;