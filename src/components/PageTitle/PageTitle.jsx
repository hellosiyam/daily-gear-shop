import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const PageTitle = ({tittle}) => {
    return (
        <div>
            <Helmet>
                <title>{tittle}</title>
            </Helmet>
        </div>
    );
};

PageTitle.propTypes = {
    tittle:PropTypes.element.isRequired
}

export default PageTitle;