import PropTypes from 'prop-types';

export const TableRow =(props)=> {
    return(
        <tr>
        <td>{props.type}</td>
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