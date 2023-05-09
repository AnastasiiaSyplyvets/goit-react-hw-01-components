import PropTypes from 'prop-types';
import {StatisticElement} from './StatisticElement';
import css from './Statistic.module.css';

export const Statistics =(props)=> {
    const {title="Upload stats", stats} = props;

    return (<section className={css.statistics}>
    <h2 className={css.StatTitle}>{title && "Upload stats"}</h2>
  
    <ul className={css.StatList}>
     {stats.map(element => (
         <StatisticElement
         key = {element.id}
         label = {element.label}
         percentage ={element.percentage}
         />
     ))}
    
    </ul>
  </section>);
}

Statistics.propTypes ={
  title: PropTypes.string,
  stats: PropTypes.array,
}