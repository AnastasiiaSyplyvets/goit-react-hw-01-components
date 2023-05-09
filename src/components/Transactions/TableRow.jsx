import PropTypes from 'prop-types';
import css from './TableRow.module.css';


export const TableRow =(props)=> {
    return(
        <tr className={css.TableLine}>
        <td className={css.TransType}>{props.type}</td>
        <td>{props.amount}</td>
        <td>{props.currency}</td>
      </tr>
    )
}

TableRow.propTypes ={
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
}

