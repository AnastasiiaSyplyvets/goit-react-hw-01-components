import PropTypes from 'prop-types';
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
      <tr key={element.id} className={css.TableLine}>
      <td className={css.TransType}>{element.type}</td>
      <td>{element.amount}</td>
      <td>{element.currency}</td>
    </tr>

      
  ))}
    
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
key: PropTypes.string,
type: PropTypes.string.isRequired,
amount: PropTypes.string.isRequired,
currency: PropTypes.string.isRequired,
  })).isRequired
}