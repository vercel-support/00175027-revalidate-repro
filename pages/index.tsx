import type { InferGetStaticPropsType, GetStaticProps } from "next";

export const getStaticProps = (async (context) => {
  const currentTime = new Date().getTime();

  return { props: { currentTime } };
}) satisfies GetStaticProps<{
  currentTime;
}>;

export default function Page({
  currentTime,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return currentTime;
}
