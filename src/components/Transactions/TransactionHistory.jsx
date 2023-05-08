import {TableRow} from './TableRow.jsx'

export const TransactionHistory =(props)=> {
    const {items} = props;
    return (
        <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
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