import {
  Route,
  useParams,
  Link,
  useRouteMatch,
  useLocation,
} from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  { id: "q1", author: "A. Kenji", text: "Learning React is fun" },
  { id: "q2", author: "B. Hernando", text: "Learning React is great" },
];

const QuoteDetail = () => {
  // const location = useLocation();  // Can't be used
  const match = useRouteMatch();
  const params = useParams();

  const quote = DUMMY_QUOTES.find((item) => item.id === params.quoteId);

  if (!quote) {
    return <h1>NOT QUOTE FOUND</h1>;
  }

  const commentsUrl = `${match.url}/comments`;

  // const commentsUrl = `${location.pathname}/comments`;
  // console.log("Location: ", location);
  // console.log("Route match: ", match);
  // console.log("commentsUrl: ", commentsUrl);
  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={commentsUrl}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={commentsUrl}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
