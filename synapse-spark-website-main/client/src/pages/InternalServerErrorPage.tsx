
import ErrorPage from './ErrorPage';

const InternalServerErrorPage = () => {
  return (
    <ErrorPage
      statusCode={500}
      title="Internal Server Error"
      message="We're sorry, something went wrong on our end. Our team has been notified. Please try again later."
    />
  );
};

export default InternalServerErrorPage;
