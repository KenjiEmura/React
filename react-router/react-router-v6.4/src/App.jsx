import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";

import BlogLayout from "./pages/BlogLayout";
import BlogPostsPage, { loader as blogPostsLoader } from "./pages/BlogPosts";
import PostDetailPage, {
  loader as blogPostDetailLoader,
} from "./pages/PostDetail";
import NewPostPage, { onSubmitAction } from "./pages/NewPost";
import RootLayout from "./pages/RootLayout";
import WelcomePage from "./pages/Welcome";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <WelcomePage /> },
      {
        path: "blog",
        element: <BlogLayout />,
        children: [
          { path: "", element: <BlogPostsPage />, loader: blogPostsLoader },
          {
            path: ":id",
            element: <PostDetailPage />,
            loader: blogPostDetailLoader,
          },
          { path: "new", element: <NewPostPage />, action: onSubmitAction },
        ],
      },
    ],
  },
]);

const routerAlternative = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<WelcomePage />} />
      <Route path="blog" element={<BlogLayout />}>
        <Route index element={<BlogPostsPage />} loader={blogPostsLoader} />
        <Route
          path=":id"
          element={<PostDetailPage />}
          loader={blogPostDetailLoader}
        />
        <Route path="new" element={<NewPostPage />} action={onSubmitAction} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
