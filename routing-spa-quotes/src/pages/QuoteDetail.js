import { useEffect } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import LoadingSpinner from "../components/UI/LoadingSpinner";

import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {
  // const location = useLocation();  // Can't be used
  const match = useRouteMatch();
  const params = useParams();

  // ↓ 🤷🏻‍♂️
  const commentsRoute = `${match.path}/comments`;
  const commentsLink = `${match.url}/comments`;

  const {
    sendRequest: fetchQuote,
    status,
    data: quote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    fetchQuote(params.quoteId);
  }, [fetchQuote, params.quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && !quote.text) {
    return <NoQuotesFound />;
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={commentsLink}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={commentsRoute}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
