import PropTypes from 'prop-types';
import {StatisticElement} from './StatisticElement';

export const Statistics =(props)=> {
    const {title="Upload stats", stats} = props;

    return (<section class="statistics">
    <h2 class="title">{title && "Upload stats"}</h2>
  
    <ul class="stat-list">
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