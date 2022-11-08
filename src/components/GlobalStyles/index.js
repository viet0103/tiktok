import './GlobalStyles.scss';
import PropTypes from 'prop-types';

function GlobalStyles({children}) {
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.any.isRequired
}

export default GlobalStyles