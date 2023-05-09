import {TableRow} from './TableRow.jsx'
import css from './TransactionHistory.module.css';


export const TransactionHistory =(props)=> {
    const {items} = props;
    return (
        <table className={css.transactionHistory}>
  <thead className={css.TableHead}>
    <tr>
      <th className={css.ColumnName}>Type</th>
      <th className={css.ColumnName}>Amount</th>
      <th className={css.ColumnName}>Currency</th>
    </tr>
  </thead>

  <tbody>
  {items.map(element => (
      <TableRow
      key={element.id}
      type={element.type}
      amount={element.amount}
      currency={element.currency}
      />
  ))}
    
  </tbody>
</table>
    )
}