import PropTypes from 'prop-types';
import css from './Statistic.module.css';
import {getRandomHexColor} from './getRandomHexColor';

export const Statistics =(props)=> {
    const {title="Upload stats", stats} = props;

    return (<section className={css.statistics}>
    <h2 className={css.StatTitle}>{title && "Upload stats"}</h2>
  
    <ul className={css.StatList}>
     {stats.map(element => (
         <li key={element.id} className={css.statsItem} style={{backgroundColor: getRandomHexColor()}}>
         <span className={css.StatLabel}> {element.label}</span>
         <span className={css.StatPercentage}> {element.percentage}%</span>
       </li>
         
     ))}
    
    </ul>
  </section>);
}

Statistics.propTypes ={
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    label:  PropTypes.string,
    percentage: PropTypes.number,

  })).isRequired,
}