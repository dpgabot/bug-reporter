import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { issueUrl } = router.query;
  return (
    <div>
      <h2>Thank you! Your bug report has been submitted.</h2>
      <p>
        Follow progress on your issue <a href={issueUrl}>here</a>
      </p>
      <a>{issueUrl}</a>
    </div>
  );
};

export default Post;
