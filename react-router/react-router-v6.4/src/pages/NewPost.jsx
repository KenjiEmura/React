import {
  useNavigate,
  useNavigation,
  useActionData,
  redirect,
} from "react-router-dom";

import NewPostForm from "../components/NewPostForm";
import { savePost } from "../util/api";

function NewPostPage() {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  console.log("data: ", data);

  function cancelHandler() {
    navigate("/blog");
  }

  const isSubmitting = false;

  console.log("navigation: ", navigation);

  return (
    <>
      <NewPostForm
        onCancel={cancelHandler}
        submitting={navigation.state === "submitting"}
      />
    </>
  );
}

export default NewPostPage;

export async function onSubmitAction({ request }) {
  const formData = await request.formData();
  console.log("formData: ", formData);
  const post = {
    title: formData.get("title"),
    body: formData.get("post-text"),
  };
  try {
    await savePost(post);
  } catch (error) {
    return error;
  }
  return redirect("/blog");
}
