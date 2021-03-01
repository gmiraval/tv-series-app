import React from 'react';
import './index.css'
const SeriesList = (props) => {
    return (
        <div>
            <ul className="series-list">
                {props.list.map(series => (//https://reactjs.org/docs/lists-and-keys.html
                        // to avoid this warnign message : index.js:1 Warning: Each child in a list should have a unique "key" prop.
                        // we added key={series.show.id} to <li> tag
                        <li key={series.show.id}>
                            {series.show.name}
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default SeriesList