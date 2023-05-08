import PropTypes from 'prop-types';

 export const StatisticElement=(props)=> {

  return  ( <li class="item">
         <span class="label"> {props.label}</span>
         <span class="percentage"> {props.percentage}%</span>
       </li>)
}

StatisticElement.propTypes = {
       label: PropTypes.string,
       percentage: PropTypes.number,
}