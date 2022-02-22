import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { issueUrl } = router.query;
  return (
    <div>
      <h2>Oops!</h2>
      <p>
        Something went wrong while submitting your issue.
      </p>
      <a href="/">Please try again</a>
    </div>
  );
};

export default Page;
