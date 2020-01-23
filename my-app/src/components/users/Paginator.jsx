import React, { useState } from 'react';
import styles from './Users.module.css';
import cn from "classnames";

let Paginator = ({totalUsersCount, pageSize, currentPage, onChangePage, portionSize = 10}) => {
  let pageCalculateSize = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pageCalculateSize; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pageCalculateSize / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;


    /* pages.map(page => {
      return <span className={currentPage === page && styles.selected}
        onClick={() => {onChangePage(page) }}
      >{page}</span>
    }) */

    return <div className = {styles.paginator}>
       {portionNumber > 1 && 
        <button onClick = {() => {setPortionNumber(portionNumber - 1) }}>Previous</button> 
        }
        {
          pages.filter( p => p => leftPortionPageNumber && p <= rightPortionPageNumber)
          .map( (p) => {
            return <span className={ cn({
              [styles.selectedPage]: currentPage === p
               }, styles.pageNumber) }
                       key={p}
                       onClick={(e) => {
                           onChangePage(p);
          }}>{p}</span>
          })
        }
        {portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1)  }}>NEXT</button> }
    </div>
}

export default Paginator;