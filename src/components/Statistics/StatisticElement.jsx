import PropTypes from 'prop-types';
import css from './StatisticElement.module.css';
import {getRandomHexColor} from './getRandomHexColor';

 export const StatisticElement=(props)=> {

  return  ( <li className={css.statsItem} style={{backgroundColor: getRandomHexColor()}}>
         <span className={css.StatLabel}> {props.label}</span>
         <span className={css.StatPercentage}> {props.percentage}%</span>
       </li>)
}

StatisticElement.propTypes = {
       label: PropTypes.string,
       percentage: PropTypes.number,
}