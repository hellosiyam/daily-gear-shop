import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Helmete = ({ tittle }) => {
    return (
        <div>
            <Helmet>
                <title>{tittle}</title>
            </Helmet>
        </div>
    );
};

Helmete.propTypes = {
    tittle: PropTypes.element.isRequired
}

export default Helmete;